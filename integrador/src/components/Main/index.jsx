import 'bootstrap/dist/css/bootstrap.css';
import { useLocation, useNavigate } from "react-router-dom"
import Carousel from 'react-bootstrap/Carousel';
import carrossel1 from '../../assets/carrossel1.jpg'
import carrossel2 from '../../assets/carrossel2.jpeg'
import carrossel3 from '../../assets/carrossel3.jpeg'
import carrossel4 from '../../assets/carrossel4.jpg'
import carrossel5 from '../../assets/carrossel5.jpeg'
import { Input, LeftSide, MainContainer, RightSide, SearchContainer, SecondContainer, SubTitle, Tag, Tags, Title, Wrapper } from './style';
import { Button } from '../Button';


export function Main() {

    const termos = [
        "carne moida",
        "panqueca",
        "bolo de banana",
        "jantar vegano",
        "salpicão",
        "panetone",
        "bolo",
        "saladas",
    ]


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
                <Wrapper>
                    <LeftSide>
                        <Title>o que você quer cozinhar hoje?</Title>


                        <SearchContainer>
                            <Input placeholder="procurar receita ou ingrediente" />
                            <Button>🔍 procurar</Button>
                        </SearchContainer>
                    </LeftSide>


                    <RightSide>
                        <SubTitle>termos em alta</SubTitle>
                        <Tags>
                            {termos.map((tag, index) => (
                                <Tag key={index}>{tag}</Tag>
                            ))}
                        </Tags>
                    </RightSide>
                </Wrapper>
            </SecondContainer>
        </>
    )
}