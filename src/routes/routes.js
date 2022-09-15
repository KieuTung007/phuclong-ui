import configs from '~/configs';

import Home from '~/pages/Home';
import Coffee from '~/pages/Coffee';
import Tea from '~/pages/Tea';
import Drinks from '~/pages/Drinks';
import Category from '~/pages/Category';
import Promotion from '~/pages/Promotion';
import Introduce from '~/pages/Introduce';
import CardMember from '~/pages/CardMember';

const publicRoutes = [
    { path: configs.routes.home, component: Home },
    { path: configs.routes.coffee, component: Coffee },
    { path: configs.routes.tea, component: Tea },
    { path: configs.routes.drinks, component: Drinks },
    { path: configs.routes.category, component: Category },
    { path: configs.routes.promotion, component: Promotion },
    { path: configs.routes.introduce, component: Introduce },
    { path: configs.routes.cardMember, component: CardMember },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
