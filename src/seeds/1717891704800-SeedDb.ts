import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1717891704800 implements MigrationInterface {
  name = 'SeedDb1717891704800';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "tags" ("name") VALUES ('dragons'), ('coffee'), ('react'), ('angular'), ('vue')`,
    );

    // password is 123
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('testuser', 'testuser@test.com', '$2b$10$Jw3xAGFFHKtMp1U61.qLLOeFiFsWX9Q8i8w2aCfGeGYWMsYuQrALO')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First Article', 'First Article Description', 'First Article Body', 'dragons,coffee', 1)`,
    );
    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second Article', 'Second Article Description', 'Second Article Body', 'dragons,coffee', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
