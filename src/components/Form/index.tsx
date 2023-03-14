import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Button } from '../UI/Button';
import { Cat, addCat } from '../../store/slices/cardsSlice';
import { AppDispatch } from '../../store/store';
import { useModal } from '../../hooks/useModal';
import { FormOption } from '../UI/FormOption';
import styles from './Form.module.scss';

interface FormProps {
  title: string;
}

type CatData = Omit<Cat, 'id'>;

export const Form = ({ title }: FormProps) => {
  const { register, handleSubmit } = useForm<CatData>();
  const [, modalHandler] = useModal();
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = handleSubmit((data) => {
    dispatch(addCat({ id: Date.now(), ...data }));
    modalHandler();
  });
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <fieldset className={styles.form__fieldset}>
        <legend className={styles.form__legend}>{title}</legend>
        <FormOption
          title="Name"
          register={{ ...register('name', { required: true }) }}
        />
        <FormOption
          title="Image"
          register={{ ...register('image', { required: true }) }}
        />
        <FormOption
          title="Age"
          type="number"
          register={{ ...register('age', { required: true, min: 0 }) }}
        />
        <FormOption
          title="Rate"
          type="number"
          register={{
            ...register('rate', { required: true, min: 1, max: 10 }),
          }}
        />
        <FormOption
          title="Favorite"
          type="checkbox"
          register={{ ...register('favorite') }}
        />
        <FormOption
          title="Description"
          tag="textarea"
          register={{ ...register('description') }}
        />
        <Button variant="contained" type="submit">
          Add
        </Button>
      </fieldset>
    </form>
  );
};
