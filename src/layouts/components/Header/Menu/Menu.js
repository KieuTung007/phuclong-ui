import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/themes/light-border.css';

import configs from '~/configs';
import MenuItem from './MenuItem';
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
                    <MenuItem title="Trang chủ" to={configs.routes.home} />
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
                            <div>
                                <MenuItem
                                    title="Cà Phê"
                                    to={configs.routes.coffee}
                                />
                            </div>
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
                            <div>
                                <MenuItem title="Trà" to={configs.routes.tea} />
                            </div>
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
                            <div>
                                <MenuItem
                                    title="Thức uống"
                                    to={configs.routes.drinks}
                                />
                            </div>
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
                            <div>
                                <MenuItem
                                    title="Sản Phẩm"
                                    to={configs.routes.category}
                                />
                            </div>
                        </Tippy>
                    </div>

                    <MenuItem
                        title="Khuyến mãi"
                        to={configs.routes.promotion}
                    />

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
                            <div>
                                <MenuItem
                                    title="Về Chúng Tôi"
                                    to={configs.routes.introduce}
                                />
                            </div>
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
                            <div>
                                <MenuItem
                                    title="Thẻ"
                                    to={configs.routes.cardMember}
                                />
                            </div>
                        </Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
