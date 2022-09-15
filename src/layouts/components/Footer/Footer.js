import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('content-text')}>
                        <a href="to">Trụ sở chính: </a>
                        Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719
                        do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
                        <br />
                        <a href="to">Nhà máy: </a>
                        D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường
                        Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
                        <br />
                        <a href="to">Địa chỉ: </a>
                        42/24 - 42/26 Đường 643 Tạ Quang Bửu, phường 4, quận 8,
                        Hồ Chí Minh
                        <br />
                        <a href="to">Điện thoại: </a>
                        028 6263 0377 - 6263 0378
                        <br />
                        <a href="to">Fax : </a>
                        (028) 6263 0379
                        <br />
                        <a href="to">Email: </a>
                        sales@phuclong.masangroup.com
                        <br />
                        info2@phuclong.masangroup.com
                    </p>
                </div>
                <div className={cx('form')}>
                    <h3 className={cx('heading')}>
                        Đăng ký nhận tin khuyến mãi
                    </h3>
                    <div className={cx('input')}>
                        <input
                            type="email"
                            className={cx('input-email')}
                            placeholder="Nhập địa chỉ email"
                        />
                        <Button outline small>
                            Gửi
                        </Button>
                    </div>
                    <ul className={cx('list-item')}>
                        <li className={cx('item')}>Chính sách đặt hàng</li>
                        <li className={cx('item')}>
                            Chính sách bảo mật thông tin
                        </li>
                    </ul>
                </div>
                <ul className={cx('info')}>
                    <li className={cx('lang')}>
                        <a className={cx('lang-vi', 'lang-active')} href="to">
                            VI
                        </a>
                        |
                        <a className={cx('lang-en')} href="to">
                            EN
                        </a>
                    </li>
                    <li className={cx('image')}>
                        <img src={images.image_footer} alt="Images" />
                    </li>
                    <li className={cx('info-item')}>
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className={cx('icon')}
                        />
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className={cx('icon')}
                        />
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={cx('icon')}
                        />
                        <FontAwesomeIcon
                            icon={faYoutube}
                            className={cx('icon')}
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
