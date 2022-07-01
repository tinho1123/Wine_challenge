import React from 'react'
import FilterContent from '../FilterContent'
import ContextWine from '../ContentWine'
import { Container } from './styles'
import { IFetchData } from '../../../contexts/FetchContext'

function Main (props: IFetchData) {
  return (
    <Container>
      <FilterContent />
      <ContextWine {...props} />
    </Container>
  )
}

export default Main
