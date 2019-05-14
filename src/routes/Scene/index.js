import React, { useState } from 'react'
import styled from 'styled-components'
import UAParser from 'ua-parser-js'
import { useTheme, useEffectOnce } from '../../utils/hooks'
import Header from '../../components/Header'
import AlertDialog from '../../components/AlertDialog'
import PageNotFound from '../PageNotFound'

const Scene = ({ match }) => {
  const id = match.params.id
  const { image } =
    useTheme('scenes').find(scene => scene.id === Number(id)) || {}
  const [orientationAccess, setOrientationAccess] = useState(true)
  if (!image) {
    return <PageNotFound />
  }

  useEffectOnce(() => {
    const uaParser = new UAParser()
    const browser = uaParser.getBrowser()
    if (browser.name === 'Mobile Safari') {
      const timer = setTimeout(() => setOrientationAccess(false), 500)
      window.addEventListener('deviceorientation', event => {
        clearTimeout(timer)
      })
    }
  })

  return (
    <Wrapper>
      <Header canNavigateBack />
      {!orientationAccess && (
        <AlertDialog
          title='Enable Permissions'
          description={`
            This page requires access to your device's orientation.
            Please enable this permission under
            Settings > Safari > Motion & Orientation Access 
            and refresh the page.
          `}
        />
      )}
      <SceneWrapper>
        <a-scene loading-screen='enabled: false' embedded>
          <a-assets>
            <img id='sky' src={image} alt='panorama' />
          </a-assets>
          <a-sky src={image} />
        </a-scene>
      </SceneWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 75px);
  width: 100%;
`

const SceneWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`

export default Scene
