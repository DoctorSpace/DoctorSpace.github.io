import React from 'react';
import FirstPage from '../FirstPage/FirstPage';
import Header from '../Header/Header';
import StorePage from '../StorePage/StorePage';
import HorizontalRule from '../UI/HorizontalRule/HorizontalRule';
import Footer from '../Footer/Footer';
import AddedPiost from '../AddedPiost/AddedPiost';


const MainPage = () => {

    return (
        <div>
            <Header />
            <HorizontalRule />
            <FirstPage />
            <AddedPiost />
            <StorePage />
            <HorizontalRule />
            <Footer />
        </div>
    );
};

export default MainPage;