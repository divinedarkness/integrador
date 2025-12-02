import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Main } from "../../components/Main"

export function Home() {

    const navigate = useNavigate()
    const location = useLocation()



    function handleAboutClick() {
        navigate('/receitas')
    }

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )

}