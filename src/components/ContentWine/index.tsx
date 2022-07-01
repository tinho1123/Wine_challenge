import React, { Key, useState } from 'react'
import { IFetchData } from '../../../contexts/FetchContext'
import CardWine from '../CardWine'
import Pagination from '../Pagination'
import { Content, ItemsCount } from './styles'

interface IApiWine {
  page: number;
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: object[]
}

function ContentWine (props: IFetchData) {
  const [offset, setOffset] = useState(0)
  return (
    <>
    <Content>
       {!props.apiWine
         ? 'Loading'
         : (
            <>
            <ItemsCount><label style={{ fontWeight: '700' }}>{props.apiWine?.totalItems}</label> produtos encontrados</ItemsCount>
            <div className='cardContent'>
              { props.apiWine?.items.map((item: IApiWine, i: Key) => (<CardWine key={i} {...item} />))}
            </div>

            <Pagination limit={9} total={props.apiWine.totalPages} offset={offset} setOffset={setOffset} switchPage={props.switchPage} />
      </>)}
    </Content>
    </>
  )
}

export default ContentWine
