import classNames from 'classnames/bind';
import Slider from '~/layouts/components/Slider';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide')}>
                <Slider />
            </div>
        </div>
    );
}

export default Home;
