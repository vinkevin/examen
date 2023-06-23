DROP DATABASE if EXISTS tienda;
CREATE DATABASE if not EXISTS tienda;
USE tienda;
CREATE TABLE prendasv(id int AUTO_INCREMENT PRIMARY KEY,precio decimal (5,2)NOT null, cantidad int not null,descripcion varchar(50)NOT null,img varchar(50)NOT null);
INSERT INTO prendasv(precio,cantidad,descripcion,img)VALUES(50,10,"polera blanca","1polera.jpg"),(100,5,"pantalon azul","2pantalon.jpg"),(150,5,"abrigo para el frio","abrigo.jpg"),(50,0,"polera blanca","4polerablanca.png"),(100,5,"chamarra para el frio","5chamarra.jpg"),(200,7,"conjunto deportivo","6conjunto.jpg"),(80,0,"sudadera deportiva","7sudadera.jpg"),(100,5,"saco elegante","8saco.jpg"),(150,5,"saco plomo","9sacoplomo.jpg"),(70,0,"canguro guindo","10canguro.jpg");