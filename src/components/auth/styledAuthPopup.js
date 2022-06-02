import styled from 'styled-components';
import { Sign } from '../header/styledHeader';

export const PopupContainer = styled.div`
    max-width: 430px;
    display: flex;
    justify-content: center;
    z-index: 2;
    position: relative;
    `
export const Exit = styled.img`
    width: 32px;
    height: 32px;
    position: absolute;
    top: -35px;
    right: -35px;
    cursor: pointer;

    @media (max-width: 525px) {
        right: 0;
    }
`
export const Section = styled.div`
    width: 50%;
    max-width: 600px;
    position: relative;
    background: rgba(79,52,85,0.8);
    height: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 6px;
    padding: 15px;

    @media (max-width: 1024px) {
        width: 70%;
    }

    @media (max-width: 525px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        height: 80vh;
    }
`
export const PopupForm = styled.form`
width: 80%;
height: 80%;
background: #170D21;
border-radius: 6px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20px;

@media (max-width: 768px) {
    width: 175px;
    height: 150px;
}

@media (max-width: 425px) {
    width: 250px;
    height: 200px;
    margin-bottom: 10px;
}
`
export const Title = styled.h2`
    font-size: 30px;
    margin: 0 auto;
    color: white;
`
export const FormErrorMessage = styled.span`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #FF0000;
    margin: 3px 0 0 36px;

    :last-of-type {
        margin: 0 auto 8px;
        text-align: center;
    }
`
export const FormSwitch = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: white;
    margin: 16px auto 28px auto;
`
export const FormSwitchSpan = styled.a`
    color: white;
    cursor: pointer;
    margin-left: 8px;

    :hover {
        opacity: 0.7;
    }
`
export const FormEmailError = styled.p`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
text-align: center;
color: #FF0000;
`
export const InputContainer = styled.div`
    position: relative;
    width: 80%;
    margin: 25px auto;

    @media (max-width: 525px) {
        width: 90%;
        margin: 15px auto;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 32px;
    margin: 0 auto;
    border-radius: 6px;
`
export const InputLabel = styled.label`
    font-family: 'Noto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    position: absolute;
    margin: 1.5% 0 0 1%;
    transition: 0.3s ease all;
    transform: ${props => props.hasValue ? 'translate(0, -28px) scale(1)' : ''};
    color: ${props => props.hasValue ? 'white' : '#B700FF'};

    ${InputContainer}:hover & {
        transform: translate(0, -28px) scale(1);
        color: white;
    }
`
export const Button = styled(Sign)`
    font-size: 20px;
    opacity: ${props => props.isValid ? 1 : 0.7};
`