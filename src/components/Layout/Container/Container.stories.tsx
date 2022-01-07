import React from 'react'

import { Container } from './Container'

export default {
  title: 'Layout/Container',
  component: Container
}

export const NoParentFullWidth = () => (
  <>
    <Container bgColor='primary' shade='light' padding={50} />
    <Container bgColor='primary' padding={100} />
    <Container bgColor='primary' shade='dark' padding={200} />
  </>
)
NoParentFullWidth.storyName = 'No parent, full width'
