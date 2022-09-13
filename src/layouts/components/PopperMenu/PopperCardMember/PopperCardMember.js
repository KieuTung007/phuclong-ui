import classNames from 'classnames/bind';
import styles from './PopperCardMember.module.scss';

const cx = classNames.bind(styles);

function PopperCardMember() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('wrapper-list')}>
                    <li className={cx('item')}>
                        Thông tin chương trình Thẻ Thành Viên
                    </li>
                </ul>
                <ul className={cx('wrapper-list')}>
                    <li className={cx('item')}>Điều khoản & Điều kiện</li>
                    <li className={cx('item')}>
                        Điều khoản & Điều kiện Thẻ Cashless
                    </li>
                    <li className={cx('item')}>
                        Những câu hỏi thường gặp (F.A.Q)
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PopperCardMember;
