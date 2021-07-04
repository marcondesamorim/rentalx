import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { speficationRoutes } from "./spefications.route";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", speficationRoutes);

export { router };
