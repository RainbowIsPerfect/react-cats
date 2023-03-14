import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Modal title="Add new cat" />
    </>
  );
}
