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
        width: 12%;
        text-align: left;
    }

    @media (max-width: 768px) {
        font-size: 10px;
    }

    @media (max-width: 525px) {
        &:nth-of-type(5n) {
            display: none;
        }
    }
`
