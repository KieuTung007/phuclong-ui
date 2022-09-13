import classNames from 'classnames/bind';
import styles from './PopperIntroduce.module.scss';

const cx = classNames.bind(styles);

function PopperIntroduce() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <ul className={cx('list-item')}>
                    <h3 className={cx('heading')}>Công Ty</h3>
                    <li className={cx('item')}>Tầm nhìn</li>
                    <li className={cx('item')}>Sứ mệnh</li>
                    <li className={cx('item')}>Giá trị cốt lõi</li>
                    <li className={cx('item')}>Lĩnh vực hoạt động</li>
                </ul>
                <ul className={cx('list-item')}>
                    <h3 className={cx('heading')}>Tuyển Dụng</h3>
                    <li className={cx('item')}>HTCH</li>
                    <li className={cx('item')}>Kiosk</li>
                    <li className={cx('item')}>Văn phòng</li>
                    <li className={cx('item')}>Nhà máy</li>
                </ul>
                <ul className={cx('list-item')}>
                    <h3 className={cx('heading')}>Thư Viện</h3>
                    <li className={cx('item')}>Hình ảnh</li>
                    <li className={cx('item')}>Video</li>
                    <li className={cx('item')}>Hồ Sơ Công Bố</li>
                    <li className={cx('item')}>Công văn</li>
                </ul>
                <ul className={cx('list-item')}>
                    <h3 className={cx('heading')}>Liên Hệ</h3>
                    <li className={cx('item')}>
                        Hệ thống cửa hàng Phúc Long COFFEE & TEA
                    </li>
                    <li className={cx('item')}>
                        Hệ thống cửa hàng Phúc Long Kiosk
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PopperIntroduce;
