import { NavbarLanding } from '../shared/components/Navbar'
import { Title } from '../shared/components/Title'
import { CardsList, BottomTextWithButtons } from '../shared/components/Main'
import { Footer } from '../shared/components/Footer'

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
