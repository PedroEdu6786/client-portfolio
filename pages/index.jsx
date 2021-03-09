import PageTemplate from '../src/components/templates/PageTemplate'
import Hero from '../src/components/organisms/Hero'
import Projects from '../src/components/organisms/Projects'
import Services from '../src/components/organisms/Services'
import Newsletter from '../src/components/organisms/Newsletter'

const Home = () => {
  return (
    <PageTemplate>
      <Hero />
      <Projects />
      <Services />
      <Newsletter />
    </PageTemplate>
  )
}

export default Home
