import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUserCase {
    constructor(private speficationRepository: ISpecificationRepository) {}

    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists =
            this.speficationRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Spefication already exists");
        }

        this.speficationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUserCase };
