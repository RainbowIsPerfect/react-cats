import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { AppDispatch, RootState } from '../../store/store';
import { fetchCats } from '../../store/slices/cardsSlice';
import { Card } from '../Card';
import styles from './Main.module.scss';

export const Main = () => {
  const { cards } = useSelector((state: RootState) => state.cardSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles['card-container']}>
          {cards.map((el) => {
            return <Card key={el.id} catObject={el} />;
          })}
        </div>
      </div>
    </main>
  );
};
