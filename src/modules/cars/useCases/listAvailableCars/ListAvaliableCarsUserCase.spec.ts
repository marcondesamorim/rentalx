import { CarsRespositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvaliableCarsUserCase } from "./ListAvaliableCarsUserCase";

let listAvaliableCarsUseCase: ListAvaliableCarsUserCase;
let carsRepositoryInMemory: CarsRespositoryInMemory;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRespositoryInMemory();
        // listAvaliableCarsUseCase = new ListAvaliableCarsUserCase(
        //     carsRepositoryInMemory
        // );
    });
    it("Should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            daily_rate: 110.0,
            license_plate: "DEF-1234",
            fine_amount: 40,
            brand: "Car_brand",
            category_id: "category_id",
        });

        // const cars = await listAvaliableCarsUseCase.execute();

        // expect(cars).toEqual([car]);
    });
});
