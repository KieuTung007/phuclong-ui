import classNames from 'classnames/bind';
import styles from './Coffee.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import images from '~/assets/images';
import configs from '~/configs';
import CoffeePage1 from './CoffeePage/CoffeePage1';
import CoffeePage4 from './CoffeePage/CoffeePage4';
import CoffeePage3 from './CoffeePage/CoffeePage3';
import CoffeePage2 from './CoffeePage/CoffeePage2';

const cx = classNames.bind(styles);

const coffeeNav = [
    { name: 'cofee-nav', page: <CoffeePage1 /> },
    { name: 'cofee-nav', page: <CoffeePage2 /> },
    { name: 'cofee-nav', page: <CoffeePage3 /> },
    { name: 'cofee-nav', page: <CoffeePage4 /> },
];

function Coffee() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('background-image')}
                style={{ backgroundImage: `url('${images.image_coffee}')` }}
            ></div>
            <header className={cx('header')}>
                <div className={cx('nav-header')}>
                    <Link
                        to={configs.routes.home}
                        className={cx('nav-link__home')}
                    >
                        Trang chủ
                    </Link>
                    <span className={cx('icon')}>/</span>
                    <Link to={configs.routes.coffee} className={cx('nav-link')}>
                        Hạt Cà Phê Phúc Long
                    </Link>
                </div>
                <div className={cx('header-name')}>Hạt cà phê Phúc Long</div>
                <div>
                    <div
                        className={cx('nav-img')}
                        style={{
                            backgroundImage: `url('${images.image_logo}')`,
                        }}
                    ></div>
                </div>
                <div className={cx('nav-bottom')}>
                    <div
                        className={
                            currentIndex === 0
                                ? cx('nav-item', 'active')
                                : cx('nav-item')
                        }
                        onClick={() => setCurrentIndex(0)}
                    >
                        Đậm hạt cà phê rang xay
                    </div>
                    <div
                        className={
                            currentIndex === 1
                                ? cx('nav-item', 'active')
                                : cx('nav-item')
                        }
                        onClick={() => setCurrentIndex(1)}
                    >
                        Hương vị mạnh mẽ
                    </div>
                    <div
                        className={
                            currentIndex === 2
                                ? cx('nav-item', 'active')
                                : cx('nav-item')
                        }
                        onClick={() => setCurrentIndex(2)}
                    >
                        Hương vị tinh tế
                    </div>
                    <div
                        className={
                            currentIndex === 3
                                ? cx('nav-item', 'active')
                                : cx('nav-item')
                        }
                        onClick={() => setCurrentIndex(3)}
                    >
                        Cà phê mùi
                    </div>
                </div>
            </header>
            <div className={cx('container')}>
                {coffeeNav[currentIndex].page}
            </div>
        </div>
    );
}

export default Coffee;
