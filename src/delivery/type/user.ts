import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'
import { errorType } from './error'


const userType = new GraphQLObjectType({
    name:'userType',
    fields:{
        ID:{type: GraphQLInt},
        name:{type: GraphQLString},
        email:{type: GraphQLString},
        password:{type: GraphQLString}
    }
})

const createUserResponseType = new GraphQLObjectType({
    name:'createUserResponseType',
    fields:{
        user: {type: userType},
        error:{type: errorType}
    }
})

const getUserByIDResponseType = new GraphQLObjectType({
    name:'getUserByIDResponseType',
    fields:{
        user: {type:userType},
        error: {type: errorType}
    }
})

const deleteUserResponseType = new GraphQLObjectType({
    name: 'deleteUserResponseType',
    fields:{
        error:{type: errorType}
    }
})

const updateUserResponseType = new GraphQLObjectType({
    name:'updateUserResponseType',
    fields:{
        user:{type: userType},
        error: {type: errorType}
    }
})

export{
    createUserResponseType,
    updateUserResponseType,
    getUserByIDResponseType,
    deleteUserResponseType,
    userType
}