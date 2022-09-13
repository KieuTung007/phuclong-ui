import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperTea() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('item')}>Hành trình tách trà đậm vị</li>
                <li className={cx('item')}>Lá trà Phúc Long</li>
                <li className={cx('item')}>
                    Cold Brew Tea - Trà Ủ Lạnh - Phong Cách Trà Mới
                </li>
                <li className={cx('item')}>Nghệ thuật pha chế</li>
            </ul>
        </div>
    );
}

export default PopperTea;
