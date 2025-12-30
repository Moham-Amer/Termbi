import { safeLazy } from '../../../lib/safeLazy'
// import { DefaultLayout } from '../../../shared/layout/default-layout'
import { LayoutContainer } from '../../../components/shared/layout/layout-container'

const ContactPage = safeLazy(() => import('../pages'))

export const contactRoutes = [
  {
    path: "/contact",
    element: (
      <LayoutContainer>
        <ContactPage />
      </LayoutContainer>
    ),
  }, 
]