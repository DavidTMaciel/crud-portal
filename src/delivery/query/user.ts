import { GraphQLInt, GraphQLString } from 'graphql'
import { getUserByIDResponseType } from '../type/user'
import { GetUserByIDController } from '../controller/user'
import { GetUserByIDUseCaseResponse } from '../../domain/usecase/ucio/user'

const getUserByIDQuery = {

    type: getUserByIDResponseType,
    args: {
        ID: { type: GraphQLInt }
    },

    resolve: async (_: any, args: any): Promise<GetUserByIDUseCaseResponse> => {
        return await new GetUserByIDController().getUserByID(args)
    }
}

export {
    getUserByIDQuery
}