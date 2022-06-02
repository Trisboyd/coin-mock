import { useState, useEffect, useRef } from "react";
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
    Button,
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

    // iNPUTS AND VALIDATION_______________________________________________________INPUTS AND VALIDATION
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: ''
    })

    // reset inputs everytime popup is opened
    useEffect(() => {
        resetInputs();
        setIsValid(false);
    }, [props.open]);

    const formRef = useRef();

    // update submit button based on validity of form inputs
    const checkFormValidity = (event) => {
        setIsValid(formRef.current.checkValidity());
    }

    //  Validation messages
    const [errorMessages, setErrorMessages] = useState(
        { email: '', password: '', name: '' }
    );

    const updateErrorMessages = (event) => {
        const { id, validationMessage } = event.target;
        setErrorMessages({
            ...errorMessages,
            [id]: validationMessage
        })
    }

    // change inputs and error messages based on user input
    const handleChange = (event) => {
        const { id, value } = event.target;
        errorMessages[id] && updateErrorMessages(event);
        setInputs({
            ...inputs,
            [id]: value
        });
    };

    // reset inputs
    const resetInputs = () => {
        setInputs({
            email: '',
            password: '',
            name: ''
        })
        setErrorMessages({
            email: '',
            password: '',
            name: ''
        })
    }

    // login/signup function
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formState === 0) {
            props.handleSignin(inputs);
        }
        else
            props.handleSignup(inputs);
    }

    return (
        <Overlay open={props.open}>
            <Section>
                <Exit
                    src={exit}
                    onClick={props.closePopups} />
                <PopupForm
                    ref={formRef}
                    onChange={checkFormValidity}
                    onSubmit={handleSubmit}>
                    <Title>{formTitle[formState]}</Title>
                    <InputContainer>
                        <InputLabel
                            for='email'
                            hasValue={inputs.email}>
                            email
                        </InputLabel>
                        <Input
                            type='email'
                            id='email'
                            onChange={handleChange}
                            value={inputs.email}
                        />
                    </InputContainer>
                    <FormErrorMessage>{errorMessages.email}</FormErrorMessage>
                    <InputContainer>
                        <InputLabel
                            for='password'
                            hasValue={inputs.password}>
                            password
                        </InputLabel>
                        <Input
                            type='password'
                            id='password'
                            onChange={handleChange}
                            value={inputs.password}
                        />
                    </InputContainer>
                    <FormErrorMessage>{errorMessages.password}</FormErrorMessage>
                    <Button
                        isValid={isValid}
                        $active={true}>
                        Submit
                    </Button>
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