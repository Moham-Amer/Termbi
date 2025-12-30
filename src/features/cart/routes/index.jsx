import { safeLazy } from '../../../lib/safeLazy'
// import { DefaultLayout } from '../../../shared/layout/default-layout'
import { AuthGuard } from '../../auth/guards/auth-guard'
import { BrowserRouter } from "react-router-dom";
import { LayoutContainer } from '../../../components/shared/layout/layout-container';

const CartPage = safeLazy(() => import('../pages'))
const CheckoutPage = safeLazy(() => import('../pages/checkout'))
const PlaceOrderPage = safeLazy(() => import('../pages/place-order'))
const ConfirmationPage = safeLazy(() => import('../pages/confirmation'))

export const cartRoutes = [
    {
        path: "/cart", // Ex: my-app.com/cart
        element: (
            <LayoutContainer>
                <CartPage />
            </LayoutContainer>
        ),
    },

    {
        path: "/cart/checkout",
        element: (
            <LayoutContainer>
                {/* <BrowserRouter> */}
                    <AuthGuard>
                        <CheckoutPage />
                    </AuthGuard>
                {/* </BrowserRouter> */}
            </LayoutContainer>
        ),
    },
    {
        path: "/cart/place-order",
        element: (
            <LayoutContainer>
                <AuthGuard>
                    <PlaceOrderPage />
                </AuthGuard>
            </LayoutContainer>
        ),
    },
    {
        path: "/cart/confirmation",
        element: (
            <LayoutContainer>
                <ConfirmationPage />
            </LayoutContainer>
        ),
    },
]