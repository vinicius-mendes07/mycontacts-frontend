import PropTypes from 'prop-types';

import { memo } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import useToastMessage from './useToastMessage';

function ToastMessage({
  isLeaving,
  message,
  onRemoveMessage,
  animatedRef,
}) {
  const { handleRemoveToast } = useToastMessage(message, onRemoveMessage);

  return (
    <Container
      ref={animatedRef}
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="x-circle" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="x-circle" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'danger', 'success']),
    duration: PropTypes.number,
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
