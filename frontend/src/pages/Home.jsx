import Hero from '../components/sections/Hero'
import EventHighlights from '../components/sections/EventHighlights'
import Services from '../components/sections/Services'
import EventsPrograms from '../components/sections/EventsPrograms'

const Home = () => {
  return (
    <div>
      <Hero />
      <EventHighlights />
      <Services />
      <EventsPrograms />
    </div>
  )
}

export default Home