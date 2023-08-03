const ToDoModel = require("../models/ToDoModel");
const service = require("../models/EditService");
const Notification =require("../models/Notification");
const { application } = require("express");

module.exports.getAllservice = async (req, res) => {
  const data = await service.find();
  res.send(data);
};

module.exports.getToDo = async (req, res) => {  
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.getNotification = async (req, res) => {  
  const data = await Notification.find();
  res.send(data);
};

module.exports.saveToDo = (req, res) => {
  const { name, email, number, subject, message } = req.body;

  ToDoModel.create({ name,
    email,
    number,
    subject,
    message, })
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};


module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};


module.exports.addService = (req, res) => {
  const { title, description, image } = req.body;

  service.create({ title,description,image})
    .then((data) => {
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateService = async(req, res) => {
  const { id } = req.params;

  const updateservice = await service.findByIdAndUpdate(id, req.body,{
    new:true,
  })
    res.json(updateservice)
};

module.exports.getAservice = (req, res) => {
  const { id } = req.params;

  service
    .findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: 'Service not found' });
      }
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Internal Server Error');
    });
};
