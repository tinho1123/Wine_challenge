import React from 'react'
import FilterContent from '../FilterContent'
import ContextWine from '../ContentWine'
import { Container } from './styles'

function Main () {
  return (
    <Container>
      <FilterContent />
      <ContextWine />
    </Container>
  )
}

export default Main
