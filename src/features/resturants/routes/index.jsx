import { lazy } from 'react'
import { ResturantLayoutContainer } from '../components/shared/layout/layout-container'

const ResturantsHome = lazy(() => import('../pages/resturantsHome'))
const ReservationPage = lazy(() => import('../pages/reservation'))
const ResturantSignUpPage = lazy(() => import('../auth/pages/sign-up'));
const ResturantLoginPage = lazy(() => import('../auth/pages/login'));

export const resturantsRoutes = [
  {
    path: '/resturants',
    element: (
      <ResturantLayoutContainer>
        <ResturantsHome />
      </ResturantLayoutContainer>
    ),
  },
    {
    path: '/resturants/reservation',
    element: (
      <ResturantLayoutContainer>
        <ReservationPage />
              </ResturantLayoutContainer>
    ),
  },


      {
          path: "/resturants/login",
          element:  ( <ResturantLayoutContainer>
                  <ResturantLoginPage />
                </ResturantLayoutContainer>)
      },
      {
          path: "/resturants/sign-up",
          element: (
              <ResturantLayoutContainer>
                  <ResturantSignUpPage />
              </ResturantLayoutContainer>
          ),
      },
  
]
