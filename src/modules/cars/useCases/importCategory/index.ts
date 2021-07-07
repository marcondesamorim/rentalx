import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUserCase } from "./ImportCategoryUserCase";

const categoriesRepository = null;

const importCategoryUserCase = new ImportCategoryUserCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUserCase
);

export { importCategoryController };
