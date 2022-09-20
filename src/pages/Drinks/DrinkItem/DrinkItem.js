import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './DrinkItem.module.scss';

const cx = classNames.bind(styles);

function DrinkItem({ image, name, price, desc, fresh = false, btnName }) {
    return (
        <div className={cx('wrapper', 'l-3')}>
            <div className={cx('container')}>
                {fresh && <div className={cx('title')}>Món mới</div>}
                <img className={cx('img')} src={image} alt="anh" />
                <div className={cx('info')}>
                    <p className={cx('name')}>{name}</p>
                    {desc && <p className={cx('description')}>{desc}</p>}
                    <p className={cx('price')}>{price}</p>
                    <Button outline normal>
                        {btnName}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default DrinkItem;
