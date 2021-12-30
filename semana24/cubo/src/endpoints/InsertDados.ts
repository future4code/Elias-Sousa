import { connection } from "../data/connection"
import express, { Request, Response } from "express";


export const addParticipation = ( async (req:Request,res:Response) => {
    try{

    await connection.raw(`INSERT INTO Dados(firstname,lastname,participation)

    VALUES ("${req.body.firstname}",
        "${req.body.lastname}",
        "${req.body.participation}"
        )
    `)
    res.send("Acionista adicionado!")

    }catch(error){
        console.log(error)
        res.status(500).send("Error")
    }
})