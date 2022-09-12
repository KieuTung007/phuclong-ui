import classNames from 'classnames/bind';
import styles from './PopperCategory.module.scss';

const cx = classNames.bind(styles);

function PopperCategory() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('container')}>
                <li className={cx('list')}>
                    <p className={cx('list-name')}>Trà</p>
                    <div className={cx('list-wrapper')}>
                        <ul className={cx('list-item')}>
                            <p className={cx('list-item__name')}>Trà Hộp</p>
                            <li className={cx('item')}>Trà túi lọc</li>
                            <li className={cx('item')}>Trà túi tam giác</li>
                            <li className={cx('item')}>Trà hộp giấy</li>
                            <li className={cx('item')}>Trà lễ hội</li>
                        </ul>
                        <ul className={cx('list-item')}>
                            <p className={cx('list-item__name')}>Trà Gói</p>
                            <li className={cx('item')}>Trà Thái Nguyên</li>
                            <li className={cx('item')}>Trà gói cao cấp</li>
                            <li className={cx('item')}>Trà vạn lý hương</li>
                            <li className={cx('item')}>Trà đen</li>
                            <li className={cx('item')}>Trà sen</li>
                            <li className={cx('item')}>Trà xanh</li>
                            <li className={cx('item')}>Trà lài</li>
                        </ul>
                        <ul className={cx('list-item')}>
                            <p className={cx('list-item__name')}>Trà Lon</p>
                            <li className={cx('item')}>Trà lon giấy</li>
                            <li className={cx('item')}>Trà lon giấy cao cấp</li>
                            <li className={cx('item')}>Trà lon thiếc</li>
                            <li className={cx('item')}>
                                Trà Ô Long Thượng hạng
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={cx('list')}>
                    <p className={cx('list-name')}>Cà Phê</p>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>Cà Phê Set</li>
                        <li className={cx('item')}>Cà phê phin nhôm</li>
                        <li className={cx('item')}>Cà phê mùi</li>
                        <li className={cx('item')}>Cà phê hạt</li>
                    </ul>
                </li>
                <li className={cx('list')}>
                    <p className={cx('list-name')}>Bánh trung thu</p>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>Bánh Trung Thu Lẻ</li>
                        <li className={cx('item')}>Bánh Trung Thu Hộp</li>
                        <li className={cx('item')}>Bánh Hoàng Kim Lava</li>
                        <li className={cx('item')}>Trà lễ hội</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default PopperCategory;
