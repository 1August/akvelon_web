import {Form} from "react-bootstrap"

export const SignUpPageFormGroups = ({userData, setUserData}) => {
    const handleFormChange = e => setUserData({...userData, [e.target.name]: e.target.value})

    const formGroups = [
        {
            className: 'mb-3',
            controlId: 'formBasicEmail',
            label: {
                content: 'First name'
            },
            control: {
                name: 'first_name',
                type: 'text',
                placeholder: 'Enter first name',
                onChange: handleFormChange,
                value: userData.first_name,
                required: true
            }
        },
        {
            className: 'mb-3',
            controlId: 'formBasicEmail',
            label: {
                content: 'Last name'
            },
            control: {
                name: 'last_name',
                type: 'text',
                placeholder: 'Enter last name',
                onChange: handleFormChange,
                value: userData.last_name,
                required: true
            }
        },
        {
            className: 'mb-3',
            controlId: 'formBasicEmail',
            label: {
                content: 'Email address'
            },
            control: {
                name: 'email',
                type: "email",
                placeholder: "Enter email (ex: byron.fields@reqres.in)",
                onChange: handleFormChange,
                value: userData.email,
                required: true
            }
        },
        {
            className: 'mb-3',
            controlId: 'formBasicEmail',
            label: {
                content: 'Password'
            },
            control: {
                name: 'password',
                type: "password",
                placeholder: "Password (tip: any)",
                onChange: handleFormChange,
                value: userData.password,
                required: true
            }
        }
    ]

    return(
        <>
            {
                formGroups.length > 0 && formGroups.map((el, i) => {
                    const {label, control} = el
                    const {content} = label
                    return(
                        <Form.Group className="mb-3" controlId="formBasicEmail" key={control.type + `${i}`}>
                            <Form.Label>{ content }</Form.Label>
                            <Form.Control { ...control }/>
                        </Form.Group>
                    )
                })
            }
        </>
    )
}