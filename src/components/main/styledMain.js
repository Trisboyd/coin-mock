import styled from 'styled-components';

export const MainSection = styled.section`
    width: 74.24%;
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const MainDiv = styled.div`
    width: 100%;
    background: #293143;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 6px;
    padding: 0 14px;
`
export const InputSection = styled.div`
    width: 100%;
    height: 30vh;
    background: #293143;
    display: flex;
    flex-direction: column;
    align-items: center;
    `
export const InputTitle = styled.h2`
    font-size: 44px;
    font-weight: 400;
    line-height: 1.4;
    color: white;
    text-align: center;
    margin: 20px auto;
`
export const InputWrapper = styled.form`
    width: 80%;
    height: 20%;
    position: relative;
    margin: 20px auto;
    border: none;
    outline: none;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: 50vw;
        height: 50px;
    }

    @media (max-width: 525px) {
        width: 60vw;
        height: 40px;
    }

    @media (max-width: 400px) {
        width: 80vw;
        height: 25px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background: rgb(33,35,47);
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    border-radius: 6px;
    margin: auto;
    padding-left: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.37;
    color: white;
    outline: none;
`

export const Button = styled.button`
position: absolute;
width: 25%;
height: 100%;
top: 0;
right: 0;
margin: auto;
background: #343e56;
box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
border-radius: 6px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 24px;
line-height: 1.7;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white;
border: none;
outline: none;
transition: background .2s ease-in-out;

:hover {
background: ${props => props.hoverColor};
cursor: pointer;
}

@media (max-width: 400px) {
    font-size: 12px;
}
`