import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";

const specificationRepository = new SpecificationRepository();

const createSpecificationUserCase = new CreateSpecificationUserCase(
    specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpecificationUserCase
);

export { createSpecificationController };
