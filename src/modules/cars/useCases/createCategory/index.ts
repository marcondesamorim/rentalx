import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getIntance();

const createCategoryUserCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
    createCategoryUserCase
);

export { createCategoryController };
