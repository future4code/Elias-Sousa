import { connection } from "../data/connection"
import express, { Request, Response } from "express";


//meu arquivo

export const getParticipation = ( async (req:Request,res:Response) => {
    try{

        const result = await connection.raw(`SELECT *  FROM Dados`) 
        
        
    res.send(result[0])

    }catch(error){
        console.log(error)
        res.status(500).send("Error")
    }
})