import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageLink from '../../components/PageLink'
import PageInfo from '../../components/PageInfo'
import PageNotFound from '../PageNotFound'
import Hero from '../../components/Hero'
import { useTheme } from '../../utils/hooks'

const Location = ({ match, env }) => {
  const id = match.params.id
  const { name, image } = useTheme('locations').find(
    location => location.id === Number(id)
  ) || {}
  if (!name || !image) {
    return <PageNotFound />
  }
  const scenes = useTheme('scenes').filter(
    scene => scene.locationId === Number(id)
  )

  return (
    <React.Fragment>
      <Header />
      <Hero image={image} />
      <PageInfo text={name} env={env} canNavigateBack />
      {scenes.map(scene => (
        <PageLink
          key={scene.id}
          text={scene.name}
          path={`/${env}/scene/${scene.id}`}
        />
      ))}
      <Footer />
    </React.Fragment>
  )
}

export default Location
