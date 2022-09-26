import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import {
    faChevronCircleLeft,
    faChevronCircleRight,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const slideData = [
    {
        image: images.slide1,
        tittle: 'slide1',
    },
    {
        image: images.slide2,
        tittle: 'slide2',
    },
];

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideLength = slideData.length;
    let slideInterval;

    // currentSlide = 0 1
    // slideLength= 1 2

    const nextSlide = () => {
        setCurrentSlide(
            currentSlide === slideLength - 1 ? 0 : currentSlide + 1,
        );
    };

    const prevSlide = () => {
        setCurrentSlide(
            currentSlide === 0 ? slideLength - 1 : currentSlide - 1,
        );
    };

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        autoSide();
        return () => clearInterval(slideInterval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);

    function autoSide() {
        slideInterval = setInterval(nextSlide, 10000);
    }

    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={cx('icon-left')}
                onClick={prevSlide}
            />
            <FontAwesomeIcon
                icon={faChevronRight}
                className={cx('icon-right')}
                onClick={nextSlide}
            />

            {slideData.map((slide, index) => {
                return (
                    <div key={index}>
                        <div
                            className={
                                index === currentSlide
                                    ? cx('current', 'slide')
                                    : cx('slide')
                            }
                        >
                            {index === currentSlide && (
                                <div
                                    className={cx('slide-img')}
                                    style={{
                                        backgroundImage: `url(${slide.image})`,
                                    }}
                                ></div>
                            )}
                        </div>
                    </div>
                );
            })}

            <div className={cx('slide-bottom')}>
                {slideData.map((sli, index) => {
                    return (
                        <FontAwesomeIcon
                            icon={faCircle}
                            key={index}
                            className={
                                index === currentSlide
                                    ? cx('bottom-icon', 'active')
                                    : cx('bottom-icon')
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
