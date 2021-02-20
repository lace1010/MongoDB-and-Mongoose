require("dotenv").config();
const mongoose = require("mongoose"); // Need to require mongoose

//** 1) Install and set up mongoose. (connected it to heroku as well.)
mongoose.connect(process.env.MONGO_URI, {
  // The MONGO_URI string is in sample.env. Be sure to change <password> to the user's actual password for mongoose to connect to the database
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Schema = mongoose.Schema;

//** 2) Create a model
// First we need a Schema. These are the building block for Models that define the shape of the documents within collection.
// link https://mongoosejs.com/docs/guide.html for mongoose help. Includes schemas, models, query helpers and more
const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

const Person = mongoose.model("Person", personSchema);

//This creates an instance from the mongoose schema
let bishBoy = new Person({
  name: "Laura Parry",
  age: 25,
  favoriteFoods: ["Pizza", "Tomatoes", "Chocolate"],
});

//** 3) Create and Save a Record of a Model
// Create and save the bishBoy person with a function
const createAndSavePerson = (done) => {
  // This function takes the bishBoy person we created and saves it. Use the error throw to catch errors obviously.
  bishBoy.save((error, data) => {
    if (error) return done(error);
    done(null, data);
  });
};

//** 4) Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
  // Need to use Person as that is the model we want to create our peopoe in
  Person.create(arrayOfPeople, (done) => {
    // Need to add the function that handles error after saving arrayOfPeople (.create() uses .save() for each person in the array)
    if (error) return done(error);
    done(null, data);
  });
};

//** 5)
const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
