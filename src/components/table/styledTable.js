import styled from 'styled-components';

export const InfoTable = styled.table`
    width: 100%;
    background: inherit;
    margin: auto;
    border-bottom: 1px solid black;
`
export const Head = styled.thead`
    height: 35px;
`
export const Row = styled.tr`
    width: 88.3%;
`
export const HeadData = styled.th`
    width: ${props => props.width};
    color: white;
    font-size: 14px;
    text-align: right;
    border-bottom: 1px solid black; 

    &:first-of-type{
        width: 4.87%;
        text-align: left;
    }
    &:nth-of-type(2){
        width: 10.29%;
        text-align: left;
    }
    &:nth-of-type(3){
        width: 9.2%;
    }
    &:nth-of-type(4){
        width: 8.89%;
    }
    &:nth-of-type(5){
        width: 9.16%;
    }
    &:nth-of-type(6){
        width: 10.29%;
    }
    &:nth-of-type(7){
        width: 8.88%;
    }
    &:nth-of-type(8){
        width: 6.73%;
    }
    &:nth-of-type(9){
        width: 6.73%;
    }
    &:nth-of-type(10){
        width: 13.28%;
    }
`
