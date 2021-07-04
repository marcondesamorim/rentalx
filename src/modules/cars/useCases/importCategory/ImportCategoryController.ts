import { Request, Response } from "express";

import { ImportCategoryUserCase } from "./ImportCategoryUserCase";

class ImportCategoryController {
    constructor(private importCategoryUserCase: ImportCategoryUserCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;
        this.importCategoryUserCase.execute(file);
        return response.send();
    }
}

export { ImportCategoryController };
