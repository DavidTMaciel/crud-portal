import { GraphQLInt, GraphQLString } from 'graphql'
import { createUserResponseType, deleteUserResponseType, updateUserResponseType } from '../type/user'
import { CreateUserController, DeleteUserController, UpdateUserController } from '../controller/user'
import { CreateUserUseCaseResponse, DeleteUserUseCaseResponse, UpdateUserUseCaseResponse } from '../../domain/usecase/ucio/user'

const createUserMutation = {

        type: createUserResponseType,
        args: {
            name: { type: GraphQLString },
            email: { type: GraphQLString },
            password: { type: GraphQLString }
        },
    
    resolve: async (_: any, args: any,): Promise<CreateUserUseCaseResponse> => {
        return await new CreateUserController().createUser(args)
    }
}

const deleteUserMutation = {

        type: deleteUserResponseType,
        args: {
            ID: { type: GraphQLInt }
        },

    resolve: async (_: any, args: any): Promise<DeleteUserUseCaseResponse> => {
        return await new DeleteUserController().deleteUser(args)
    }
}

const updateUserUseMutation = {

        type: updateUserResponseType,
        args: {
            ID: { type: GraphQLInt },
            name: { type: GraphQLString },
            password: { type: GraphQLString },
            email: { type: GraphQLString }

        },

    resolve: async (_: any, args: any): Promise<UpdateUserUseCaseResponse> => {
        return await new UpdateUserController().updateUser(args)
    }
}

export{
    createUserMutation,
    updateUserUseMutation,
    deleteUserMutation
}