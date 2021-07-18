import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

let usersRepositoryInMemory: UserRepositoryInMemory;
let authencateUserUseCase: AuthenticateUserUserCase;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UserRepositoryInMemory();
        authencateUserUseCase = new AuthenticateUserUserCase(
            usersRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    it("Should be able authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            password: "1234",
            name: "User test",
        };

        await createUserUseCase.execute(user);

        const result = await authencateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });

        expect(result).toHaveProperty("token");

        it("Should not be able authenticate a nonexistent user", () => {
            expect(async () => {
                await authencateUserUseCase.execute({
                    email: "false@email.com",
                    password: "1234",
                });
            }).rejects.toBeInstanceOf(AppError);
        });

        it("Should not be able authenticate with correct password", () => {
            expect(async () => {
                const user: ICreateUserDTO = {
                    driver_license: "9999",
                    email: "user@user.com",
                    password: "1234",
                    name: "User test error",
                };

                await createUserUseCase.execute(user);

                await authencateUserUseCase.execute({
                    email: user.email,
                    password: "incorrectPassword",
                });
            }).rejects.toBeInstanceOf(AppError);
        });
    });
});
