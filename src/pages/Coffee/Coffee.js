import classNames from 'classnames/bind';
import styles from './Coffee.module.scss';
import { useState } from 'react';

import configs from '~/configs';
import images from '~/assets/images';
import HeaderPage from '../components/HeaderPage';
import CoffeePage1 from './CoffeePage/CoffeePage1';
import CoffeePage4 from './CoffeePage/CoffeePage4';
import CoffeePage3 from './CoffeePage/CoffeePage3';
import CoffeePage2 from './CoffeePage/CoffeePage2';

const cx = classNames.bind(styles);

const coffeePage = {
    slide: images.image_coffee,
    to: configs.routes.coffee,
    name: 'Hạt cà phê Phúc Long',
};

const coffeeNav = [
    { title: 'Đạm vị hạt cà phê rang xay', page: <CoffeePage1 /> },
    { title: 'Hương vị mạnh mẽ', page: <CoffeePage2 /> },
    { title: 'Hương vị tinh tế', page: <CoffeePage3 /> },
    { title: 'Cà phê mùi', page: <CoffeePage4 /> },
];

function Coffee() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <HeaderPage
                background_image={coffeePage.slide}
                to={coffeePage.to}
                title={coffeePage.name}
                logo
            />
            <div className={cx('container')}>
                <header className={cx('header')}>
                    <div className={cx('nav-bottom')}>
                        {coffeeNav.map((item, index) => {
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
                <div className={cx('content')}>
                    {coffeeNav[currentIndex].page}
                </div>
            </div>
        </div>
    );
}

export default Coffee;
