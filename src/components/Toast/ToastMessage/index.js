import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icons/check-circle.svg';
import useToastMessage from './useToastMessage';

export default function ToastMessage({
  isLeaving,
  message,
  onRemoveMessage,
  onAnimationEnd,
}) {
  const { handleRemoveToast } = useToastMessage(message, onRemoveMessage);

  const animatedElementRef = useRef(null);

  useEffect(() => {
    function handleAnimationEnd() {
      onAnimationEnd(message.id);
    }
    const elementRef = animatedElementRef.current;

    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }
    return () => {
      elementRef.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isLeaving, onAnimationEnd, message.id]);

  return (
    <Container
      ref={animatedElementRef}
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
  onAnimationEnd: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
};
