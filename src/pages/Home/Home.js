import classNames from 'classnames/bind';
import Slider from '~/pages/Home/Slider';
import styles from './Home.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide')}>
                <Slider />
            </div>
            <div
                className={cx('container', 'background-image')}
                style={{
                    backgroundImage: `url(${images.home_background})`,
                }}
            >
                <div>
                    <div className={cx('content', 'content-1')}>
                        <div className={cx('image-1')}>
                            <img src={images.image_home1} alt="anh" />
                        </div>

                        <div className={cx('context')}>
                            <h2 className={cx('heading')}>
                                Từ Những mầm trà, chúng tôi tạo ra niềm đam mê
                            </h2>
                            <p className={cx('text')}>
                                Trải qua hơn 50 năm chắt chiu tinh hoa từ những
                                búp trà xanh và hạt cà phê thượng hạng cùng mong
                                muốn mang lại cho khách hàng những trải nghiệm
                                giá trị nhất khi thưởng thức, Phúc Long liên tục
                                là thương hiệu tiên phong với nhiều ý tưởng sáng
                                tạo đi đầu trong ngành trà và cà phê.
                                <span className={cx('text-break')}></span>
                                Chúng tôi tin rằng từng sản phẩm trà và cà phê
                                sẽ càng thêm hảo hạng khi được tạo ra từ sự phấn
                                đấu không ngừng cùng niềm đam mê. Và chính kết
                                nối dựa trên niềm tin, sự trung thực và tin yêu
                                sẽ góp phần mang đến những nét đẹp trong văn hóa
                                thưởng trà và cà phê ngày càng bay cao, vươn xa.
                            </p>
                            <Button outline className={cx('btn')}>
                                Xem Thêm
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={cx('content', 'content-2')}>
                        <div className={cx('context')}>
                            <h2 className={cx('heading')}>
                                Đội ngũ nhân viên đầy nhiệt huyết
                            </h2>
                            <p className={cx('text')}>
                                Trong suốt quá trình hoạt động và phát triển,
                                đội ngũ quản lý và nhân viên của Phúc Long
                                Coffee & Tea, qua bao thế hệ, đã cùng nhau xây
                                dựng, nuôi dưỡng niềm đam mê dành cho trà và cà
                                phê với mong muốn được thử thách bản thân trong
                                ngành dịch vụ năng động và sáng tạo.
                            </p>
                            <Button outline className={cx('btn')}>
                                Gia nhập đội ngũ Phúc Long
                            </Button>
                        </div>
                        <div className={cx('image-2')}>
                            <img src={images.image_home2} alt="anh" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
