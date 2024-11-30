CREATE DATABASE mi_base;

USE mi_base;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    edad INT,
    ciudad VARCHAR(100)
);
