DROP DATABASE IF EXISTS devteam_todoapp;
CREATE DATABASE devteam_todoapp CHARACTER SET utf8mb4;
USE devteam_todoapp;

CREATE TABLE user
(
    id   INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE task
(
    id          INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT                                  NOT NULL, # Compte: 'text' és reserved word
    state       ENUM ('pending', 'open', 'finalized') NOT NULL,
    start_time  TIMESTAMP,                                      # 'start' és reserved word
    end_time    TIMESTAMP,                                      # 'end' és reserved word
    author_id   INT                                   NOT NULL,
    CONSTRAINT fk_task_user FOREIGN KEY (author_id) REFERENCES user (id)
);
