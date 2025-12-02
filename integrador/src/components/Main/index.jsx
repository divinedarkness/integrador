import 'bootstrap/dist/css/bootstrap.css';
import { useLocation, useNavigate } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import carrossel1 from '../../assets/carrossel1.jpg'
import carrossel2 from '../../assets/carrossel2.jpeg'
import carrossel3 from '../../assets/carrossel3.jpeg'
import carrossel4 from '../../assets/carrossel4.jpg'
import carrossel5 from '../../assets/carrossel5.jpeg'
import { ACtontainer, MainContainer, SecondContainer } from './style';
import { Button } from '../Button';


export function Main() {

    const navigate = useNavigate()
    const location = useLocation()

    function handleLogoutClick() {
        localStorage.setItem('auth', 'false')
        navigate('/receitas')
    }




    return (
        <>
            <MainContainer>

                <div style={{ width: 700, margin: 'auto' }}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img src={carrossel1} alt="" />
                            <Carousel.Caption>
                                <h3>Pave</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={carrossel2} alt="" />
                            <Carousel.Caption>
                                <h3>Feijão Carioca</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img src={carrossel3} alt="" />
                            <Carousel.Caption>
                                <h3>Pizza de calabresa</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img src={carrossel4} alt="" />
                            <Carousel.Caption>
                                <h3>Bolo de fubá</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img src={carrossel5} alt="" />
                            <Carousel.Caption>
                                <h3>Farofa de abacaxi com bacon e calabresa</h3>
                                <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </MainContainer>

            <SecondContainer>
                <h1>O que você quer cozinhar hoje?</h1>
                <input type="text" placeholder='Procurar receita' />
                <Button handleClick={handleLogoutClick} />

                <ACtontainer>
                    <h1>Mais procurados</h1>
                    <a href="">carnes</a>
                    <a href="">Bolho de milho em lata</a>
                    <a href="">pizza caseira simples</a>
                    <a href="">coxa e sobrecoxa</a>
                </ACtontainer>
            </SecondContainer>
        </>
    )
}