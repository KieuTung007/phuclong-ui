import classNames from 'classnames/bind';
import styles from './HeaderPage.module.scss';
import { Link } from 'react-router-dom';

import configs from '~/configs';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderPage({ background_image, to, title, logo }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div
                    className={cx('background-image')}
                    style={{ backgroundImage: `url('${background_image}')` }}
                ></div>

                <div className={cx('header')}>
                    <div className={cx('nav-header')}>
                        <Link
                            to={configs.routes.home}
                            className={cx('nav-link__home')}
                        >
                            Trang chủ
                        </Link>
                        <span className={cx('icon')}>/</span>
                        <Link to={to} className={cx('nav-link')}>
                            {title}
                        </Link>
                    </div>
                    <div className={cx('header-name')}>{title}</div>
                    {logo && (
                        <div>
                            <div
                                className={cx('nav-img')}
                                style={{
                                    backgroundImage: `url('${images.image_logo}')`,
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default HeaderPage;
