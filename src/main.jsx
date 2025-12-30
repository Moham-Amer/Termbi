import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LayoutContainer } from './components/shared/layout/layout-container/index.jsx'
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HomePage } from './features/home/pages/index.jsx'
import { lazy } from 'react'
import MainResturantHomePage from './features/resturants/pages/resturantsHome.jsx';
import SignUpPage from './features/auth/pages/sign-up.jsx';
import CartPage from './features/cart/pages/index.jsx';
import CheckoutPage from './features/cart/pages/checkout.jsx';
const ContactPage = lazy(() => import('./features/contact/pages/index.jsx'))
import { AppRouterProvider } from "./routes/provider"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalizes styles */}
            <AppRouterProvider />
            <ToastContainer />
        {/* <LayoutContainer>
          <HomePage></HomePage>
        </LayoutContainer> */}
        {/* <MainResturantHomePage></MainResturantHomePage> */}
        {/* <SignUpPage></SignUpPage> */}
        {/* <CartPage></CartPage> */}
        {/* <CheckoutPage/> */}
      </ThemeProvider>
    </QueryClientProvider>

  </StrictMode>,
)
