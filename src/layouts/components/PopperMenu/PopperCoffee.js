import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperCoffee() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('item')}>Hành trình tách cà phê đậm vị</li>
                <li className={cx('item')}>Hạt cà phê Phúc Long</li>
                <li className={cx('item')}>Nghệ thuật pha chế</li>
            </ul>
        </div>
    );
}

export default PopperCoffee;
