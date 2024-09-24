// import gql from 'graphql-tag'; // In ES6
const gql = require('graphql-tag'); // In ES5

const typeDefs = gql`
    type Query {
        greetings: String
        welcome(name: String!): String 
        students: [Student] #return array of students
        student(id: ID): Student #return student by id
    }

    # Student Object
    type Student {
        id: ID
        firstname: String 
        lastname: String 
        age: Int
    }

    # Mutation 
    type Mutation {
      create(firstname: String, lastname: String, age: Int): Student
    }
`;

module.exports = { typeDefs };
