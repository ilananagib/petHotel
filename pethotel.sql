# CREATE TABLE

CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY, 
"first_name" VARCHAR(60),
"last_name" VARCHAR(80)
);

CREATE TABLE "pets" (
"id" SERIAL PRIMARY KEY,
"pet_name" VARCHAR(60),
"pet_color" VARCHAR(60),
"pet_breed" VARCHAR(80),
"owner_id" INTEGER
);

CREATE TABLE "visits" (
"id" SERIAL PRIMARY KEY,
"check_in" DATE,
"check_out" DATE,
"pet_id" INTEGER
);

