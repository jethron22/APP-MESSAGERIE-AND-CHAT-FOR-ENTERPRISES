import React from "react";
import { FaBeer } from 'react-icons/fa';
import axios from "axios";
import { useEffect, useState, } from "react";
import { Card, Typography, Box } from "@mui/material";

export default function UserModal() {
  const [showModal, setShowModal] = React.useState(false);
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
    <>
      <button className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300"

        type="button"
        onClick={() => setShowModal(true)}>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/> </svg>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl"> Selectionner un contacts </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline focus:outline"
                    type="button"
                    onClick={() => setShowModal(false)}>
                  
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> 
                    </svg>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="ralative p-10 flex-auto overflow-y-scroll  ">
                  <p className="my-4 text-slate-500 h-40 w-500 text-lg leading-relaxed over">


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


                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Choisir
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}