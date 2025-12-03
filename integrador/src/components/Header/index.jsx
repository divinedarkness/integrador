import { HeaderContainer, ImgContainer, InputContainer, LinkContainer, LogoContainer, TextContainer } from "./style";
import logoImg from '../../assets/Chef2.png'


export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgContainer src={logoImg} />
                <LinkContainer>
                    <a href="">frango</a>
                    <a href="">carnes</a>
                    <a href="">massas</a>
                    <a href="">bolos</a>

                </LinkContainer>

            </LogoContainer>
            <LinkContainer>
                <InputContainer type="text" placeholder="procurar receita" />
                <a href="/home">HOME</a>
                <a href="/receitas">Receitas</a>
            </LinkContainer>
        </HeaderContainer>
    )
};