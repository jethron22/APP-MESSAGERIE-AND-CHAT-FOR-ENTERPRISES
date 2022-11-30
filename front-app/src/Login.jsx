import React from 'react'
import { Box, Button, TextField, Typography } from "@mui/material";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { FaAccessibleIcon, FaUserCheck } from "react-icons/fa";
import { useState } from 'react';
import './Login.css';
import { Stack } from '@mui/system';
import 'animate.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"

function Login() {


  const [errorLog, setErrorLog] = useState(false)
  const [signUp, setSignUp] = useState(false)
  const [nom, setNom] = useState(false)
  const [mail, setMail] = useState("")
  const [motdePass, setmotdePass] = useState("")
  const [telephone, setTelephone] = useState("")
  const Navigate = useNavigate()

  const urlDeBase = 'http://localhost:2707/User'
  const urlDeBase2 = 'http://localhost:2707/login'

  const UserData = () => {
    axios.post(urlDeBase, {
      nom,
      telephone,
      motdePass

    })

  }


  // function Redirection() {

  //   const history = useNavigate,
  //     faireRedirection = () => {
  //       let url = "http://localhost:3000/Navigation"
  //       history.push('http://localhost:3000/Navigation')
  //     }

  // }



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

                onChange={(e) => {
                  setNom(e.target.value)
                }}

              ></TextField >
            )}

            <TextField
              margin="normal"
              type={"number"}
              variant="outlined"
              placeholder="Votre numéro de téléphone"
              fullWidth
              size='small'

              onChange={(e) => {
                setTelephone(e.target.value)
              }}


            />

            <TextField
              margin="normal"
              type={"password"}
              variant="outlined"
              fullWidth
              size='small'
              placeholder="Votre mot de passe"

              onChange={(e) => {
                setmotdePass(e.target.value)
              }}

            ></TextField>


            <Button
              endIcon={signUp ? <FaUserCheck /> : <MdOutlineLogin />}


              sx={{ marginTop: 3 }}
              variant="contained"
              color="primary"
              fullWidth
              onClick={async () => {
                if (signUp) {
                  UserData()
                }
                if (!signUp) {
                  const user = await axios.post(urlDeBase2, {
                    telephone,
                    motdePass
                  })
                  if (user) {
                    localStorage.setItem("nom",  user.data.userName) 
                    console.log( user)
                    Navigate("/chat")
                  }
                  else {
                    Navigate("/login")
                  }
                }
              }

              }

            >

              {signUp ? "S'inscrire" : "Connexion"}



            </Button>

            <div className="buttonSignUp">

              <Button

                endIcon={signUp ? <MdOutlineLogin /> : <FaUserCheck />}

                onClick={() => setSignUp(!signUp)}
                sx={{
                  marginTop: 3,
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