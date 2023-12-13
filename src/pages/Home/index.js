// import { InputSearchContainer } from './styles';

import { Link } from 'react-router-dom';
import {
  Card, Container, Header, InputSearchContainer, ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal danger />
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Mateus Silva</strong>
              <small>Instagram</small>
            </div>

            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/d"><img src={edit} alt="edit" /></Link>
            <button type="button"><img src={trash} alt="delete" /></button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
