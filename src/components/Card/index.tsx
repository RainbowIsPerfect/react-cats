import { useDispatch } from 'react-redux';
import { Button } from '../UI/Button';
import { Cat, deleteCat } from '../../store/slices/cardsSlice';
import { AppDispatch } from '../../store/store';
import { useModal } from '../../hooks/useModal';
import styles from './Card.module.scss';

interface CardProps {
  catObject: Cat;
}

export const Card = ({ catObject: { name, image, id } }: CardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [, modalHandler] = useModal();

  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img className={styles.card__image} src={image} alt="cat" />
      </div>
      <div className={styles.card__options}>
        <p className={styles.card__name}>{name}</p>
        <div className={styles['card__button-container']}>
          <Button
            classes={styles.card__button}
            variant="text"
            onClick={modalHandler}
          >
            Read more
          </Button>
          <Button
            onClick={() => dispatch(deleteCat(id))}
            classes={styles.card__button}
            variant="text"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
