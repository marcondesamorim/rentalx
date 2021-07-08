import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCategoriesUserCase } from "./ListCategoriesUserCase";

class ListCategoriesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listCategoriesUserCase = container.resolve(
            ListCategoriesUserCase
        );
        const all = await listCategoriesUserCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController };
