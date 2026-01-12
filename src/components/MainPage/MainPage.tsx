import FirstPage from '../FirstPage/FirstPage';
import Header from '../Header/Header';
import StorePage from '../StorePage/StorePage';
import HorizontalRule from '../UI/HorizontalRule/HorizontalRule';
import Footer from '../Footer/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <HorizontalRule />
      <FirstPage />
      <StorePage />
      <HorizontalRule />
      <Footer />
    </div>
  );
};

export default MainPage;
