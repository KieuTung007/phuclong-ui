import classNames from 'classnames/bind';
import styles from './DrinkPage.module.scss';

import DrinkItem from '../DrinkItem';
import { listDrink } from './DrinkPage';

const cx = classNames.bind(styles);

function DrinkPage1() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    {listDrink.map((item, index) => {
                        return (
                            <DrinkItem
                                key={index}
                                image={item.img}
                                name={item.name}
                                price={item.price}
                                desc={item.description}
                                fresh={item.fresh}
                                btnName="Đặt hàng"
                                className="col l-3"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DrinkPage1;
