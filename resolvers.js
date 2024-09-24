const { Student } = require("./models/Student.js");

const resolvers = {
    Query: {
        greetings: () => "Greetings message",
        welcome: (parent, args) => `Hello ${args.name}`,
        students: async () => await Student.find({}), // find return all records
        student: async (parent, args) => await Student.findById(args.id) // find by id
    },
    Mutation: {
        create: async (parent, args) => {
            const { firstname, lastname, age } = args;
            const newStudent = new Student({
                firstname,
                lastname,
                age
            });
            await newStudent.save(); // add student
            return newStudent;
        }
    }
}

module.exports = { resolvers };