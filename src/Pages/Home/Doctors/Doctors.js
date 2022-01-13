import React from 'react'
import { useState, useEffect } from 'react'
import { Grid, Container } from '@mui/material';
import Doctor from '../Doctor/Doctor';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
   

    useEffect(() => {
        fetch('https://doctor-portal-server-withextra.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data));

    }, [])
    return (
        <div>
            <h2>Our Doctors:{doctors.length}</h2>
            <Container>


                <Grid container spacing={2}>
                    {doctors.map(doctor =>
                        <Grid item xs={12} sm={6} md={4} key={doctor._id}>
                            <Doctor doctor={doctor} />
                        </Grid>

                    )}


                </Grid>
            </Container>
        </div>
    )
}
