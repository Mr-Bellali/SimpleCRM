-- CreateTable
CREATE TABLE `clients` (
    `ID_client` INTEGER NOT NULL AUTO_INCREMENT,
    `Prenom` VARCHAR(100) NULL,
    `Nom` VARCHAR(100) NULL,
    `Adresse` TEXT NULL,
    `Ville` VARCHAR(100) NULL,
    `Numero_telephone` VARCHAR(12) NULL,
    `Email` VARCHAR(100) NULL,

    PRIMARY KEY (`ID_client`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `elements_facture` (
    `ID_element_facture` INTEGER NOT NULL AUTO_INCREMENT,
    `Quantite` INTEGER NULL,
    `Prix_unitaire` FLOAT NULL,
    `Prix_total` FLOAT NULL,
    `ID_facture` INTEGER NULL,
    `ID_produit` INTEGER NULL,

    INDEX `ID_facture`(`ID_facture`),
    INDEX `ID_produit`(`ID_produit`),
    PRIMARY KEY (`ID_element_facture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entreprises` (
    `ID_entreprise` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom_entreprise` VARCHAR(100) NOT NULL,
    `Adresse_siege_social` TEXT NOT NULL,
    `Date_creation` DATE NULL,
    `Numero_identification_fiscale` VARCHAR(100) NOT NULL,
    `Capital` FLOAT NULL,
    `Nombre_employes` INTEGER NOT NULL,
    `Ville` VARCHAR(100) NULL,
    `Personne_responsable` VARCHAR(100) NULL,
    `Numero_telephone_entreprise` VARCHAR(12) NULL,
    `Email_entreprise` VARCHAR(100) NULL,

    UNIQUE INDEX `Numero_identification_fiscale`(`Numero_identification_fiscale`),
    PRIMARY KEY (`ID_entreprise`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `factures` (
    `ID_facture` INTEGER NOT NULL AUTO_INCREMENT,
    `Date_facture` DATE NULL,
    `Echeance` INTEGER NULL,
    `Total_HT` FLOAT NULL,
    `TVA` FLOAT NULL,
    `Total_TTC` FLOAT NULL,
    `ID_entreprise` INTEGER NULL,

    INDEX `ID_entreprise`(`ID_entreprise`),
    PRIMARY KEY (`ID_facture`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produits` (
    `ID_produit` INTEGER NOT NULL AUTO_INCREMENT,
    `Nom_produit` VARCHAR(100) NOT NULL,
    `Prix_achat` FLOAT NULL,
    `Prix_vente` FLOAT NULL,
    `Taux_marge` VARCHAR(100) NULL,
    `Dimensions` FLOAT NULL,
    `Taille` VARCHAR(100) NULL,

    PRIMARY KEY (`ID_produit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stock` (
    `Quantity` INTEGER NOT NULL,
    `ID_entreprise` INTEGER NOT NULL,
    `ID_produit` INTEGER NOT NULL,

    INDEX `ID_produit`(`ID_produit`),
    PRIMARY KEY (`ID_entreprise`, `ID_produit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
