import React, { useEffect, useState } from 'react'
import { Container, Logo, Account, Icon, MarketCar, SearchImage, Hamburguer } from './styles'
// import Link from 'next/link'
import { IWineItem } from '../../../../contexts/FetchContext'

interface IApiWine {
  page?: number;
  totalPages?: number,
  itemsPerPage?: number,
  totalItems?: number,
  items?: object[]
}

interface ISearch {
  searchPage?: (filter: string) => Promise<void>;
  apiWine?: IApiWine | undefined;
  card?: IWineItem[]
}

const HeaderMobile = (props: ISearch) => {
  // const paginas = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos']
  const [search, setSearch] = useState('')
  const [searchCheck, setSearchCheck] = useState(false)

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        props.searchPage!(search)
      }, 1000)
    }
  }, [search])
  return (
    <Container>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '10rem', marginLeft: '1rem' }}>
        <Hamburguer src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png' alt='hamburguer'/>
        <div>
          <Logo src='https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png' alt='logo'/>
        </div>
      </div>
      <div>
      <Account>
      <input
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        type='text'
        placeholder='Faça sua busca'
        value={search}
        className={searchCheck ? 'visible' : 'invisible'}
      />
      <div>
          <SearchImage src='https://svgsilh.com/svg_v2/1093183.svg' alt='lupa de procura' onClick={() => setSearchCheck(!searchCheck)}/>
      </div>
      <div className='containerMarket'>
        <Icon style={{ backgroundColor: '#F6B554' }}>
          <MarketCar src='https://www.wine.com.br/clubewine/build/img/selecao-mensal.png' alt='Carrinho de compras' />
        </Icon>
        <div className='marketCar'>
            <p>{props.card ? props.card.length : 0}</p>
          </div>
      </div>
      </Account>
      </div>
    </Container>
  )
}

export default HeaderMobile
