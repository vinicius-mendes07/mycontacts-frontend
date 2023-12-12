import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};

  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }
`;
