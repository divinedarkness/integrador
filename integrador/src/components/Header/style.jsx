import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 20px;
    width: calc(100vw-20px);
    height: 81px;
    background-color: #fab370;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    a {
        color: #000000;
        text-decoration: none;
        cursor: pointer;
    }

    #background {
        background-color: #808CFD;
        padding: 12px 17px;
        border-radius: 8px;
    }
`

export const ImgContainer = styled.img`
    width: 153px;
    height: 80px;
`

export const TextContainer = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
    gap: 20px;
`

export const InputContainer = styled.input`

border-radius: 16px;
display: flex;
align-items: end;
justify-content: end;
text-align: center;
`
export const SecondContainer = styled.div `




input {
    border-radius: 16px;
    text-align: center;
}

`