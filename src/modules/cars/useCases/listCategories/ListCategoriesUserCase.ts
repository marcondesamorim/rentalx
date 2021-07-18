import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUserCase {
    constructor(
        @inject(CategoriesRepository)
        private categoriesRepository: ICategoriesRepository
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoriesUserCase };
