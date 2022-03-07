import { useSelector, useDispatch } from 'react-redux';
import { setShowModal } from '../store/modal';

const useModal = () => {
  const showModal = useSelector(state => state.modal.visible);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(setShowModal(!showModal));
  };

  console.log(showModal);

  return [showModal, toggleModal];
};

export default useModal;
