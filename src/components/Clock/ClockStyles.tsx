import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem;
  gap: 4rem;

  @media only ${(props) => props.theme.breakpoints.sm} {
    gap: 2rem;
  }

  .Y_D,
  .H_S {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
    @media only ${(props) => props.theme.breakpoints.sm} {
      gap: 2rem;
    }
  }
`;

export const TimeWrapperOverflow = styled.div`
  min-width: 140px;
  overflow: hidden;
`;

export const TimeWrapper = styled.div<{ delay: string }>`
  text-align: center;
  padding: 0.5rem;
  width: 100%;
  transform: translateY(105%);
  opacity: 0;
  animation: reveal 0.75s cubic-bezier(0.5, 0, 0.175, 1) forwards;
  animation-delay: ${({ delay }) => delay};

  @keyframes reveal {
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const TimeNum = styled.span`
  font-size: 5rem;
  color: gold;
`;
