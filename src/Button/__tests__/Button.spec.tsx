import React from 'react'
import { render, screen } from '@testing-library/react'

import Button from '../Button'

describe('Button', () => {
  it('renders the button', () => {
    render(
      <Button size='md' variant='primary'>
        OMG
      </Button>
    )

    expect(screen.getByTitle('OMG')).toBeInTheDocument()
  })
})
