import classNames from 'classnames/bind';
import styles from './Drink.module.scss';
import { useRef, useState } from 'react';

import configs from '~/configs';
import images from '~/assets/images';
import HeaderPage from '../components/HeaderPage';
import DrinkPage1 from './DrinkPage/DrinkPage1';
import SnackPage from './DrinkPage/SnackPage';
import BakeryPage from './DrinkPage/BakeryPage';
import DrinkSearch from './DrinkSearch';

const cx = classNames.bind(styles);

const drinkPage = {
    slide: images.slide1,
    to: configs.routes.drinks,
};

const drinkNav = [
    { title: 'Thức uống', page: <DrinkPage1 /> },
    { title: 'Snacks', page: <SnackPage /> },
    { title: 'Bakery', page: <BakeryPage /> },
];

function Drink() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // const navTitle = useRef(0);

    let navTitle = drinkNav[currentIndex].title;

    return (
        <div className={cx('wrapper')}>
            <HeaderPage
                background_image={drinkPage.slide}
                to={drinkPage.to}
                title={navTitle}
                logo
            />
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <div className={cx('nav-bottom')}>
                        {drinkNav.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        currentIndex === index
                                            ? cx('nav-item', 'active')
                                            : cx('nav-item')
                                    }
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                </header>
                <DrinkSearch hided={currentIndex} />
                <div className={cx('content')}>
                    {drinkNav[currentIndex].page}
                </div>
            </div>
        </div>
    );
}

export default Drink;
