-- AlterTable
ALTER TABLE `clients` ADD COLUMN `ID_entreprise` INTEGER NULL;

-- CreateIndex
CREATE INDEX `ID_entreprise` ON `clients`(`ID_entreprise`);
