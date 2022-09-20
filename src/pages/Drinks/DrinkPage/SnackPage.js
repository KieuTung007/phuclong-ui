import classNames from 'classnames/bind';
import styles from './DrinkPage.module.scss';

import DrinkItem from '../DrinkItem';
import { listSnack } from './DrinkPage';

const cx = classNames.bind(styles);

function SnackPage() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    {listSnack.map((item, index) => {
                        return (
                            <DrinkItem
                                key={index}
                                image={item.img}
                                name={item.name}
                                price={item.price}
                                desc={item.description}
                                fresh={item.fresh}
                                btnName="Liên hệ"
                                className="col l-3"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SnackPage;
