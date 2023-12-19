import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface, UpdateUserUseCaseRepositoryInterface } from "../../domain/usecase/repository/user";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "../../domain/usecase/ucio/user";
import { createUser, deleteUser, getUserByID, updateUser } from "../internal/api/rest/user";


class CreateUserUseCaseRepository implements CreateUserUseCaseRepositoryInterface {
    async createUser(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        return await createUser(req)
    }
}

class UpdateUserUseCaseRepository implements UpdateUserUseCaseRepositoryInterface{
    async updateUser(req: UpdateUserUseCaseRequest):Promise<UpdateUserUseCaseResponse>{
        return await updateUser(req)
    }
}

class GetUserByIDUseCaseRepository implements GetUserByIDUseCaseRepositoryInterface{
    async getUserByID(req: GetUserByIDUseCaseRequest):Promise<GetUserByIDUseCaseResponse>{
        return await getUserByID(req)
    }
}

class DeleteUserUseCaseRepository implements DeleteUserUseCaseRepositoryInterface{
    async deleteUser(req: DeleteUserUseCaseRequest):Promise<DeleteUserUseCaseResponse>{
        return await deleteUser(req)
    }
}

export{
    CreateUserUseCaseRepository,
    UpdateUserUseCaseRepository,
    GetUserByIDUseCaseRepository,
    DeleteUserUseCaseRepository
}