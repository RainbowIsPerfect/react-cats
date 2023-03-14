import { useModal } from '../../hooks/useModal';
import { Button } from '../UI/Button';
import styles from './Header.module.scss';

export const Header = () => {
  const [, modalHandler] = useModal();
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          <a
            className={styles.header__logo}
            href="https://github.com/RainbowIsPerfect"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className={styles['header__logo-icon']}
              width="35px"
              height="35px"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="st0"
                d="m205.12 153.08c31.534 11.546 69.397-12.726 84.58-54.209 15.174-41.484 1.915-84.462-29.614-96.001-31.541-11.53-69.4 12.735-84.582 54.218-15.175 41.484-1.916 84.462 29.616 95.992z"
              />
              <path
                className="st0"
                d="m85.296 219.24c32.987-2.86 56.678-40.344 52.929-83.75-3.757-43.391-33.545-76.253-66.532-73.409-32.984 2.869-56.674 40.36-52.921 83.759 3.758 43.391 33.541 76.252 66.524 73.4z"
              />
              <path
                className="st0"
                d="m342.2 217.77c28.952 17.017 70.552-0.073 92.926-38.154 22.374-38.106 17.041-82.758-11.915-99.774-28.951-17.001-70.56 0.097-92.93 38.178-22.372 38.099-17.032 82.75 11.919 99.75z"
              />
              <path
                className="st0"
                d="m497.26 262.91c-18.771-27.271-63.07-29.379-98.954-4.694-35.892 24.701-49.762 66.822-30.996 94.101 18.766 27.27 63.069 29.38 98.954 4.686 35.88-24.693 49.758-66.814 30.996-94.093z"
              />
              <path
                className="st0"
                d="m304.51 268.06c-3.58-24.773-18.766-47.366-43.039-58.824-24.268-11.45-51.365-8.807-72.758 4.169-23.646 14.35-38.772 33.096-59.138 41.29-20.363 8.193-77.4-16.209-112.91 48.278-25.081 45.548-2.057 103.13 44.962 125.32 35.738 16.864 64.023 14.981 84.788 24.774 20.762 9.793 37.29 32.83 73.025 49.692 47.018 22.188 106.1 3.362 125.32-44.957 27.206-68.407-27.897-96.922-34.522-117.85-6.619-20.925-1.762-44.52-5.721-71.887z"
              />
            </svg>
          </a>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <Button
                onClick={() => modalHandler()}
                className={styles['header__item-button']}
              >
                Add cat
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
