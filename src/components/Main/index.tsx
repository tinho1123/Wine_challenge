import React from 'react'
import FilterContent from '../FilterContent'
import ContextWine from '../ContentWine'
import { Container } from './styles'
import { IFetchData } from '../../../contexts/FetchContext'
import ContentWineMobile from '../mobile/ContentWineMobile'

function Main (props: IFetchData) {
  return (
    <Container>
      {props.mobile
        ? (
        <ContentWineMobile {...props} />
          )
        : (
          <>
        <FilterContent {...props} />
        <ContextWine {...props} />
        </>
          )
      }

    </Container>
  )
}

export default Main
