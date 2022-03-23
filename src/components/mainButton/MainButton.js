import { Text, Image, Wrapper } from "./styledMainButton";

const MainButton = (props) => {

    return (
        <Wrapper>
            {props.image && <Image src={props.image} />}
            <Text
                color={props.color}
                background={props.background}>
                {props.text}
            </Text>
        </Wrapper>
    )
}

export default MainButton;