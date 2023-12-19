import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "../../../../domain/usecase/ucio/user"
import { ServiceRestRequest } from "./request"


async function createUser(data: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const config = "http://localhost:3030"
    
    return await ServiceRestRequest.request({
        url: `${config}/createUser`,
        data
        
    })
}

async function getUserByID(data: GetUserByIDUseCaseRequest): Promise<GetUserByIDUseCaseResponse> {
    const config = "http://localhost:3030"

    return await ServiceRestRequest.request({
        url: `${config}/getUserByID`,
        data
    })
}

async function updateUser(data: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {

    const config = "http://localhost:3030"

    return await ServiceRestRequest.request({
        url: `${config}/updateUser`,
        data
    })
}

async function deleteUser(data: DeleteUserUseCaseRequest):Promise<DeleteUserUseCaseResponse> {
    const config = "http://localhost:3030"

    return await ServiceRestRequest.request({
        url: `${config}/deleteUser`,
        data
    })
}

export{
    createUser,
    updateUser,
    getUserByID,
    deleteUser
}