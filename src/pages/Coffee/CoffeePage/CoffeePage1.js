import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './CoffeePage.module.scss';

const cx = classNames.bind(styles);

function CoffeePage1() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('description')}>
                        Cà phê càng được rang sẫm màu hương vị càng trọn vẹn.
                        Rang cà phê là một quá trình đòi hỏi sự tinh tế từ đôi
                        bàn tay và sự am hiểu từng loại hạt cà phê của người
                        nghệ nhân. Rang lửa nhỏ khiến cà phê chưa chín tới và
                        đắng hơn, trong khi rang quá kỹ lại khiến cà phê cháy
                        khét đánh mất những đặc tính thượng hạng vốn có. Trong
                        quá trình rang đủ thời gian, những dinh dưỡng như
                        proteins, enzymes mới sẽ tích tụ phía trong tạo nên phần
                        chất của cà phê, làm cho cà phê đậm hơn, sánh hơn.
                    </p>
                    <img
                        className={cx('img')}
                        src={images.coffee_row1}
                        alt="anh"
                    />
                </div>
                <div className={cx('content')}>
                    <img
                        className={cx('img')}
                        src={images.coffee_row2}
                        alt="anh"
                    />
                    <p className={cx('description')}>
                        Trên hành trình tìm kiếm những hạt cà phê ngon nhất,
                        Phúc Long luôn chú trọng bốn đặc tính từ trái cà phê
                        nhằm tôn trọng nguyên bản cho tách cà phê đậm vị.
                        <br />- Hương thơm là mùi hương của hạt cà phê - thơm
                        bao nhiêu hứa hẹn cho nhiều vị bấy nhiêu.
                        <br />- Thể chất là khái niệm để chỉ độ đậm đà trong
                        nước chiết xuất cà phê. cảm nhận thông qua đánh giá của
                        người thưởng thức.
                        <br />- Acid là hợp chất tạo nên vị chua thanh của cà
                        phê.
                        <br />- Hậu vị là cảm nhận vị cà phê còn đọng lại sau
                        khi thưởng thức.
                    </p>
                </div>
                <div className={cx('content')}>
                    <p className={cx('description')}>
                        Tách cà phê hoàn hảo được định nghĩa là tách cà phê có
                        vị đắng đậm đà, chua thanh thoát, lan toả hương thơm
                        nồng nàn, dễ dàng chinh phục vị giác của bất cứ ai.
                        <br />
                        Tách cà phê đậm vị luôn luôn là thức uống giữ vị trí
                        nhất định trong lòng những tín đồ cà phê Việt, dù văn
                        hoá thưởng thức có nhiều thay đổi theo sự phát triển
                        từng ngày của xã hội.
                    </p>
                    <img
                        className={cx('img')}
                        src={images.coffee_row3}
                        alt="anh"
                    />
                </div>
            </div>
        </div>
    );
}

export default CoffeePage1;
