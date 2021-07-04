import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const speficationRoutes = Router();

speficationRoutes.post("/", (request, response) => {
    return createSpecificationController.handle(request, response);
});

export { speficationRoutes };
