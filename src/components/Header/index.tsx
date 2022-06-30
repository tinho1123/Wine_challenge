import React from 'react';
import { Container, Logo, List, ListItem, Account ,Icon, Lupa } from './styles';
import Link  from 'next/link'

const Header = () => {
  const paginas = ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'];

  return (
    <Container>
      <div>
        <Logo src='https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png' alt='logo'/>
      </div>
      <div>
        <List>
          {paginas.map((pagina, key) => 
          <Link href={`/${pagina}`}>
            <ListItem>{pagina}</ListItem>
          </Link>)}
        </List>
      </div>
      <Account>
        <Icon>
          <Lupa src='https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png'  />
        </Icon>
        <Icon>
          <img src='../../../public/assets/lupa.jpg'></img>
        </Icon>
        <Icon>
          <img src='../../../public/assets/lupa.jpg'></img>
        </Icon>
      </Account>
    </Container>
  );
}

export default Header;