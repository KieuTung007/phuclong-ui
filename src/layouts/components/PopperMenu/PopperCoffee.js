import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperCoffee() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('content')}>Hành trình tách cà phê đậm vị</li>
                <li className={cx('content')}>Hạt cà phê Phúc Long</li>
                <li className={cx('content')}>Nghệ thuật pha chế</li>
            </ul>
        </div>
    );
}

export default PopperCoffee;
