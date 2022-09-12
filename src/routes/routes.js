import Home from '~/pages/Home';
import Coffee from '~/pages/Coffee';
import Tea from '~/pages/Tea';
import Drinks from '~/pages/Drinks';
import Category from '~/pages/Category';
import Promotion from '~/pages/Promotion';
import Introduce from '~/pages/Introduce';
import CardMember from '~/pages/CardMember';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/ca-phe', component: Coffee },
    { path: '/tra', component: Tea },
    { path: '/thuc-uong', component: Drinks },
    { path: '/category', component: Category },
    { path: '/khuyen-mai', component: Promotion },
    { path: '/ve-chung-toi', component: Introduce },
    { path: '/the-thanh-vien', component: CardMember },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
