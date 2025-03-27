const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

// Crear tarea
router.post('/create', async (req, res) => {
    try {
      const { title } = req.body;
      const newTask = new Task({ title });
      await newTask.save();
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: 'Error creando la tarea' });
    }
  });

//Obtener todas las tareas

router.get("/", async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener las tareas" });
    }
});

// Actualizar el título de una tarea
router.put('/id/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        const { title } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(_id, { title }, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: 'Error actualizando la tarea' });
    }
  });

// Eliminar una tarea
router.delete('/id/:_id', async (req, res) => {
    try {
      const { _id } = req.params;
      await Task.findByIdAndDelete(_id);
      res.json({ message: 'Tarea eliminada' });
    } catch (err) {
      res.status(500).json({ error: 'Error eliminando la tarea' });
    }
    });

module.exports = router;