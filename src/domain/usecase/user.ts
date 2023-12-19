import { InternalServerError, PreconditionError, TAG_INTERNAL_SERVER_ERROR } from "../entity/error";
import { CreateUserUseCaseRepositoryInterface, DeleteUserUseCaseRepositoryInterface, GetUserByIDUseCaseRepositoryInterface, UpdateUserUseCaseRepositoryInterface } from "./repository/user";
import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse, DeleteUserUseCaseResponse } from "./ucio/user";


class CreateUserUseCase {

    public repository: CreateUserUseCaseRepositoryInterface

    constructor(repository: CreateUserUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async createUse(req: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
        try {
            const data = await this.repository.createUser(req)
            return data
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new CreateUserUseCaseResponse(null, new PreconditionError(error.message))
        }
    }
}

class GetUserUseCase {
    public repository: GetUserByIDUseCaseRepositoryInterface

    constructor(repository: GetUserByIDUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async getUser(req: GetUserByIDUseCaseRequest): Promise<GetUserByIDUseCaseResponse> {
        try {
            return await this.repository.getUserByID(req)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new GetUserByIDUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class UpdateUserUseCase {
    public repository: UpdateUserUseCaseRepositoryInterface

    constructor(repository: UpdateUserUseCaseRepositoryInterface) {
        this.repository = repository;
    }

    async updateUser(req: UpdateUserUseCaseRequest): Promise<UpdateUserUseCaseResponse> {
        try {
            return await this.repository.updateUser(req)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error.message)
            return new UpdateUserUseCaseResponse(null, new InternalServerError(error.message))
        }
    }
}

class DeleteUserUseCase {
    public repository: DeleteUserUseCaseRepositoryInterface

    constructor(repository: DeleteUserUseCaseRepositoryInterface) {
        this.repository = repository
    }

    async deleteUser(req: DeleteUserUseCaseRequest): Promise<DeleteUserUseCaseResponse> {
        try {
            await this.repository.deleteUser(req)
            return new DeleteUserUseCaseResponse(null)
        } catch (error: any) {
            console.log(TAG_INTERNAL_SERVER_ERROR, error)
            return new DeleteUserUseCaseResponse(new InternalServerError(error.message))
        }
    }
}

export{
    CreateUserUseCase,
    GetUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase
}