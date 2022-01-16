import React from 'react'

import { Button } from './Button'
import { PRIMARY, QUINARY, TERTIARY } from '../../constants/colors'

export default {
  title: 'Controls/Button',
  component: Button
}

export const ButtonVariousSizes = () => (
  <>
    <div
      style={{
        width: 800,
        height: 100,
        backgroundColor: PRIMARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='mr-2'>
        <Button size='sm' variant='primary'>
          Default
        </Button>
      </div>
      <div className='mr-2'>
        <Button size='sm' variant='secondary'>
          Submit
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='sm' variant='tertiary'>
          Review
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='sm' variant='quaternary'>
          Cancel
        </Button>
      </div>
      <div>
        <Button size='sm' variant='quinary'>
          Abdicate
        </Button>
      </div>
    </div>
    <div
      style={{
        width: 800,
        height: 100,
        backgroundColor: TERTIARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='mr-2'>
        <Button size='md' variant='primary'>
          Default
        </Button>
      </div>
      <div className='mr-2'>
        <Button size='md' variant='secondary'>
          Submit
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='md' variant='tertiary'>
          Review
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='md' variant='quaternary'>
          Cancel
        </Button>
      </div>
      <div>
        <Button size='md' variant='quinary'>
          Abdicate
        </Button>
      </div>
    </div>
    <div
      style={{
        width: 800,
        height: 100,
        backgroundColor: QUINARY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='mr-2'>
        <Button size='lg' variant='primary'>
          Default
        </Button>
      </div>
      <div className='mr-2'>
        <Button size='lg' variant='secondary'>
          Submit
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='lg' variant='tertiary'>
          Review
        </Button>
      </div>
      <div className='mr-4'>
        <Button size='lg' variant='quaternary'>
          Cancel
        </Button>
      </div>
      <div>
        <Button size='lg' variant='quinary'>
          Abdicate
        </Button>
      </div>
    </div>
  </>
)
ButtonVariousSizes.storyName = 'Various sizes'
