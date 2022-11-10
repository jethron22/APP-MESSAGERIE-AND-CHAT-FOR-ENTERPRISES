import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { FaAccessibleIcon, FaUserCheck } from "react-icons/fa";
import { useState } from 'react';
import './Login.css';

import { Stack } from '@mui/system';
import 'animate.css';

function Login() { 

  const [errorLog, setErrorLog] = useState(false)
  const [signUp, setSignUp] = useState(false)

  return (
    <Stack className="stackBody" spacing={9}>

    <div className='coverDiv'>
      <div className='textConnecterBloc'>
<p className='textConnecter' >{signUp ? <h1 class="animate__animated animate__fadeIn">Inscrivez-vous, Discuttez ensemble...<p className='textSous'> Communiquez au sein de votre entreprise ! 😊 </p></h1> : <h1 class="animate__animated animate__fadeInUp"> Connectez-vous au reste du Monde !    </h1>}</p>

</div> 
      <form>
        <Box
          className="myCover"
          display=" flex "
          flexDirection={"column"}
          maxWidth={350}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginRight={"150px"}
          padding={2}
          borderRadius={2}
          boxShadow={"0px 0px 10px "}
          sx={{
            ":hover ": {
              boxShadow: "0px 0px 20px grey ",
            },
          }}
        >
  

          {signUp && (
            <TextField
              errorLog="false"
              margin="normal"
              type={"text"}
              variant="outlined"
              fullWidth
              size='small'
              placeholder="Définir votre nom"
              ></TextField > 
          )}
          {/* <span {setErrorLog ? "Erreur" : "Valide"}  className='errorTag'></span> */}

          <TextField
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Votre email ou numéro de téléphone"
            fullWidth
            size='small'
          />

          <TextField
            margin="normal"
            type={"password"}
            variant="outlined"
            fullWidth
            size='small'
            placeholder="Votre mot de passe"></TextField>

          <Button
            endIcon={signUp ? <FaUserCheck /> : <MdOutlineLogin />}
            sx={{ marginTop: 3 }}
            variant="contained"
            color="primary"
            fullWidth
          >
            {signUp ? "S'inscrire" : "Connexion"}
                  </Button>

                 
                  
                  <div className="buttonSignUp">
                 
        <Button
       
          endIcon={signUp ? <MdOutlineLogin /> : <FaUserCheck />}
          onClick={() => setSignUp(!signUp)}
          sx={{ marginTop: 3,
            width: 350,
        
         }}
          display="flex"
          variant="outlined"
          color="success"
          size='large'
          
          
        >
          {signUp ? "Connexion" : "Inscription"}
        </Button>
      </div>
                  
        </Box>
      
      </form>
      </div>
     
      </Stack>
    
  );
}

export default Login