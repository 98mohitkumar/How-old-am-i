import { useRef, useState } from 'react';
import {
  Button,
  Form,
  FormWrapper,
  InputsWrapper
} from '../../styles/GlobalComponents';
import Clock from '../Clock/Clock';

const FormField: React.FC = () => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [showData, setShowData] = useState(false);

  const [intervalID, setIntervalID] = useState<NodeJS.Timer>();

  const dateRef = useRef<HTMLInputElement>(null);
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const hourRef = useRef<HTMLInputElement>(null);
  const minRef = useRef<HTMLInputElement>(null);

  const today = new Date();

  const clearInputs = () => {
    dateRef.current!.value = '';
    monthRef.current!.value = '';
    yearRef.current!.value = '';
    hourRef.current!.value = '';
    minRef.current!.value = '';
  };

  const clearStates = () => {
    setYears(0);
    setMonths(0);
    setDays(0);
    setHours(0);
    setMins(0);
    setSecs(0);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const date = Number(dateRef.current!.value);
    const month = Number(monthRef.current!.value) - 1;
    const year = Number(yearRef.current!.value);

    const hours = Number(hourRef.current?.value);
    const min = Number(minRef.current?.value);

    const birthDate = new Date(year, month, date, hours, min, 0);

    const IntervalHandler = () => {
      const Interval = setInterval(() => {
        const timeDiff = new Date().getTime() - birthDate.getTime();

        const yearsFloat = timeDiff / (1000 * 3600 * 24 * 30.4375 * 12);

        const yearsSince = Math.floor(yearsFloat);

        const monthsSince = Math.floor((yearsFloat - yearsSince) * 12);

        const daysSince = Math.floor(
          ((yearsFloat - yearsSince) * 12 - monthsSince) * 30.4375
        );

        const hoursSince = Math.floor(
          (((yearsFloat - yearsSince) * 12 - monthsSince) * 30.4375 -
            daysSince) *
            24
        );

        const minsSince = Math.floor(
          ((((yearsFloat - yearsSince) * 12 - monthsSince) * 30.4375 -
            daysSince) *
            24 -
            hoursSince) *
            60
        );

        const secsSince = Math.floor(
          (((((yearsFloat - yearsSince) * 12 - monthsSince) * 30.4375 -
            daysSince) *
            24 -
            hoursSince) *
            60 -
            minsSince) *
            60
        );

        setYears(yearsSince);
        setMonths(monthsSince);
        setDays(daysSince);
        setHours(hoursSince);
        setMins(minsSince);
        setSecs(secsSince);
      }, 1000);

      setIntervalID(Interval);
    };

    const validate = date && monthRef.current!.value && year;
    let febCheck: boolean;

    const leapYear = (0 == year % 4 && 0 != year % 100) || 0 == year % 400;

    if (month == 1 && date > 29) {
      febCheck = false;
    } else if (month == 1 && date == 29) {
      febCheck = leapYear ? true : false;
    } else {
      febCheck = true;
    }

    if (validate && febCheck!) {
      if (birthDate > today) {
        clearInputs();
        return;
      } else if (intervalID) {
        clearInterval(intervalID);
        clearStates();
        IntervalHandler();
        scroll(0, 0);
        setShowData(true);
      } else {
        IntervalHandler();
        setShowData(true);
      }
    }

    clearInputs();
  };

  return (
    <>
      {showData && (
        <Clock
          years={years}
          months={months}
          days={days}
          hours={hours}
          mins={mins}
          secs={secs}
        />
      )}
      <FormWrapper>
        <Form onSubmit={submitHandler}>
          <div>
            <label className='label'>Date</label>
            <InputsWrapper>
              <input
                type='number'
                min='01'
                max='31'
                placeholder='Day'
                ref={dateRef}
              />
              <input
                type='number'
                min='01'
                max='12'
                placeholder='Month'
                ref={monthRef}
              />
              <input
                type='number'
                min='1900'
                max={today.getFullYear()}
                placeholder='Year'
                ref={yearRef}
              />
            </InputsWrapper>
          </div>

          <div>
            <label>Time (optional)</label>
            <InputsWrapper>
              <input
                type='number'
                min='00'
                max='23'
                placeholder='Hours (24h)'
                ref={hourRef}
              />
              <input
                type='number'
                min='00'
                max='59'
                placeholder='Minutes'
                ref={minRef}
              />
            </InputsWrapper>
          </div>

          <Button type='submit' onClick={() => setShowData(false)}>
            <span>How old am i ?</span>
          </Button>
        </Form>
      </FormWrapper>
    </>
  );
};

export default FormField;
