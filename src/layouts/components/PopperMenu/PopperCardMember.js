import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperCardMember() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('content')}>Hành trình tách trà đậm vị</li>
                <li className={cx('content')}>Lá trà Phúc Long</li>
                <li className={cx('content')}>
                    Cold Brew Tea - Trà Ủ Lạnh - Phong Cách Trà Mới
                </li>
                <li className={cx('content')}>Nghệ thuật pha chế</li>
            </ul>
        </div>
    );
}

export default PopperCardMember;
