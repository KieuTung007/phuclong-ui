import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './DrinkSearch.module.scss';
import { Wrapper as PopperWrapper } from '~/components/PopperWrapper';

const cx = classNames.bind(styles);

function DrinkSearch() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('title')}>Nhóm sản phẩm</p>
                    <div>
                        <Tippy
                            interactive
                            trigger="click"
                            offset={[0, 2]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div
                                    className="btn-tippy"
                                    tabIndex="-1"
                                    {...attrs}
                                >
                                    <PopperWrapper className="border">
                                        <ul className={cx('list-item')}>
                                            <li className={cx('item')}>
                                                Chọn nhóm
                                            </li>
                                            <li className={cx('item')}>
                                                Phuc Long Signature
                                            </li>
                                            <li className={cx('item')}>
                                                Special Tea
                                            </li>
                                            <li className={cx('item')}>
                                                Hot Unique Loose Tea
                                            </li>
                                            <li className={cx('item')}>
                                                Cold Brew Tea
                                            </li>
                                            <li className={cx('item')}>
                                                Signature Coffee
                                            </li>
                                            <li className={cx('item')}>
                                                Fresh Squeezed fruit juice
                                            </li>
                                            <li className={cx('item')}>
                                                Relaxing fruit smoothie
                                            </li>
                                            <li className={cx('item')}>
                                                Cool blended beverage
                                            </li>
                                        </ul>
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <button className={cx('product-group')}>
                                <span className={cx('btn-title')}>
                                    Chọn nhóm
                                </span>
                                <FontAwesomeIcon
                                    className={cx('icon')}
                                    icon={faCaretDown}
                                />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('title')}>Theo giá</p>
                    <Tippy
                        interactive
                        offset={[0, 2]}
                        trigger="click"
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className="btn-tippy" tabIndex="-1" {...attrs}>
                                <PopperWrapper className="border">
                                    <ul className={cx('list-item')}>
                                        <li className={cx('item')}>
                                            Không lựa chọn
                                        </li>
                                        <li className={cx('item')}>
                                            Từ thấp đến cao
                                        </li>
                                        <li className={cx('item')}>
                                            Từ cao tới thấp
                                        </li>
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <button className={cx('product-group')}>
                            <span className={cx('btn-title')}>
                                Không lựa chọn
                            </span>
                            <FontAwesomeIcon
                                className={cx('icon')}
                                icon={faCaretDown}
                            />
                        </button>
                    </Tippy>
                </div>
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <p className={cx('title')}>Tìm kiếm</p>
                    <Tippy
                        interactive
                        offset={[-18, 8]}
                        trigger="click"
                        placement="bottom-end"
                        render={(attrs) => (
                            <div className="btn-tippy" tabIndex="-1" {...attrs}>
                                <PopperWrapper className="border">
                                    <ul className={cx('list-input-item')}>
                                        <li
                                            className={cx('item', 'input-item')}
                                        >
                                            thám tử phố tàu
                                        </li>
                                        <li
                                            className={cx('item', 'input-item')}
                                        >
                                            phi vụ triệu đô
                                        </li>
                                        <li
                                            className={cx('item', 'input-item')}
                                        >
                                            ăn kem
                                        </li>
                                    </ul>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('input-group')}>
                            <input
                                className={cx('input')}
                                type="text"
                                placeholder="Tên sản phẩm"
                            />
                            <div className={cx('icon-search')}>
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}

export default DrinkSearch;
