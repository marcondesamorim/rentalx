import { inject, injectable } from "tsyringe";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUserCase {
    constructor(
        @inject("SpecificationRepository")
        private speficationRepository: ISpecificationRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists =
            await this.speficationRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Spefication already exists");
        }

        await this.speficationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUserCase };
