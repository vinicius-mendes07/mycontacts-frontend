import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';
import { Form, ButtonContainer } from './styles';
import FormGroup from '../FormGroup';
import useContactForm from './useContactForm';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    name,
    email,
    phone,
    categoryId,
    categories,
    isLoadingCategories,
    isSubmitting,
    getErrorMessageByFieldName,
    isFormValid,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
    setCategoryId,
  } = useContactForm(onSubmit, ref);
  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          type="text"
          placeholder="Nome *"
          onChange={handleNameChange}
          value={name}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder="E-mail"
          onChange={handleEmailChange}
          value={email}
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          placeholder="Telefone"
          onChange={handlePhoneChange}
          value={phone}
          maxLength="15"
          disabled={isSubmitting}
        />
      </FormGroup>
      <FormGroup isLoading={isLoadingCategories}>
        <Select
          onChange={(event) => setCategoryId(event.target.value)}
          value={categoryId}
          disabled={isLoadingCategories || isSubmitting}
        >
          <option value="">Sem categoria</option>

          {categories.length > 0 && categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button
          type="submit"
          disabled={!isFormValid}
          isLoading={isSubmitting}
        >
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
