import { useEffect } from 'react';
import useAnimatedList from '../../../hooks/useAnimatedList';
import { toastEventManager } from '../../../utils/toast';

export default function useToastContainer() {
  const {
    items: messages,
    setItems: setMessages,
    pendingRemovalItemsIds,
    handleRemoveItem,
    handleAnimationEnd,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), type, text, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setMessages]);

  return {
    pendingRemovalItemsIds,
    messages,
    handleRemoveItem,
    handleAnimationEnd,
  };
}
