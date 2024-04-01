import { NavbarLanding } from '../shared/components/NavbarLanding'
import { Footer } from '../shared/components/Footer'
import { Title } from '../features/landing/Title'
import { BottomTextWithButtons, CardsList } from '../features/landing/Main'

export function LandingPage () {
  return (
    <>
      <NavbarLanding />
      <Title />
      <CardsList />
      <BottomTextWithButtons />
      <Footer />
    </>
  )
}
