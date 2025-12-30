import { lazy } from 'react'
// import { DefaultLayout } from '../../../shared/layout/default-layout'
import { LayoutContainer } from '../../../components/shared/layout/layout-container'

const ProfilePage = lazy(() => import('../pages'))

export const profileRoutes = [
  {
    path: "/profile",
    element: (
      <LayoutContainer>
        <ProfilePage />
      </LayoutContainer>
    ),
  }, 
]