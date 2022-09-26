import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronUp,
    faComment,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

import Header from '~/layouts/components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
            <div className={cx('call-btn')}>
                <a href="tel:18006779" id="call-now">
                    <div className={cx('call-border')}></div>
                    <div className={cx('call-background')}></div>
                    <div className={cx('call-img')}>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </a>
                <p className={cx('call-text')}>Hotline: 1800 6779</p>
            </div>
            <div className={cx('icon-message')}>
                <FontAwesomeIcon
                    icon={faComment}
                    className={cx('icon-comment')}
                />
            </div>
            <div className={cx('to-top')}>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={cx('icon-to-top')}
                />
            </div>
        </div>
    );
}

export default DefaultLayout;
