import React from 'react'
import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'

export default {
  title: 'Layout/Col',
  component: Col
}

export const FullTable = () => (
  <>
    <Container>
      <Row height={100}>
        <Col bgColor='primary' shade='light' width={24}></Col>
        <Col bgColor='secondary' shade='light' width={24}></Col>
        <Col bgColor='tertiary' shade='light' width={24}></Col>
        <Col bgColor='quaternary' shade='light' width={24}></Col>
        <Col bgColor='quinary' shade='light' width={24}></Col>
      </Row>
      <Row height={100}>
        <Col bgColor='primary' width={24}></Col>
        <Col bgColor='secondary' width={24}></Col>
        <Col bgColor='tertiary' width={24}></Col>
        <Col bgColor='quaternary' width={24}></Col>
        <Col bgColor='quinary' width={24}></Col>
      </Row>
      <Row height={100}>
        <Col bgColor='primary' shade='dark' width={24}></Col>
        <Col bgColor='secondary' shade='dark' width={24}></Col>
        <Col bgColor='tertiary' shade='dark' width={24}></Col>
        <Col bgColor='quaternary' shade='dark' width={24}></Col>
        <Col bgColor='quinary' shade='dark' width={24}></Col>
      </Row>
    </Container>
  </>
)
FullTable.storyName = 'Full table with cols and rows'
