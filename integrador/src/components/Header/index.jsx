import { HeaderContainer, ImgContainer, InputContainer, LinkContainer, LogoContainer, TextContainer } from "./style";
import logoImg from '../../assets/Chef2.png'


export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgContainer src={logoImg} />
                <LinkContainer>
                    <a href="/receitas">Frango</a>
                    <a href="/receitas">Carnes</a>
                    <a href="/receitas">Massas</a>
                    <a href="/receitas">Bolos</a>

                </LinkContainer>

            </LogoContainer>
            <LinkContainer>
                <InputContainer type="text" placeholder="Procurar Receita" />
                <a href="/">HOME</a>
                <a href="/receitas">Receitas</a>
            </LinkContainer>
        </HeaderContainer>
    )
};