import classNames from 'classnames/bind';
import styles from './CoffeePage.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CoffeePage4() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'container-fluid')}>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Chocolate</h3>
                        <p className={cx('description')}>
                            Cà phê Chocolate là sự kết hợp giữa hai dòng Moka và
                            Robusta cùng hương Chocolate tạo nên sản phẩm thơm
                            ngon, vị dịu ngọt mang đến cảm giác khoan khoái cho
                            người thưởng thức.
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
                        <h3 className={cx('heading')}>Cà phê Vanilla</h3>
                        <p className={cx('description')}>
                            Cà phê Vanilla là sự kết hợp giữa cà phê Robusta và
                            hương vani Pháp, mang lại cho người thưởng thức vị
                            dịu nhẹ.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Hazelnut</h3>
                        <p className={cx('description')}>
                            Cà phê Hazelnut là sự kết hợp hài hoà giữa cà phê
                            Robusta và hương hạt Hazelnut - một lựa chọn hoàn
                            hảo để khởi đầu một ngày mới.
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
                        <h3 className={cx('heading')}>Cà phê Cappuccino</h3>
                        <p className={cx('description')}>
                            Cà phê Cappuccino là sự kết hợp giữa hai dòng Moka
                            và Robusta cùng hương Cappuccino tạo nên sản phẩm có
                            hương thơm và vị béo đặc trưng. hương vị mạnh mẽ.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Caramel</h3>
                        <p className={cx('description')}>
                            Cà phê Caramel là sự kết hợp giữa Robusta cùng hương
                            Caramel hoà quyện tạo nên vị thơm - ngọt – béo, mang
                            lại cảm giác dễ chịu khi thưởng thức.
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
                        <h3 className={cx('heading')}>Cà phê Smooth</h3>
                        <p className={cx('description')}>
                            Cà phê Smooth là sự kết hợp giữa hai dòng Moka và
                            Culi cùng hương Hazelnut mang lại dư vị mới mẻ đánh
                            thức mọi giác quan.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Cà phê Rich</h3>
                        <p className={cx('description')}>
                            Cà phê Rich là sự kết hợp giữa Chocolate và Espresso
                            tạo nên hương vị thơm đậm ấn tượng khi thưởng thức.
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
            </div>
        </div>
    );
}

export default CoffeePage4;
