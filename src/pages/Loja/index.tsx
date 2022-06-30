import { GetServerSideProps, GetStaticPaths } from "next";
import { Header } from "../../components";
import Main from "../../components/Main";
import GlobalStyle from '../../styles/global';

function Loja() {
 return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
 )
}

export default Loja;