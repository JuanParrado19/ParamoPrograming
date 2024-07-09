import React from 'react';
import { Input,Label,Form, FormGroup, FormFeedback, FormText } from 'reactstrap';


const ContactForm = ({ }) => {


    return (

        <Form>
            <FormGroup>
                <Label for="Name">
                    Nombre
                </Label>
                <Input id='Name'/>
                <FormFeedback>
                    You will not be able to see this
                </FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label for="Email">
                    Email
                </Label>
                <Input id='Email' valid />
                
            </FormGroup>
            <FormGroup>
                <Label for="Message">
                    Mensage
                </Label>
                <Input invalid />
                <FormFeedback>
                    Oh noes! that name is already taken
                </FormFeedback>
                <FormText>
                    Example help text that remains unchanged.
                </FormText>
            </FormGroup>
        </Form>
    );

};

export default ContactForm;