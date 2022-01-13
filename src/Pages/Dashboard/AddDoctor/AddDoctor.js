import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material'

const AddDoctor = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://doctor-portal-server-withextra.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('doctor added successfully')

                }
            })
            .catch(error => {
                console.error('Error:', error);
                setSuccess('')
            });
    }

    return (
        <div>
            <h3>Add A Doctor</h3>
            <form onSubmit={handleSubmit}>

                <TextField
                    required
                    sx={{ width: '51%' }}
                    label="Name"
                    name='name'
                    onChange={e => setName(e.target.value)}
                    variant="standard" />

                <TextField
                    required
                    sx={{ width: '51%' }}
                    label="Email"
                    name='email'
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    variant="standard" />
                <br />

                <Input
                    accept="image/*"
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />

                <Button variant="contained" type='submit'>
                    ADD Doctor
                </Button>


            </form>
            {
                success &&
                <p>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;