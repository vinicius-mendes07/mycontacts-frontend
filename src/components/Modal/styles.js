import styled from 'styled-components';

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    background-color: #fff;
    /* height: 204px; */
    padding: 24px;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

    h1 {
      font-size: 22px;
      color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main
      : theme.colors.gray[900]
  )};
    }

    p {
      margin-top: 8px;
    }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 8px;
    border: none;
    font-size: 16px;
  }
/*

  .btn-delete {
    border-radius: 4px;
    color: #fff;
    background-color: #FC5050;
    font-weight: bold;
  } */
`;
