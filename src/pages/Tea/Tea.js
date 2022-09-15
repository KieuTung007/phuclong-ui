import classNames from 'classnames/bind';
import styles from './Tea.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import images from '~/assets/images';
import configs from '~/configs';
import TeaPage1 from './TeaPage/TeaPage1';
import TeaPage2 from './TeaPage/TeaPage2';

const cx = classNames.bind(styles);

const coffeeNav = [
    { name: 'cofee-nav', page: <TeaPage1 /> },
    { name: 'cofee-nav', page: <TeaPage2 /> },
];

function Tea() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div
                className={cx('background-image')}
                style={{ backgroundImage: `url('${images.image_tea}')` }}
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
                    <Link to={configs.routes.tea} className={cx('nav-link')}>
                        Lá trà Phúc Long
                    </Link>
                </div>
                <div className={cx('header-name')}>Lá Trà Phúc Long</div>
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
                        Đậm vị trà truyền thống
                    </div>
                    <div
                        className={
                            currentIndex === 1
                                ? cx('nav-item', 'active')
                                : cx('nav-item')
                        }
                        onClick={() => setCurrentIndex(1)}
                    >
                        Lựa chọn loại trà
                    </div>
                </div>
            </header>
            <div className={cx('container')}>
                {coffeeNav[currentIndex].page}
            </div>
        </div>
    );
}

export default Tea;
