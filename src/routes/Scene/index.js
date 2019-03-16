import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'
import Header from '../../components/Header'
import PageNotFound from '../PageNotFound'

const Scene = ({ match }) => {
  const id = match.params.id
  const { image } =
    useTheme('scenes').find(scene => scene.id === Number(id)) || {}
  if (!image) {
    return <PageNotFound />
  }

  return (
    <Wrapper>
      <Header canNavigateBack />
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
