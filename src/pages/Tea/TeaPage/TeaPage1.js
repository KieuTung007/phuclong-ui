import classNames from 'classnames/bind';
import styles from './TeaPage.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function TeaPage1() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('description')}>
                        Một cây trà nếu được trồng ở những vùng đất có độ cao và
                        khí hậu khác nhau thì sẽ thu được những loại trà cũng
                        khác nhau. Có thể thấy sự phức tạp đến từ phía bên
                        trong, từ những thành phần cũng như cấu tạo hoá học độc
                        nhất vô nhị mà chỉ mình cây trà có được. Thấu hiểu điều
                        đó, để giữ trọn vị tươi nguyên, bảo toàn dưỡng chất tốt
                        nhất, một búp và hai lá non thường được chúng tôi thu
                        hái vào thời điểm sáng sớm. Tiếp đến, quy trình sản xuất
                        để cho ra các sản phẩm trà chất lượng cũng được thực
                        hiện khép kín.
                    </p>
                    <img
                        className={cx('img')}
                        src={images.tea_row1}
                        alt="anh"
                    />
                </div>
                <div className={cx('content')}>
                    <img
                        className={cx('img')}
                        src={images.tea_row2}
                        alt="anh"
                    />
                    <p className={cx('description')}>
                        Trong quá trình tìm kiếm từng loại trà thượng hạng, Phúc
                        Long luôn giữ gìn những hợp chất đặc biệt từ lá trà để
                        làm nên tách trà đậm vị.
                        <br />- Theanine (vị ngon) là cảm nhận được trạng thái
                        tỉnh táo, tràn đầy năng lượng khi thưởng thức trà.
                        <br />- Carbohydrate (vị ngọt) là đường tích trữ trong
                        lá trà..
                        <br />- Polyphenols (vị chát) là thành phần đặc biệt có
                        nhiều trong lá trà non.
                        <br />- Caffein (vị đắng) là thành phần bị ảnh hưởng bởi
                        2 yếu tố: nhiệt độ nước và cách ngâm. Để tiết chế
                        caffein, khi pha nên dùng nước nhiệt độ vừa phải và giảm
                        thời gian ngâm trà.
                        <br />- Enzyme (men) là chất xúc tác sinh học thúc đẩy
                        quá trình lên men của lá trà
                    </p>
                </div>
                <div className={cx('content')}>
                    <p className={cx('description')}>
                        Phúc Long thấu hiểu để có được một tách trà ngon thì từ
                        quá trình thu hái lá trà cho đến quá trình sao chế và
                        pha trà cũng cần phải chuẩn xác. Khi sao trà cần phải
                        canh lửa vừa vặn, khi pha trà nhiệt độ nước cũng vừa
                        phải. Để giờ đây, cầm trên tay tách trà ngát hương, nhâm
                        nhi trọn vị trà truyền thống như là một cách thể hiện
                        tâm tình đối với cuộc sống, cảm thụ hương vị tự nhiên
                        toát ra từ lá trà, lòng an nhiên trước bao bộn bề.
                    </p>
                    <img
                        className={cx('img')}
                        src={images.tea_row3}
                        alt="anh"
                    />
                </div>
            </div>
        </div>
    );
}

export default TeaPage1;
