import React, { useState } from 'react'
import {db} from '../../firebase'
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-hot-toast';
import ContactInput from './ContactInput';

const ContactForm = () => {

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const inputHandler = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const {name, email, message} = input;
            await addDoc(collection(db, "contacts"), {name, email, message});
            toast.success("Message Sent Successfully");
            setInput({
                name: '',
                email: '',
                message: ''
            })
        } catch (error) {
            console.log(error);
            toast.error("Error");
        }
    }

    // All Input Fields
    const inputs = [
        {
            id: 1,
            type: 'text',
            name: 'name',
            placeholder: "Name",
        },
        {
            id: 2,
            type: 'email',
            name: 'email',
            placeholder: "Email",
        },
        {
            id: 3,
            type: 'text',
            name: 'message',
            placeholder: "Message",
        }
    ]

    return (
        <div className='contact_wrap'>
            <form className='contact_form' onSubmit={submitHandler}>
                <h4>Send a Message</h4>
                {
                    inputs.map((i) => {
                        return <ContactInput key={i.id} {...i} inputHandler={inputHandler} value={input[i.name]}/>
                    })
                }
                <button id='contact_button' type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm