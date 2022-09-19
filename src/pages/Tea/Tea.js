import classNames from 'classnames/bind';
import styles from './Tea.module.scss';
import { useState } from 'react';

import configs from '~/configs';
import images from '~/assets/images';
import HeaderPage from '../components/HeaderPage';
import TeaPage1 from './TeaPage/TeaPage1';
import TeaPage2 from './TeaPage/TeaPage2';

const cx = classNames.bind(styles);

const teaPage = {
    slide: images.image_tea,
    to: configs.routes.tea,
    name: 'Lá Trà Phúc Long',
};

const teaNav = [
    { title: 'Đậm vị trà truyền thống', page: <TeaPage1 /> },
    { title: 'Lựa chọn loại trà', page: <TeaPage2 /> },
];

function Tea() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <HeaderPage
                background_image={teaPage.slide}
                to={teaPage.to}
                title={teaPage.name}
                logo
            />

            <div className={cx('container')}>
                <header className={cx('header')}>
                    <div className={cx('nav-bottom')}>
                        {teaNav.map((item, index) => {
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
                <div className={cx('content')}>{teaNav[currentIndex].page}</div>
            </div>
        </div>
    );
}

export default Tea;
