import classNames from 'classnames/bind';
import styles from './HeaderTop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <a href="tel:18006779">
                        <img src={images.deliveryImage} alt="" />
                    </a>
                </div>
                <div className={cx('logo')}>
                    <a className={cx('logo-link')} href="to">
                        <img
                            className={cx('logo-img')}
                            src={images.logo}
                            alt=""
                        />
                        {/* <img
                            className={cx('logo-img')}
                            src={images.logo1}
                            alt=""
                        />
                        <img
                            className={cx('logo-img')}
                            src={images.logo2}
                            alt=""
                        /> */}
                    </a>
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
