
const myApp= require("express")();
const graphQLHTTP= require("express-graphql");

const mySchema = require ("../schema/schema");
const PORT =3000;

myApp.use('/graphql',graphQLHTTP({
    schema: mySchema,
    graphiql : true
}));

myApp.listen(PORT,()=>{
    console.log("Server running on PORT " + PORT);
});