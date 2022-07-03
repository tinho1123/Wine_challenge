import React, { Key, useState } from 'react'
import { IFetchData } from '../../../contexts/FetchContext'
import CardWine from '../CardWine'
import Loading from '../Loading'
import Pagination from '../Pagination'
import { Content, ItemsCount } from './styles'

interface IApiWine {
  page?: number;
  totalPages?: number,
  itemsPerPage?: number,
  totalItems?: number,
  items?: object[]
}

function ContentWine (props: IFetchData) {
  const [offset, setOffset] = useState(0)
  return (
    <>
    <Content data-cy='conteudoPrincipal'>
       {props.apiWine?.page === 0
         ? <Loading />
         : (
            <>
            <ItemsCount><label style={{ fontWeight: '700' }}>{props.apiWine?.totalItems}</label> produtos encontrados</ItemsCount>
            <div className='cardContent' data-cy='cardItems'>
              { props.apiWine?.items!.map((item: IApiWine, i: Key) => (<CardWine key={i} {...item} localstorageCardSetItem={props.localstorageCardSetItem}/>))}
            </div>
            {props.apiWine?.totalItems! >= 50
              ? (
              <Pagination limit={9} total={props.apiWine?.totalPages} offset={offset} setOffset={setOffset} switchPage={props.switchPage} />
            )
              : (
              ''
            )}
      </>)}
    </Content>
    </>
  )
}

export default ContentWine
