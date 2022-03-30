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
    
    :hover {
        background: ${props => props.$head ? 'none' : 'rgba(52,62,86,0.6)'};
    }
`
export const HeadData = styled.th`
    width: ${props => props.width};
    color: white;
    font-size: 14px;
    text-align: right;
    border-bottom: 1px solid black; 

    &:first-of-type{
        width: 16%;
        text-align: left;
    }
    &:nth-of-type(2){
        width: 20%;
        text-align: left;
    }
    &:nth-of-type(3){
        width: 15%;
    }
    &:nth-of-type(4){
        width: 15%;
    }
    &:nth-of-type(5){
        width: 15%;
    }
    &:nth-of-type(6){
        width: 17%;
    }
`