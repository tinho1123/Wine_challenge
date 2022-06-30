import { useRouter } from "next/router";

const Card = () => {
    const router = useRouter()
    const { slug } = router.query;
    
    return (
        <>{slug}</>
    )
}

export default Card;