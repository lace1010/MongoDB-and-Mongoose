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
  bishBoy.save((error, person) => {
    if (error) return console.log(error);
    done(null, person);
  });
};

//** 4) Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {
  // Need to use Person as that is the model we want to create our peopoe in
  Person.create(arrayOfPeople, (error, Array) => {
    // Need to add the function that handles error after saving arrayOfPeople (.create() uses .save() for each person in the array)
    if (error) return console.log(error);
    done(null, Array);
  });
};

//** 5) Use model.find() to Search Your Database

const findPeopleByName = (personName, done) => {
  // Need to add the object with just name because in model Person personName will be the value of the name key in a specific object
  Person.find({ name: personName }, (error, person) => {
    if (error) return console.log(error);
    done(null, person);
  });
};

//** 6) Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, foundFood) => {
  // food is a value to an object key so we need to put in an object with the key that accepts food strings into findOne() for the argument
  Person.findOne({ favoriteFoods: food }, (error, data) => {
    if (error) return console.log(error);
    done(null, foundFood);
  });
};

//** 7) Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (error, idOfPerson) => {
    if (error) return console.log(error);
    done(null, idOfPerson);
  });
};

//** 8) Perform Classic Updates by Running Find, Edit, then Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  // First find the person by searching for id.
  Person.findById(personId, (error, person) => {
    if (error) return console.log(error);
    // Then push the foodToAdd variable to the favoriteFoods array
    person.favoriteFoods.push(foodToAdd);

    // Next we must save our changes to the person in the database.
    // When using save we should always have a callback function that handles errors.
    person.save((error, updatedPerson) => {
      if (error) return console.log(error);
      done(null, updatedPerson);
    });
  });
};

//** 9) Perform New Updates on a Document Using model.findOneAndUpdate
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { new: true }, // You should return the updated document. To do that, you need to pass the options document { new: true } as the 3rd argument to findOneAndUpdate(). By default, these methods return the unmodified object.
    (error, foundPerson) => {
      if (error) return console.log(error);
      foundPerson.age = ageToSet;
      done(null, foundPerson);
    }
  );
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
