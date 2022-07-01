import React, { useEffect, useState } from 'react'
import { Container, Logo, List, ListItem, Account, Icon } from './styles'
import Link from 'next/link'

interface IApiWine {
  page: number;
  totalPages: number,
  itemsPerPage: number,
  totalItems: number,
  items: object[]
}

interface ISearch {
  searchPage: (filter: string) => Promise<void>;
  apiWine: IApiWine | undefined;
}

const Header = (props: ISearch) => {
  const paginas = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos']
  const [search, setSearch] = useState('')
  const [searchCheck, setSearchCheck] = useState(false)

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        props.searchPage(search)
      }, 1000)
    }
  }, [search])
  return (
    <Container>
      <div>
        <Logo src='https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png' alt='logo'/>
      </div>
      <div>
        <List>
          {paginas.map((pagina, key) =>
          <Link key={key} href={`/${pagina}`}>
            <ListItem className={pagina}>{pagina}</ListItem>
          </Link>)}
        </List>
      </div>
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
        <Icon onClick={() => setSearchCheck(!searchCheck)}>
        </Icon>
        <Icon>

        </Icon>
        <Icon>

        </Icon>
      </Account>
    </Container>
  )
}

export default Header
