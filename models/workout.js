const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: Date.now},
    exercises: Array
},{
    toJSON: {
        virtuals: true
    }
}
);

WorkoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((accumulator, {
        duration
    }) => accumulator + duration, 0)
});

WorkoutSchema.virtual('totalWeight').get(function () {
    return this.exercises.reduce((accumulator, {
        weight
    }) => accumulator + weight, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;