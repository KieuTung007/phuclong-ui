import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';

const cx = classNames.bind(styles);

function HeaderNav({ currentIndex, setVale, nav }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <div className={cx('nav-bottom')}>
                    {nav.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    currentIndex === index
                                        ? cx('nav-item', 'active')
                                        : cx('nav-item')
                                }
                                onClick={setVale(index)}
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </header>
        </div>
    );
}

export default HeaderNav;
