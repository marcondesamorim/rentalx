import { CarsRespositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { AppError } from "@shared/errors/AppError";

// import "reflect-metadata";
import { CreateCarUserCase } from "./CreateCarUserCase";

let createCarUserCase: CreateCarUserCase;
let carRespositoryInMemory: CarsRespositoryInMemory;

describe("Create Car", () => {
    beforeEach(() => {
        carRespositoryInMemory = new CarsRespositoryInMemory();
        createCarUserCase = new CreateCarUserCase(carRespositoryInMemory);
    });

    it("Should be able to create a new car", async () => {
        const car = await createCarUserCase.execute({
            name: "Name car",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        expect(car).toHaveProperty("id");
    });

    it("Should be able to create a car with exists license plate", () => {
        expect(async () => {
            await createCarUserCase.execute({
                name: "Car1",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });

            await createCarUserCase.execute({
                name: "Car2",
                description: "Description car",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Brand",
                category_id: "category",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should be able to create a car with available true by default", async () => {
        const car = await createCarUserCase.execute({
            name: "Car available",
            description: "Description car",
            daily_rate: 100,
            license_plate: "ABCD-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        console.log(car);
        expect(car.available).toBe(true);
    });
});
