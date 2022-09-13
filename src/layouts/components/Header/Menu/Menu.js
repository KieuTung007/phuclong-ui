import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light-border.css';

import { Wrapper as PopperWrapper } from '~/components/PopperWrapper';
import {
    PopperCardMember,
    PopperCategory,
    PopperCoffee,
    PopperDrink,
    PopperIntroduce,
    PopperPromotion,
    PopperTea,
} from '~/layouts/components/PopperMenu';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('nav')}>
                    <div className={cx('nav-item')}>TRANG CHỦ</div>
                    <div>
                        <Tippy
                            interactive
                            offset={[-10, 10]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperCoffee />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>CÀ PHÊ</div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            interactive
                            offset={[-20, 10]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperTea />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>TRÀ</div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            interactive
                            offset={[-10, 10]}
                            placement="bottom-start"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperDrink />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>THỨC UỐNG</div>
                        </Tippy>
                    </div>

                    <div>
                        <Tippy
                            interactive
                            offset={[-50, 10]}
                            placement="bottom"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperCategory />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>SẢN PHẨM</div>
                        </Tippy>
                    </div>

                    <div className={cx('nav-item')}>KHUYẾN MÃI</div>

                    <div>
                        <Tippy
                            interactive
                            offset={[-130, 10]}
                            placement="bottom"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperIntroduce />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>VỀ CHÚNG TÔI</div>
                        </Tippy>
                    </div>
                    <div>
                        <Tippy
                            arrow={true}
                            interactive
                            offset={[58, 10]}
                            placement="bottom-end"
                            render={(attrs) => (
                                <div className="box-1" tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <PopperCardMember />
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('nav-item')}>THẺ</div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
