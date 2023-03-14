import { useSelector, useDispatch } from 'react-redux/es/exports';
import { RootState, AppDispatch } from '../store/store';
import { handleModal } from '../store/slices/modalSlice';

export const useModal = (): [boolean, () => void] => {
  const { isOpen } = useSelector((state: RootState) => state.modalSlice);
  const dispatch = useDispatch<AppDispatch>();
  const modalHandler = () => {
    if (isOpen) {
      dispatch(handleModal());
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    } else {
      dispatch(handleModal());
      const scrollWidth = window.innerWidth - document.body.offsetWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollWidth}px`;
    }
  };

  return [isOpen, modalHandler];
};
