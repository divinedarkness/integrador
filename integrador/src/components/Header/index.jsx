import { HeaderContainer, ImgContainer, InputContainer, LinkContainer, LogoContainer, TextContainer } from "./style";
import logoImg from '../../assets/Chef2.png'


export function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
                <ImgContainer src={logoImg} />
                <LinkContainer>
                    <a href="/receitas">frango</a>
                    <a href="/receitas">carnes</a>
                    <a href="/receitas">massas</a>
                    <a href="/receitas">bolos</a>

                </LinkContainer>

            </LogoContainer>
            <LinkContainer>
                <InputContainer type="text" placeholder="procurar receita" />
                <a href="/">HOME</a>
                <a href="/receitas">Receitas</a>
            </LinkContainer>
        </HeaderContainer>
    )
};