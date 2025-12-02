import { Container, InfoContainer } from "./style";

export function Footer() {
    return (

        <Container>
            <div id="logoContainer">
                <h1>Chefe em casa</h1>
            </div>

            <InfoContainer>
                <div>
                    <h5>COntact</h5>
                    <p>Email: chefeemcasa@yahoo.com</p>
                    <p>Telefone: (203) 1111-1111</p>
                </div>



                <div id="links">
                    <h5>Social</h5>
                    <a href="">Instagram</a>
                    <a href="">TikTok</a>
                    <a href="">Facebook</a>
                    <a href="">Youtube</a>
                    <a href="">Pinterest</a>
                </div>
            </InfoContainer>
        </Container>
    )

}