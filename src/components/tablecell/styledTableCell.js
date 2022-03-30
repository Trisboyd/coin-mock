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
    border-bottom: 0.5px solid black;
`
export const CellText = styled.p`
    color: ${(props) => handleColor(props.color)}};
    font-size: 16px;
    font-weight: 400;
    vertical-align: center;
    text-align: ${props => props.align ? 'left' : 'right'};

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 525px) {
        font-size: 10px;
    }
`
export const CellLink = styled.div`
    display: flex;
    width: ${props => props.width};
    cursor: pointer;
`
export const CellCoin = styled.div`
    display: flex;
    color: white;
    margin-left: 10px;

    @media (max-width: 768px) {
        align-items: center;
        font-size: 12px;
    }
`
export const SmallText = styled.p`
    font-size: 11px;
    font-weigth: 400;
    line-height: 13.2px;
    margin-left: 10px;
    color: yellow;
    opacity: 0.8;
    align-self: center;

    @media (max-width: 768px) {
        font-size: 8px;
    }
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