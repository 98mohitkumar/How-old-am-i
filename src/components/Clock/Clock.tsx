import {
  ClockWrapper,
  TimeNum,
  TimeWrapper,
  TimeWrapperOverflow,
} from "./ClockStyles";

type Props = {
  years: number;
  months: number;
  days: number;
  hours: number;
  mins: number;
  secs: number;
};

const Clock: React.FC<Props> = ({ years, months, days, hours, mins, secs }) => {
  return (
    <ClockWrapper>
      <div className="Y_D">
        <TimeWrapperOverflow>
          <TimeWrapper delay="0s">
            <TimeNum>
              {years.toString().length < 2 ? `0${years}` : years}
            </TimeNum>
            <p>Years</p>
          </TimeWrapper>
        </TimeWrapperOverflow>

        <TimeWrapperOverflow>
          <TimeWrapper delay="0.25s">
            <TimeNum>
              {months.toString().length < 2 ? `0${months}` : months}
            </TimeNum>
            <p>Months</p>
          </TimeWrapper>
        </TimeWrapperOverflow>

        <TimeWrapperOverflow>
          <TimeWrapper delay="0.5s">
            <TimeNum>{days.toString().length < 2 ? `0${days}` : days}</TimeNum>
            <p>Days</p>
          </TimeWrapper>
        </TimeWrapperOverflow>
      </div>

      <div className="H_S">
        <TimeWrapperOverflow>
          <TimeWrapper delay="0.75s">
            <TimeNum>
              {hours.toString().length < 2 ? `0${hours}` : hours}
            </TimeNum>
            <p>Hours</p>
          </TimeWrapper>
        </TimeWrapperOverflow>

        <TimeWrapperOverflow>
          <TimeWrapper delay="1s">
            <TimeNum>{mins.toString().length < 2 ? `0${mins}` : mins}</TimeNum>
            <p>Minutes</p>
          </TimeWrapper>
        </TimeWrapperOverflow>

        <TimeWrapperOverflow>
          <TimeWrapper delay="1.25s">
            <TimeNum>{secs.toString().length < 2 ? `0${secs}` : secs}</TimeNum>
            <p>Seconds</p>
          </TimeWrapper>
        </TimeWrapperOverflow>
      </div>
    </ClockWrapper>
  );
};

export default Clock;
