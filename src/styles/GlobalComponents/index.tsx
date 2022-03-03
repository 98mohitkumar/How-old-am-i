import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  padding: 3rem 1rem;
  gap: 1rem;
`;

export const FormWrapper = styled.section`
  width: 100%;
  max-width: 700px;
  margin: auto;
  padding: 1rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  gap: 2rem;

  & > div {
    width: 100%;
    max-width: 700px;
    display: grid;
    gap: 1rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    padding-right: 0;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  width: 250px;
  height: 65px;
  margin-top: 1rem;
  background: gold;
  display: grid;
  place-items: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
