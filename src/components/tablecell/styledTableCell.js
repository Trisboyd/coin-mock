import styled from 'styled-components';

const handleColor = color => {
    switch (color) {
        case 'red':
            return '#ff7060';
        case 'green':
            return '#26da71';
        default:
            return 'white';
    }
};

export const Cell = styled.td`
    width: ${props => props.width};
    height: 49.1px;
`
export const CellText = styled.p`
    color: ${(props) => handleColor(props.color)}};
    font-size: 16px;
    font-weight: 400;
    text-align: right;
    vertical-align: center;
`
export const CellLink = styled.a`
    display: flex;
    width: ${props => props.width};
`
export const CellCoin = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;
`
export const SmallText = styled.p`
    font-size: 11px;
    font-weigth: 400;
    line-height: 13.2px;
    color: white;
    opacity: 0.6;
`
export const CellImage = styled.img`
    width: 22px;
    height: 22px;
`
export const Liked = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};
`
export const Heart = styled.img`
    width: 18.2px;
    height: 13px;
`