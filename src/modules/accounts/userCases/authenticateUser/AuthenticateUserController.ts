import { Request, Response } from "express";
import "reflect-metadata";
import { container } from "tsyringe";

import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const authenticateUserUserCase = container.resolve(
            AuthenticateUserUserCase
        );

        const token = await authenticateUserUserCase.execute({
            password,
            email,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };
