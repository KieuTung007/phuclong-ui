import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperDrink() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('item')}>Thức uống</li>
                <li className={cx('item')}>Tráng miệng</li>
                <li className={cx('item')}>Đồ ăn vặt</li>
            </ul>
        </div>
    );
}

export default PopperDrink;
