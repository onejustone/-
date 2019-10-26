import { IRoute } from '@/typings';
import * as Loadable from 'react-loadable';
import NotFound from '@/views/notFound/NotFound';

export const components: IRoute = {
    path: '/components',
    name: 'components',
    component: Loadable({
        loader: () => import('@/views/components/Components'),
        loading() {
            return 'Loading';
        }
    }),
    routes: [
        {
            path: '/components',
            redirect: '/components/progress'
        },
        {
            path: '/components/progress',
            name: 'progress',
            exact: true,
            component: Loadable({
                loader: () => import('@/components/progress/Progress'),
                loading() {
                    return 'Loading';
                }
            })
        },
        {
            path: '/components/dynamic/:id',
            name: 'dynamicProgress',
            exact: true,
            component: Loadable({
                loader: () => import('@/components/progress/Progress'),
                loading() {
                    return 'Loading';
                }
            })
        },
        {
            component: NotFound
        }
    ]
};

export default components;
