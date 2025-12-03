import styled from "styled-components";

export const MainContainer = styled.div`

background-color: #ffa552;


h3 {
    color: white;
}
`

export const SecondContainer = styled.div`


width: 100%;
background: #fad3a4ff;
padding: 40px 0;
display: flex;
justify-content: center;


`

export const ACtontainer = styled.a`

display: flex;
flex-direction: column;
align-items: end;

`

export const Wrapper = styled.div`
width: 92%;
max-width: 1100px;
display: flex;
flex-direction: column;
gap: 30px;


@media (min-width: 768px) {
flex-direction: row;
align-items: center;
justify-content: space-between;
}
`;


export const LeftSide = styled.div`
width: 100%;
@media (min-width: 768px) {
width: 50%;
}
`;


export const Title = styled.h2`
font-size: 26px;
font-weight: bold;
color: #6b3f1f;
margin-bottom: 16px;
`;


export const SearchContainer = styled.div`
display: flex;
align-items: center;
gap: 12px;
`;


export const Input = styled.input`
width: 100%;
border: 1px solid #c9a68b;
padding: 12px 18px;
border-radius: 999px;
outline: none;
`;


export const Button = styled.button`
background: #f04432;
color: #fff;
padding: 12px 22px;
border-radius: 999px;
font-size: 14px;
font-weight: 600;
display: flex;
align-items: center;
gap: 6px;
cursor: pointer;
border: none;
`;


export const RightSide = styled.div`
width: 100%;
@media (min-width: 768px) {
width: 50%;
}
`;


export const SubTitle = styled.h3`
font-size: 18px;
font-weight: 600;
color: #6b3f1f;
margin-bottom: 12px;
`;


export const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 12px;
`;


export const Tag = styled.span`
background: #f8e7db;
color: #e94f38;
padding: 10px 18px;
border-radius: 999px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
`