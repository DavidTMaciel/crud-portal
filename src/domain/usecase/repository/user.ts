import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "../ucio/user";

interface CreateUserUseCaseRepositoryInterface{
    createUser(req: CreateUserUseCaseRequest):Promise<CreateUserUseCaseResponse>
}

interface GetUserByIDUseCaseRepositoryInterface{
    getUserByID(req: GetUserByIDUseCaseRequest): Promise<GetUserByIDUseCaseResponse>
}

interface DeleteUserUseCaseRepositoryInterface{
    deleteUser(req:DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse>
}

interface UpdateUserUseCaseRepositoryInterface{
    updateUser(req: UpdateUserUseCaseRequest):Promise<UpdateUserUseCaseResponse>
}

export{
    CreateUserUseCaseRepositoryInterface,
    GetUserByIDUseCaseRepositoryInterface,
    DeleteUserUseCaseRepositoryInterface,
    UpdateUserUseCaseRepositoryInterface
}

