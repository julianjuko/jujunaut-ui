import React from 'react'
import { Container } from '../Container'
import { Row } from '../Row'

export default {
  title: 'Layout/Row',
  component: Row
}

export const ContainerWithRows = () => (
  <>
    <Container bgColor='quinary' shade='light' padding={50}>
      <Row bgColor='tertiary' shade='light' height={25} />
      <Row bgColor='tertiary' height={50} />
      <Row bgColor='tertiary' shade='dark' height={75} />
    </Container>
  </>
)
ContainerWithRows.storyName = 'Container with rows'
