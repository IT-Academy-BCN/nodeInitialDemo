DROP DATABASE IF EXISTS `Task provider`;
CREATE DATABASE `Task provider` CHARACTER SET utf8mb4;
USE `Task provider`;

-- -- -----------------------------------------------------
-- -- Table `mydb`.`Task`
-- -- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `Task provider`.`Task` (
--   `id_task` INT NOT NULL AUTO_INCREMENT,
--   `task_name` VARCHAR(45) NOT NULL,
--   `description` VARCHAR(45) NULL,
--   `creation_date` DATETIME NOT NULL,
--   `completion_date` DATETIME NULL,
--   `status` VARCHAR(45) NOT NULL,
--   `comments` VARCHAR(45) NULL,
--   PRIMARY KEY (`id_task`))
-- ENGINE = InnoDB;