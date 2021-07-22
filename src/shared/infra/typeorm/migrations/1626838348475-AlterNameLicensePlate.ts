import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterNameLicensePlate1626838348475 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn(
            "cars",
            "license_place",
            "license_plate"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameColumn(
            "cars",
            "license_plate",
            "license_place"
        );
    }
}
