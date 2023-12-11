import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    background-color: #fff;
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0,0,0, 0.04);
    outline: none;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
