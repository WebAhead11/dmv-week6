BEGIN;

DROP TABLE IF EXISTS users, vehicles , brands , models, colors CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  owner_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  gov_id VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  mobile VARCHAR(255),
  address varchar(255)
);

CREATE TABLE colors(
id SERIAL PRIMARY KEY,
color VARCHAR(255) NOT NULL
);

CREATE TABLE brands(
id SERIAL PRIMARY KEY,
brand_name VARCHAR(255) NOT NULL
);

CREATE TABLE models(
    id SERIAL PRIMARY KEY,
    id_brand INTEGER REFERENCES brands(id),
    model_name VARCHAR(255) NOT NULL
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  car_number VARCHAR(255) NOT NULL,
  car_model INTEGER REFERENCES models(id),
  car_year INTEGER NOT NULL,
  car_color INTEGER REFERENCES colors(id),
  car_hand INTEGER,
  car_cc INTEGER,
  car_hp INTEGER
);

INSERT INTO colors (color) VALUES
('white'),
('black'),
('blue'),
('yellow'),
('green'),
('pink'),
('red'),
('silver'),
('purple'),
('gray'),
('champain')
;

INSERT INTO brands (brand_name) VALUES
('BMW'),
('AUDI'),
('SEAT'),
('SKODA'),
('SUBARU'),
('HONDA'),
('NISSAN'),
('VOLVO'),
('MITSUBISHI'),
('DODGE'),
('FORD'),
('BUICK'),
('TOYOTA'),
('KIA')
;

INSERT INTO models (id_brand,model_name) VALUES
(1,'520'),
(1,'320'),
(1,'118'),
(1,'720'),
(1,'235'),
(2,'A1'),
(2,'A3'),
(2,'A5'),
(2,'A7'),
(2,'Q2'),
(2,'Q3'),
(2,'Q5'),
(2,'Q7'),
(2,'ETRON'),
(3,'LEON'),
(3,'IBIZA'),
(3,'ARONA'),
(3,'ATECA'),
(4,'OCTAVIA'),
(4,'RAPID'),
(4,'KAMIQ'),
(4,'KODIAQ'),
(4,'SUPERB'),
(5,'FORSTER'),
(5,'XV'),
(5,'OUTBACK'),
(5,'BRZ'),
(6,'CIVIC 4D'),
(6,'CIVIC 5D'),
(6,'CIVIC TYPE-R'),
(6,'CRV'),
(6,'HRV'),
(6,'JAZZ'),
(7,'X-TRAIL'),
(7,'QASHQAI'),
(7,'JUKE'),
(7,'MICRA'),
(8,'V40'),
(8,'XC60'),
(8,'XC90'),
(8,'V60'),
(8,'S90'),
(9,'OUTLANDER'),
(9,'ECLIPSE'),
(9,'ASX'),
(9,'SPACE STAR'),
(10,'RAM'),
(11,'EDGE'),
(11,'FOCUS'),
(11,'KUGA'),
(11,'PUMA'),
(12,'LA CROSS'),
(13,'COROLLA'),
(13,'GT86'),
(13,'LAND CRUISER'),
(13,'RAV4'),
(13,'HI LANDER'),
(14,'PICANTO'),
(14,'SPORTAGE'),
(14,'SORENTO'),
(14,'OPTIMA')
;
COMMIT;
