import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUserCase } from "./ListCategoriesUserCase";

const categoriesRepository = null;

const listCategoryUserCase = new ListCategoriesUserCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
    listCategoryUserCase
);

export { listCategoriesController };
