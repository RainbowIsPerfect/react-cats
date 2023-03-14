import { createPortal } from 'react-dom';
import { useModal } from '../../hooks/useModal';
import { Form } from '../Form';
import styles from './Modal.module.scss';

export const modalRoot = document.querySelector('#modal') as HTMLDivElement;

interface ModalProps {
  title: string;
}

export const Modal = ({ title }: ModalProps) => {
  const [isOpen, modalHandler] = useModal();

  return isOpen
    ? createPortal(
        <div className={styles.modal} onMouseDown={modalHandler}>
          <div className={styles.modal__container}>
            <div
              className={styles.modal__content}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Form title={title} />
            </div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};
