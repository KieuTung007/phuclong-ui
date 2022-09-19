import classNames from 'classnames/bind';
import styles from './DrinkPage.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function SnackPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'container-fluid')}>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>CÀ PHÊ ROYAL</h3>
                        <p className={cx('description')}>
                            Cà phê Royal là sự kết hợp hoàn hảo giữa ba loại
                            hạt: Moka, Robusta và Culi theo tỉ lệ nhất định tạo
                            nên sản phẩm hội tụ của sắc, hương và vị.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                    <div
                        className={cx('img-wrapper')}
                        style={{
                            backgroundImage: `url('${images.background_image}')`,
                        }}
                    >
                        <img
                            className={cx('img')}
                            src={images.coffee2_row1}
                            alt="anh"
                        />
                    </div>
                </div>
                <div className={cx('content')}>
                    <div
                        className={cx('img-wrapper')}
                        style={{
                            backgroundImage: `url('${images.background_image}')`,
                        }}
                    >
                        <img
                            className={cx('img')}
                            src={images.coffee2_row2}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>CÀ PHÊ ROBUSTA</h3>
                        <p className={cx('description')}>
                            Cà phê Robusta còn gọi là cà phê Vối, đây là giống
                            cà phê được trồng phổ biến tại Việt Nam, đặc biệt là
                            khu vực Tây Nguyên. Việt Nam hiện là nước sản xuất
                            và xuất khẩu cà phê Robusta đứng đầu thế giới. Hạt
                            cà phê Robusta tròn, sậm màu, hàm lượng caffein
                            khoảng 2 – 2.5%.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>CÀ PHÊ CULI</h3>
                        <p className={cx('description')}>
                            Cà phê Culi còn được gọi là Peaberry, có vị đắng
                            gắt, hương thơm say đắm. Cà phê Culi là những trái
                            cà phê đột biến có duy nhất một hạt từ các chủng
                            loại thông thường như Arabica hay Robusta, chỉ chiếm
                            khoảng 5% tổng số lượng cà phê trong một đợt thu
                            hoạch, luôn được chọn lọc và rang riêng để đảm bảo
                            chất lượng hoàn hảo.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                    <div
                        className={cx('img-wrapper')}
                        style={{
                            backgroundImage: `url('${images.background_image}')`,
                        }}
                    >
                        <img
                            className={cx('img')}
                            src={images.coffee2_row3}
                            alt="anh"
                        />
                    </div>
                </div>

                <div className={cx('content')}>
                    <div
                        className={cx('img-wrapper')}
                        style={{
                            backgroundImage: `url('${images.background_image}')`,
                        }}
                    >
                        <img
                            className={cx('img')}
                            src={images.coffee2_row4}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>CÀ PHÊ KING</h3>
                        <p className={cx('description')}>
                            Cà phê King là sự kết hợp hài hoà giữa ba loại hạt:
                            vị đắng đầm của hạt Moka, vị đắng đậm của hạt
                            Robusta, cùng với vị đắng gắt của hạt Culi, tạo nên
                            hương vị mạnh mẽ.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SnackPage;
