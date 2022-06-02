import styled from 'styled-components';

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
width: 250px;
height: 200px;
position: relative;
background: #170D21;
border-radius: 6px;

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
export const FormTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    width: 330px;
    margin: 34px 64px 24.26px 36px;
    `
export const FormInput = styled.input`
    width: 83.5%;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    vertical-align: text-top;
    color: #000000;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-left: 36px;
    padding-bottom: 13.26px;

    :focus {
        outline: none;
        border-bottom: 1px solid #000;
    }
`
export const FormLabel = styled.label`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #2F71E5;
    margin: 13px 0 9px 36px;
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
    color: #000000;
    margin: 16px auto 28px auto;
`
export const FormSwitchSpan = styled.a`
    color: #2F71E5;
    cursor: pointer;
    margin-left: 8px;
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