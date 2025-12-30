import { lazy } from "react"
import { LayoutContainer } from "../../../components/shared/layout/layout-container";
// import { DefaultLayout } from '../../../shared/layout/default-layout';

const ResturantSignUpPage = lazy(() => import('../pages/sign-up'));
const ResturantLoginPage = lazy(() => import('../pages/login'));
export const authRoutes = [
    {
        path: "/resturants/login",
        element:  ( <LayoutContainer>
                <ResturantLoginPage />
              </LayoutContainer>)
    },
    {
        path: "/resturants/sign-up",
        element: (
            <LayoutContainer>
                <ResturantSignUpPage />
            </LayoutContainer>
        ),
    },
]