import { CreateUserUseCaseRequest, CreateUserUseCaseResponse, DeleteUserUseCaseRequest, DeleteUserUseCaseResponse, GetUserByIDUseCaseRequest, GetUserByIDUseCaseResponse, UpdateUserUseCaseRequest, UpdateUserUseCaseResponse } from "../../domain/usecase/ucio/user";
import { CreateUserUseCase, DeleteUserUseCase, GetUserUseCase, UpdateUserUseCase } from "../../domain/usecase/user";
import { CreateUserUseCaseRepository, DeleteUserUseCaseRepository, GetUserByIDUseCaseRepository, UpdateUserUseCaseRepository } from "../../infrastructure/provider/user";



class CreateUserController{
    async createUser(args:any):Promise<CreateUserUseCaseResponse>{
        const {name, email, password} = args;

        const ucReq = new CreateUserUseCaseRequest(name, email, password)
        const repository = new CreateUserUseCaseRepository()
        const usecase = new CreateUserUseCase(repository)

        return await usecase.createUse(ucReq)
    }
}

class GetUserByIDController{
    async getUserByID(args: any):Promise<GetUserByIDUseCaseResponse>{
        const {ID} = args

        const ucReq = new GetUserByIDUseCaseRequest(ID)
        const repository = new GetUserByIDUseCaseRepository()
        const usecase = new GetUserUseCase(repository)

        return await usecase.getUser(ucReq)
    }
}

class DeleteUserController{
    async deleteUser(args: any):Promise<DeleteUserUseCaseResponse>{
        const {ID} = args

        const ucReq = new DeleteUserUseCaseRequest(ID)
        const repository = new DeleteUserUseCaseRepository()
        const usecase = new DeleteUserUseCase(repository)

        return await usecase.deleteUser(ucReq)
    }
}

class UpdateUserController{
    async updateUser(args: any):Promise<UpdateUserUseCaseResponse>{
        const {ID, name, email, password} = args

        const ucReq = new UpdateUserUseCaseRequest(ID, name, email, password)
        const repository = new UpdateUserUseCaseRepository()
        const usecase = new UpdateUserUseCase(repository)

        return await usecase.updateUser(ucReq) 
    }
}

export{
    CreateUserController,
    UpdateUserController,
    GetUserByIDController,
    DeleteUserController
}