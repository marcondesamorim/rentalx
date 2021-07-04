import { Request, Response } from "express";

import { ListCategoriesUserCase } from "./ListCategoriesUserCase";

class ListCategoriesController {
    constructor(private listCategoryUserCase: ListCategoriesUserCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoryUserCase.execute();

        return response.json(all);
    }
}

export { ListCategoriesController };
