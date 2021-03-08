import Header from '../src/components/organisms/Header'
import Hero from '../src/components/organisms/Hero'
import Newsletter from '../src/components/organisms/Newsletter'
import Projects from '../src/components/organisms/Projects'
import Services from '../src/components/organisms/Services'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Newsletter />
    </>
  )
}

export default Home
