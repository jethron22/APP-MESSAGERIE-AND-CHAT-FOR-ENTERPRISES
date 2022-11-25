import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typography, Card, Box } from '@mui/material';

export default function CardUser() {

    const [nom, setNom] = useState("")
    const urlDeBase = 'http://localhost:2707/Users'

    const [users, setAllUsers] = useState("")

    useEffect(() => {

        axios.get(urlDeBase,
            nom,
        ).then((res) => {

            setAllUsers(res.data.users)
        });
    }, [])

    return (
     <Box width=''>

            {users && users.map((user) =>  (
                <Card sx={{
                     
                    width: 100,
                    padding: 10,

                }} key={user._id}>
                    <Typography>
                        {user.nom}{user.postnom}
                    </Typography>

                </Card>
            ))}
        </Box>
    );
}
