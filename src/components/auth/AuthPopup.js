import { useState } from "react";
import {
    Overlay,
    Section,
    Exit,
} from "../graphs/styledGraphs"

import {
    PopupForm,
    Title,
    FormSwitch,
    FormSwitchSpan,
    FormErrorMessage,
    InputContainer,
    Input,
    InputLabel,
} from './styledAuthPopup';
import exit from '../../images/exit.svg';
import { Sign } from "../header/styledHeader";

const AuthPopup = (props) => {

    // __________________________________________________________________________________________________SIGNIN VS SIGNUP
    //_________form state for determining which form should be shown (sign in or sign up)
    // ____________________________________________________0 = signin, 1 = signup
    const [formState, setFormState] = useState(0);
    const [isValid, setIsValid] = useState('false');

    const formTitle = ['Sign in', 'Sign up'];

    const swapFormTitle = () => {
        if (formState === 0) {
            setFormState(1)
        }
        else setFormState(0);
    }

    const otherTitle = () => {
        return formTitle.filter((title) => title !== formTitle[formState]);
    }

    return (
        <Overlay open={props.open}>
            <Section>
                <Exit
                    src={exit}
                    onClick={props.closePopups} />
                <PopupForm>
                    <Title>Login</Title>
                    <InputContainer>
                        <InputLabel
                            for='email'>
                            email
                        </InputLabel>
                        <Input
                            type='email'
                            id='email'
                        />
                    </InputContainer>
                    {/* <FormErrorMessage>{errorMessages.email}</FormErrorMessage> */}
                    <InputContainer>
                        <InputLabel
                            for='password'>
                            password
                        </InputLabel>
                        <Input
                            type='password'
                            id='password'
                        />
                    </InputContainer>
                    <Sign
                        $active={true}>
                        Submit
                    </Sign>
                    <FormSwitch>or
                        <FormSwitchSpan
                            onClick={swapFormTitle}>
                            {otherTitle()}
                        </FormSwitchSpan>
                    </FormSwitch>
                </PopupForm>
            </Section>
        </Overlay>
    )
}

export default AuthPopup;

{/* <FormInput
type='password'
min='2'
max='40'
id='password'
name='password'
value={inputs.password}
placeholder='Enter password'
required
onChange={handleChange}
onBlur={updateErrorMessages}
>
</FormInput> */}