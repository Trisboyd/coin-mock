import heart from '../../images/heart.svg';

import {
    Heart,
    Liked,
    SmallText,
    CellLink,
    CellImage,
    CellCoin,
    CellText,
    Cell
} from '../tablecell/styledTableCell';

const TableCell = (props) => {

    const handleCoinClick = () => {
        props.handleCoinClick(props.data)
    };

    const SelectData = () => {
        if (props.coin.hasOwnProperty('heart')) {
            return (
                <Liked>
                    <SmallText>
                        {props.number}
                    </SmallText>
                </Liked>
            )
        }
        else if (props.coin.hasOwnProperty('image')) {
            return (
                <CellLink
                    onClick={handleCoinClick}>
                    <CellImage src={props.coin.image} alt={props.coin.symbol} />
                    <CellCoin>{props.coin.symbol}
                        <SmallText>{props.coin.word}</SmallText>
                    </CellCoin>
                </CellLink>
            )
        }
        else return (
            <CellText
                color={props.coin.negative}
                align={props.coin.align}>
                {props.coin.value}
            </CellText>
        )
    }

    return (
        <Cell>
            {props.coin && SelectData()}
        </Cell>
    )
}
export default TableCell;