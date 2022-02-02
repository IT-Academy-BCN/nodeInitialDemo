DROP DATABASE IF EXISTS `Task provider`;
CREATE DATABASE `Task provider` CHARACTER SET utf8mb4;
USE `Task provider`;

-- -----------------------------------------------------
-- Table `mydb`.`Task`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Task provider`.`Task` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(45) NULL,
  `comments` VARCHAR(45) NULL,
  `isCompleted` BOOLEAN NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `completeddAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;