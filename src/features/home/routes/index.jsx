import { safeLazy } from '../../../lib/safeLazy'
import { LayoutContainer } from '../../../components/shared/layout/layout-container';


const HomePage = safeLazy(() => import('../pages'), 'HomePage');

export const homeRoutes = [
    {
        path: "/", // Ex: my-app.com
        element: (
            <LayoutContainer>
                <HomePage />
            </LayoutContainer>
        ),
    },
]