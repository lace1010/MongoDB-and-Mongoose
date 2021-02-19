require("dotenv").config();
const mongoose = require("mongoose"); // Need to require mongoose
//** 1) Install and set up mongoose. (connected it to heroku as well.)
mongoose.connect(process.env.MONGO_URI, {
  // The MONGO_URI string is in sample.env. Be sure to change <password> to the user's actual password for mongoose to connect to the database
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const Schema = mongoose.Schema;
// //** 2) Create a model
// // First we need a Schema. These are the building block for Models that define the shape of the documents within collection.
// // link https://mongoosejs.com/docs/guide.html for mongoose help. Includes schemas, models, query helpers and more
// const personSchema = new Schema({
//   name: { type: String, required: true },
//   age: Number,
//   favouriteFoods: [String],
// });

// const Person = mongoose.model("Person", personSchema);

// let newPerson = function (done) {
//   return new Person({
//     name: "Hunter Lacefield",
//     age: 27,
//     favouriteFoods: ["Pizza", "Chicken", "French Fries"],
//   });
//   if (error) return done(error);
//   done(null, result);
// };

let Person;

const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

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
