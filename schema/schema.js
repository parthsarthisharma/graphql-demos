const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = require('graphql');


const RootQueryType = new GraphQLObjectType({
    name : "RootQueryType",
    fields :{
        hello : {
            type : GraphQLString,
            resolve :() => 'world'
        }
    }
});

const mySchema = new GraphQLSchema({
    query : RootQueryType
    
    //mutation = RootMutationType
});

module.exports= mySchema;