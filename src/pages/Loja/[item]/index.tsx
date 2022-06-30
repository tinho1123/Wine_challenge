import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { Header } from "../../../components";
import GlobalStyle from '../../../styles/global';

const Card = () => {
    const [info, setInfo] = useState({});
    const router = useRouter()
    const { item } = router.query;

    useMemo(async () => {
        await fetch(`https://wine-back-test.herokuapp.com/products?name=${item}`)
            .then(async (response) => {
                const res = await response.json()
                setInfo(res.items[0])
            });
    }, [])
    
    
    return (
        <div>
            <GlobalStyle />
            <Header/>
        <button onClick={router.back}>Voltar</button>
        </div>
    )
}

export default Card;