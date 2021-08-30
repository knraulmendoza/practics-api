import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMigrate1630287394495 implements MigrationInterface {
    name = 'firstMigrate1630287394495'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` ON \`practict_test\`.\`user\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` DROP COLUMN \`user_name\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` ADD \`user_name\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` ADD UNIQUE INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` (\`user_name\`)`);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` ADD \`password\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` DROP COLUMN \`password\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` ADD \`password\` varchar(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` DROP INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` DROP COLUMN \`user_name\``);
        await queryRunner.query(`ALTER TABLE \`practict_test\`.\`user\` ADD \`user_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_d34106f8ec1ebaf66f4f8609dd\` ON \`practict_test\`.\`user\` (\`user_name\`)`);
    }

}
