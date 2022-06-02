import {
    Overlay,
    Section,
    Exit,
} from "../graphs/styledGraphs"

import {
    PopupForm,
    FormTitle,
    FormLabel,
    FormInput,
    FormErrorMessage,
} from './styledAuthPopup';
import exit from '../../images/exit.svg';

const AuthPopup = (props) => {


    return (
        <Overlay open={props.open}>
            <Section>
                <Exit
                    src={exit}
                    onClick={props.closePopups} />
                <PopupForm>
                    <FormTitle>
                        {/* {formTitle[formState]} */}
                    </FormTitle>
                    <FormLabel>Email</FormLabel>
                    <FormInput
                        type='email'
                        id='email'
                        name='email'>
                    </FormInput>
                    {/* <FormErrorMessage>{errorMessages.email}</FormErrorMessage> */}
                    <FormLabel>Password</FormLabel>
                    <FormInput
                        type='password'
                        min='2'
                        max='40'
                        id='password'
                        name='password'
                    // value={inputs.password}
                    // placeholder='Enter password'
                    // required
                    // onChange={handleChange}
                    // onBlur={updateErrorMessages}
                    >
                    </FormInput>
                    {/* <FormErrorMessage>{errorMessages.password}</FormErrorMessage>
                {formState === 1 &&
                    <>
                        <FormLabel>Username</FormLabel>
                        <FormInput
                            type='text'
                            min='2'
                            max='40'
                            id='name'
                            name='name'
                            value={inputs.name}
                            placeholder='Enter your username'
                            required
                            onChange={handleChange}
                            onBlur={updateErrorMessages}>
                        </FormInput>
                        <FormErrorMessage>{errorMessages.name}</FormErrorMessage>
                    </>}
                <FormErrorMessage>{props.emailMessage}</FormErrorMessage> */}
                    <button
                        type='submit'
                    >Submit
                    </button>
                    {/* <FormSwitch>or
                    <FormSwitchSpan
                        onClick={swapFormTitle}>
                        {otherTitle()}
                    </FormSwitchSpan>
                </FormSwitch> */}
                </PopupForm>
            </Section>
        </Overlay>
    )
}

export default AuthPopup;