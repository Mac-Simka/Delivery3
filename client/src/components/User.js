import React,{useState} from 'react';
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {Button, Card} from "react-bootstrap";
import {Form} from "react-bootstrap";
import SubmitOrder from "./SubmitOrder";

const User = observer(() => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    return (
        <Container  style={{cursor:'default'}} className='d-flex justify-content-center align-items-center'>
            <Card style={{width:600}}>
                <h3 className='m-auto mb-5 mt-2'>Input your data</h3>
                <Form className='d-flex flex-column m-lg-2'>
                    <h4>Name:</h4>
                    <Form.Control
                        id = 'name'
                        placeholder="Enter your Name..."
                        inputMode="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <h4 className='mt-3'>Mail:</h4>
                    <Form.Control
                        id = 'email'
                        placeholder="Enter your E-Mail..."
                        inputMode='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h4 className='mt-3'>Phone number:</h4>
                    <Form.Control
                        id = 'phone'
                        placeholder="Enter your Phone Number..."
                        inputMode='tel'
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <h4 className='mt-3'>Address:</h4>
                    <Form.Control
                        id = 'address'
                        placeholder="Enter your Address..."
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />

                    <Button
                        className='mt-3 align-self-baseline'
                        variant={'outline-warning'}
                        onClick={SubmitOrder(name,email,phone,address)}
                    >
                        Confirm
                    </Button>
                </Form>
            </Card>
        </Container>
    );
});

export default User;