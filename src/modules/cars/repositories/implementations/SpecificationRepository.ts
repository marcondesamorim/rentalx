import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specification: Specification[];

    constructor() {
        this.specification = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            create_at: new Date(),
        });

        this.specification.push(specification);
    }

    findByName(name: string): Specification {
        const specitication = this.specification.find(
            (specification) => specification.name === name
        );
        return specitication;
    }
}

export { SpecificationRepository };
