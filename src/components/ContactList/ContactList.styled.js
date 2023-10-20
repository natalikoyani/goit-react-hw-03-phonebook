import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const StyledButton = styled.button`
  width: auto;
  margin-left: 10px;
  background-color: transparent;
  border: 0.1px solid lightgray;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 0px lightgray;

  &:active {
    background-color: blue;
  }
`;