import classNames from 'classnames/bind';
import styles from './TeaPage.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function TeaPage2() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'container-fluid')}>
                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà Thiết Quan Âm</h3>
                        <p className={cx('description')}>
                            Tương truyền rằng trong thời loạn lạc người dân Phúc
                            Kiến vẫn một lòng thờ phụng Quan Âm nên được Ơn Trên
                            ban cho giống trà thượng hạng toả hương thanh khiết
                            và từ đó cái tên Trà Thiết Quan Âm trở thành một nét
                            văn hoá trà đặc sắc của người phương đông.
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
                            src={images.tea2_row1}
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
                            src={images.tea2_row2}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà Ô Long</h3>
                        <p className={cx('description')}>
                            Trà Ô Long được biết đến như một trong những đại
                            danh trà với hương vị tinh tế. Đặc điểm chế biến trà
                            Ô Long rất độc đáo với cách thức bán lên men tự
                            nhiên. Sau khi thu hoạch theo nguyên lý một búp và
                            hai lá trà non sẽ được ủ lên men, khi thấy màu lá
                            chuyển sang ba phần đỏ, bảy phần đen thì là thời
                            điểm trà được sao ủ tốt nhất để có được mùi vị thơm
                            ngon nhất.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà xanh Thái Nguyên</h3>
                        <p className={cx('description')}>
                            Trà xanh là loại thức uống truyền thống của người
                            Châu Á từ ngàn xưa đến nay. Từ những đọt trà non
                            xanh tươi mơn mởn, trà xanh được chế biến không qua
                            công đoạn lên men nhằm đảm bảo trọn vẹn hương vị
                            thiên nhiên trong từng ngụm trà ấm áp. Dư vị trà
                            xanh chát nhẹ nhưng thanh khiết, mang lại phút giây
                            thư giãn tuyệt vời.
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
                            src={images.tea2_row3}
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
                            src={images.tea2_row4}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà Tiểu Long Châu</h3>
                        <p className={cx('description')}>
                            Từ những búp trà non xanh tươi nhất giữa tiết trời
                            xuân qua đôi bàn tay khéo léo của những nghệ nhân
                            trà, trà Tiểu Long Châu như chính tên gọi, được tạo
                            dáng thành những viên ngọc tròn nhỏ nhắn thuần khiết
                            toả hương lài thơm ngát.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà Vạn Lý Hương</h3>
                        <p className={cx('description')}>
                            Nhằm tối ưu hoá từng dòng sản phẩm, và để phục vụ
                            ngày càng tốt hơn đến từng đối tượng khách hàng,
                            Phúc Long cho ra đời dòng sản phẩm Vạn Lý Hương với
                            mục tiêu đáp ứng được yêu cầu thưởng thức trà của
                            phần lớn khách hàng trên mọi miền đất nước. Trà Vạn
                            Lý Hương có vị ngọt thanh và hương thơm tự nhiên.
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
                            src={images.tea2_row5}
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
                            src={images.tea2_row6}
                            alt="anh"
                        />
                    </div>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà túi loc</h3>
                        <p className={cx('description')}>
                            Trà túi lọc Phúc Long mang đến người tiêu dùng đa
                            dạng những vị trà phù hợp cho mọi lứa tuổi. Lưu giữ
                            nét văn hoá từ những hương vị trà truyền thống như:
                            Trà Xanh túi lọc, Trà Sen túi lọc, Trà Lài túi lọc,
                            Trà Ô Lông túi lọc; đến cập nhật xu hướng hiện đại
                            qua những hương vị trà trẻ trung như: Trà Vải túi
                            lọc, Trà Đào túi lọc, Trà Hoa Hồng túi lọc.
                        </p>
                        <Button outline className={cx('btn')}>
                            Xem chi tiết
                        </Button>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('desc-wrapper')}>
                        <h3 className={cx('heading')}>Trà túi tam giác</h3>
                        <p className={cx('description')}>
                            Trà túi lọc tam giác (hay còn gọi là Trà túi lọc kim
                            tự tháp) được xem là một bước tiến mới của dòng trà
                            túi lọc khi được sản xuất và đóng gói theo công nghệ
                            tiên tiến bậc nhất, tăng sự thẩm thấu của trà ra bên
                            ngoài và gia tăng hương vị đậm đà, mang lại trải
                            nghiệm trọn vẹn khi thưởng thức.
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
                            src={images.tea2_row7}
                            alt="anh"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeaPage2;
