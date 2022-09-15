import classNames from 'classnames/bind';
import styles from './CoffeePage.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CoffeePage3() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'container-fluid')}>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Arabica-culi</h3>
                        <p className={cx('description')}>
                            Hương cà phê Arabica rất thơm, có vị chua, sau khi
                            uống đọng lại cảm giác ngọt ở cổ họng. Arabica Cầu
                            Đất có vị chua thanh xen lẫn với vị đắng nhẹ, nước
                            pha màu nước nâu nhạt, trong trẻo của hổ phách. Mùi
                            hương của Arabica rất thanh tao, quý phái, ...
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
                            src={images.coffee3_row1}
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
                            src={images.coffee3_row2}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Cherry</h3>
                        <p className={cx('description')}>
                            Cà phê Cherry còn được gọi là cà phê Mít. Hạt cà phê
                            Cherry có màu vàng, sáng bóng rất đẹp. Hương vị tuy
                            không đậm đà như Robusta, cũng không nồng nàn như
                            Arabica, nhưng cà phê Cherry mang đặc trưng riêng:
                            chua nhẹ, hơi chát, hàm lượng caffein thấp, cùng
                            hương thơm thoang thoảng.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Moka</h3>
                        <p className={cx('description')}>
                            Cà phê Moka là giống cà phê rất khó trồng, thuộc chi
                            Arabica, được trồng phổ biến tại Đà Lạt, Lâm Đồng,
                            đặc biệt là Moka Cầu Đất. Ở Việt Nam, cà phê Moka
                            được xếp vào sản phẩm thực sự quý hiếm bởi chất
                            lượng và hương vị tuyệt vời: thơm sang trọng, chua
                            thanh thoát.
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
                            src={images.coffee3_row3}
                            alt="anh"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoffeePage3;
