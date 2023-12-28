import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import formatPhone from '../../utils/formatPhone';
import CategoriesService from '../../services/CategoriesService';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(true);

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  useEffect(() => {
    async function loadCategories() {
      try {
        const categoriesList = await CategoriesService.listCategories();

        setCategories(categoriesList);
      } catch {} finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, []);

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido.' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log({
    //   name,
    //   email,
    //   phone,
    //   category,
    // });
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          type="text"
          placeholder="Nome *"
          onChange={handleNameChange}
          value={name}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
          onChange={handlePhoneChange}
          value={phone}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          onChange={(event) => setCategoryId(event.target.value)}
          value={categoryId}
          disabled={isLoadingCategories}
        >
          <option value="">Sem categoria</option>

          {categories.length > 0 && categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
