import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Menu from './Menu';
import HeaderTop from './HeaderTop';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <HeaderTop />
            <Menu />
        </div>
    );
}

export default Header;
