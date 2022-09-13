import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const slideData = [
    {
        image: images.slide1,
        tittle: 'slide1',
    },
    {
        image: images.slide1,
        tittle: 'slide1',
    },
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideStyles = {
        backgroundImage: `url(${slideData[currentSlide].image})`,
    };

    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon
                icon={faChevronCircleLeft}
                className={cx('icon-left')}
            />
            <FontAwesomeIcon
                icon={faChevronCircleRight}
                className={cx('icon-right')}
            />

            {slideData.map((slide, index) => {
                return (
                    <div
                        className={
                            index === currentSlide
                                ? cx('current', 'slide')
                                : cx('slide')
                        }
                        key={index}
                    >
                        <div
                            className={cx('slide-img')}
                            style={slideStyles}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}

export default Slider;
