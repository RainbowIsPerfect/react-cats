import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types';
import styles from './FormOptions.module.scss';

interface OptionProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  register: UseFormRegisterReturn;
  tag?: 'textarea' | 'input';
  type?: 'text' | 'checkbox' | 'number';
}

export const FormOption = ({
  title,
  register,
  tag = 'input',
  type = 'text',
}: OptionProps) => {
  return (
    <div
      className={type === 'checkbox' ? styles.option_checkbox : styles.option}
    >
      <label
        className={type === 'checkbox' ? styles.label_checkbox : styles.label}
        htmlFor={title}
      >
        {title}
      </label>
      {tag === 'input' ? (
        <input
          className={type === 'checkbox' ? styles.input_checkbox : styles.input}
          type={type}
          id={title}
          {...register}
        />
      ) : (
        <textarea
          className={`${styles.textarea} ${styles.input}`}
          rows={5}
          id="description"
        />
      )}
    </div>
  );
};
