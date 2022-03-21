import { ControlData } from "../../constants/controlConst";
import MainButton from "../mainButton/MainButton";
import { Group, Wrapper } from "./styledControls";
import heart from '../../images/heart.svg';

const Controls = () => {

    const {
        buttons,
        buttons2
    } = ControlData;

    return (
        <Wrapper>
            <Group>
                {buttons.map((button) => {
                    return (
                        <MainButton
                            text={button.name}
                            color='rgb(157, 170, 191)' />
                    )
                })}
                <MainButton text={0}
                    color='rgb(157, 170, 191)' />
                <MainButton
                    image={heart}
                    text={0}
                    color='rgb(157, 170, 191)' />
            </Group>
            <Group>
                {buttons2.map((button) => {
                    return (
                        <MainButton
                            text={button.name}
                            color='transparent'
                            background='linear-gradient(92deg,#f35626,#feab3a)' />
                    )
                })}
            </Group>
        </Wrapper>
    )
}

export default Controls;