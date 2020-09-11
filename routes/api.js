const router = require("express").Router();
const db = require("../models");
const { isValidObjectId } = require("mongoose");

router.get('/api/workouts', (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.post('/api/workouts', ({ body }, res) => {
    db.Workout.create(body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.put('/api/workouts/:id', (req, res) => {
    let { id } = req.params;

    db.Workout.update({_id : id}, {$push : {exercises : req.body}})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})

module.exports = router;