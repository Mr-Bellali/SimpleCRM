-- AlterTable
ALTER TABLE `factures` ADD COLUMN `ID_client` INTEGER NULL;

-- CreateTable
CREATE TABLE `ElementInBoncommande` (
    `ID_element_in_boncommande` INTEGER NOT NULL AUTO_INCREMENT,
    `boncommandeID` INTEGER NOT NULL,
    `produitID` INTEGER NOT NULL,
    `quantite` INTEGER NOT NULL,

    INDEX `boncommandeID`(`boncommandeID`),
    INDEX `produitID`(`produitID`),
    PRIMARY KEY (`ID_element_in_boncommande`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `ID_client` ON `factures`(`ID_client`);

-- AddForeignKey
ALTER TABLE `elements_facture` ADD CONSTRAINT `elements_facture_ID_facture_fkey` FOREIGN KEY (`ID_facture`) REFERENCES `factures`(`ID_facture`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ElementInBoncommande` ADD CONSTRAINT `ElementInBoncommande_boncommandeID_fkey` FOREIGN KEY (`boncommandeID`) REFERENCES `Boncommandes`(`ID_boncommande`) ON DELETE RESTRICT ON UPDATE CASCADE;
