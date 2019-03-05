import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../../utils/hooks'
import Header from '../../components/Header'

const Scene = ({ match }) => {
  const id = match.params.id
  const { image } = useTheme('scenes').find(scene => scene.id === Number(id))

  return (
    <SceneWrapper>
      <GlobalStyle />
      <Header canNavigateBack />
      <a-scene
        loading-screen='dotsColor: #777; backgroundColor: #fff;'
        embedded
      >
        <a-assets>
          <img id='sky' src={image} alt='panorama' />
        </a-assets>
        <a-sky src={image} />
      </a-scene>
    </SceneWrapper>
  )
}

const SceneWrapper = styled.div`
  position: absolute;
  height: calc(100% - 85px);
  width: 100%;
`

const GlobalStyle = createGlobalStyle`
  html {
    overflow: hidden;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    position: fixed;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`

export default Scene
