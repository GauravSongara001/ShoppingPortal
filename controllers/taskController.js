const mongoose = require('mongoose');
const Task = require('../models/taskModel');

module.exports = {
    async createTask(req,res) {
        try {
            let data = req.body;
            let error = false;
            let validation = [];
            
            if (!data.title) {
                error = true;
                validation.push("Title is required");
            }
            if (!data.description) {
                error = true;
                validation.push("Description is required");
            }
            if (data.status === "" || data.status == undefined || data.status == null) {
                error = true;
                validation.push("Status is required");
            }
            
            if (error) {
                console.log('validation: ', validation);
                let errMsg = validation.join(", ");
                res.status(400).send({message: errMsg})
                
            } else {
                let createTask = await Task.create(data);
                res.status(200).send({message: "Task Created Successfully", response: createTask});

            }
            
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },

    async getTaskList(req,res) {
        try {
            let getTaskList = await Task.find().lean();
            res.send(getTaskList);
            
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },

    async updateTask(req,res) {
        try {
            let _id = req.params.id;
            let data = req.body;
            let error = false;
            let validation = [];
            
            if (!data.title) {
                error = true;
                validation.push("Title is required");
            }
            if (!data.description) {
                error = true;
                validation.push("Description is required");
            }
            if (data.status === "" || data.status == undefined || data.status == null) {
                error = true;
                validation.push("Status is required");
            }

            if (!error) {
                let updateTask = await Task.findByIdAndUpdate(_id, req.body, {new: true});
    
                if (updateTask) {
                    res.status(200).send({message: "Task Updated Successfully", result: updateTask})
                } else {
                    res.status(400).send({message: "Error while Update task"})
                }
            } else {
                let errMsg = validation.join(", ");
                res.status(400).send({message: errMsg})
            }

            
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },

    async deleteTask(req,res) {
        try {
            let _id = req.params.id;

            let deleteTask = await Task.findByIdAndDelete(_id);
            if (deleteTask) {
                res.status(200).send({message: "Task Deleted Successfully", result: deleteTask})
            } else {
                res.status(400).send({message: "Error while Delete task"})
            }
            
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    },

}