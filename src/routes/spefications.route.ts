import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const speficationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

speficationRoutes.post("/", createSpecificationController.handle);

export { speficationRoutes };
