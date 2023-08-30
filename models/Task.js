const Schema = mongoose.Schema;

const TaskSchema = new Schema({
        name: {
            type: String,
            required: [true,"Must provide a name"],
            trim: true,
            maxlength: [20, "Name cannot be more than 20 characters"]
        },
        completed: {
            type: Boolean,
            default: false
        }
});
// Compile model from schema
module.exports = mongoose.model('Task', TaskSchema );