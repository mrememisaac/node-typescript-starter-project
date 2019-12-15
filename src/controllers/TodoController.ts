import {Request, Response } from 'express';
import mongoose from 'mongoose';
import Todo from '../models/Todo';
import winston from 'winston';

const errorMessages = { 
    create: "An error occured while creating the todo", 
    update: "An error occured while updating the resource", 
    get: "An error occured while fetching the resource", 
    delete: "An error occured while deleting the resource"
}
const logTypes = { error: "error", info: "info" }

export class TodoController {
    constructor(){}

    public create(req: Request, res: Response){
        
        const required = new Map();
        required.set("title", "Title");
        required.set("dueDate", "Due date");
        let message;

        for(const [key, value] of required.entries()){
            if(!req.body[key]){
                message = `${value} is required`;
                break;
            }
        }
        if(message){
            winston.log(logTypes.error, message, { request: req});
            res.status(400).json({error: message });
            return;
        }
        let newTask = new Todo(req.body);
        newTask.save((err, task) => {
            if(err){
                res.status(500).send(errorMessages.create);
                winston.log(logTypes.error, err, { request: req});
                return;
            }
            res.json(task);
        })
    }

    /**
     * getTodos
     */
    public getTodos(req:Request, res:Response){
        if(req.params.token){

        }
        Todo.find({}, (err, todos) => {
            if(err){
                winston.log(logTypes.error, err, { request: req});
                res.status(500).send(errorMessages.get);
                return;
            }
            res.json(todos);
        })
    }

}