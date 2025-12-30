import { safeLazy } from '../../../lib/safeLazy'
import { LayoutContainer } from "../../../components/shared/layout/layout-container";
// import { DefaultLayout } from '../../../shared/layout/default-layout';

const SignUpPage = safeLazy(() => import('../pages/sign-up'));
const LoginPage = safeLazy(() => import('../pages/login'));
export const authRoutes = [
    {
        path: "/login",
        element:  ( <LayoutContainer>
                <LoginPage />
              </LayoutContainer>)
    },
    {
        path: "/sign-up",
        element: (
            <LayoutContainer>
                <SignUpPage />
            </LayoutContainer>
        ),
    },
]