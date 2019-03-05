import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../utils/hooks'
import Header from '../../components/Header'

const Scene = ({ match }) => {
  const id = match.params.id
  const { image } = useTheme('scenes').find(scene => scene.id === Number(id))

  return (
    <SceneWrapper>
      <Header canNavigateBack />
      <a-scene embedded>
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

export default Scene
