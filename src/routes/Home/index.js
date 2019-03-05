import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageLink from '../../components/PageLink'
import PageInfo from '../../components/PageInfo'
import Hero from '../../components/Hero'
import { useTheme } from '../../utils/hooks'

const Home = () => {
  const { name, image } = useTheme('home')
  const locations = useTheme('locations')

  return (
    <React.Fragment>
      <Header />
      <Hero image={image} />
      <PageInfo text={name} />
      {locations.map(location => (
        <PageLink
          key={location.id}
          text={location.name}
          path={`/location/${location.id}`}
        />
      ))}
      <Footer />
    </React.Fragment>
  )
}

export default Home
