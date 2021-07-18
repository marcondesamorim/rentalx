import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import waggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import "../typerorm";
import "../../container";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(waggerFile));

app.use(router);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.listen(3333, () => console.log("Server is running!"));
