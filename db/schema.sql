### Schema

CREATE DATABASE cars_db;
USE cars_db;

CREATE TABLE rental
(
	id int NOT NULL AUTO_INCREMENT,
	model varchar(255) NOT NULL,
	rented BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
