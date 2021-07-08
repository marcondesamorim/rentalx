import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUserCase } from "./ImportCategoryUserCase";

class ImportCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCategoryUserCase = container.resolve(
            ImportCategoryUserCase
        );

        await importCategoryUserCase.execute(file);
        return response.send();
    }
}

export { ImportCategoryController };
