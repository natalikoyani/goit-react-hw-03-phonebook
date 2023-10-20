import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-width: 250px;
  margin-bottom: 50px;
  font-weight: 500;
`;

export const StyledLabel = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const StyledButton = styled.button`
  width: 115px;
  background-color: transparent;
  border: 0.1px solid lightgray;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 0px lightgray;

  &:active {
    background-color: blue;
  }
`;

export const StyledField = styled(Field)`
  border: 0.1px solid lightgray;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 3px 2px lightblue;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`;