import Home from '~/pages/Home';
import Tea from '~/pages/Tea';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/tea', component: Tea },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
