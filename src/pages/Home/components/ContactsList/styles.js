import styled from 'styled-components';

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    span {
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.primary.main};
      font-size: 16px;
      font-weight: bold;
    }

    img {
      transition: transform 0.2s ease-in;
      transform: rotate(${({ orderBy }) => (orderBy === 'asc' ? '180deg' : '0deg')});
    }
  }

`;

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        font-weight: bold;
        color: ${({ theme }) => theme.colors.primary.main};
        text-transform: uppercase;
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      color: ${({ theme }) => theme.colors.gray[200]};
      font-size: 14px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;
