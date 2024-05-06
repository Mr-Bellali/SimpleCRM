-- CreateTable
CREATE TABLE `Boncommandes` (
    `ID_boncommande` INTEGER NOT NULL AUTO_INCREMENT,
    `ID_client` INTEGER NOT NULL,
    `ID_element_facture` INTEGER NOT NULL,
    `date_boncommande` DATETIME(3) NULL,

    INDEX `ID_client`(`ID_client`),
    INDEX `ID_element_facture`(`ID_element_facture`),
    PRIMARY KEY (`ID_boncommande`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
