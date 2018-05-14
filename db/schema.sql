CREATE DATABASE burgers_db;
Use burgers_db;
CREATE TABLE burgers (
 id int AUTO_INCREMENT,
 burger_name varchar(100) NOT NULL,
 devoured boolean,
 PRIMARY KEY(id)
);
select * from Authors;