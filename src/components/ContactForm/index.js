import PropTypes from 'prop-types';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input type="text" placeholder="Nome" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="E-mail" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Instagram</option>
          <option value="Instagram">Instagram</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="button">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
