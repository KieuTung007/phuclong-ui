import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

import configs from '~/configs';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const logoData = [
    {
        image: images.logo,
    },
    {
        image: images.logo1,
    },
    {
        image: images.logo2,
    },
];

function HeaderTop() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const logoLength = logoData.length;
    let slideInterval;

    // currentSlide = 0 1 2
    // slideLength= 1 2 3

    const nextLogo = () => {
        setCurrentIndex(currentIndex === logoLength - 1 ? 0 : currentIndex + 1);
    };

    useEffect(() => {
        setCurrentIndex(0);
    }, []);

    useEffect(() => {
        autoSide();
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

    function autoSide() {
        slideInterval = setInterval(nextLogo, 10000);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <a href="tel:18006779">
                        <img src={images.deliveryImage} alt="" />
                    </a>
                </div>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={configs.routes.home}>
                        {logoData.map((data, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        index === currentIndex
                                            ? cx('logo-img')
                                            : cx('logo-hidden')
                                    }
                                >
                                    <img src={data.image} alt="" />
                                </div>
                            );
                        })}
                    </Link>
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('setting')}>
                        <Button className={cx('login')} text>
                            <span className={cx('login-title')}>Đăng nhập</span>
                        </Button>
                        <div className={cx('lang')}>
                            <a
                                className={cx('lang-vi', 'lang-active')}
                                href="to"
                            >
                                VI
                            </a>
                            |
                            <a className={cx('lang-en')} href="to">
                                EN
                            </a>
                        </div>
                    </div>
                    <button className={cx('cart')}>
                        <span className={cx('cart-title')}>Giỏ hàng</span>
                        <span className={cx('cart-description')}>
                            <span className={cx('cart-buy')}>7</span>
                            <FontAwesomeIcon
                                className={cx('cart-icon')}
                                icon={faCartShopping}
                            />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;
