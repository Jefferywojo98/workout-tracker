const db = require("../models");

module.exports = (app) => {
    // get workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workouts => {
            // return all workouts here 
            res.json(workouts); 
        }).catch(err => {
            res.json(err);
        });
    });

    // add exercise
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate(
            {
                _id: req.params.id
            },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            {
                // to return updated workout 
                new: true      
            }).then(workout => {
                res.json(workout);
            }).catch(err => {
                res.json(err);
            });
    });
    //to create a workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create(req.body).then((workout => {
            res.json(workout);
        })).catch(err => {
            res.json(err);
        });
    });
    // get workouts
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.json(err);
        });
    });

}