# CREATE TABLE

CREATE TABLE "owners" (
"id" SERIAL PRIMARY KEY, 
"owner_name" VARCHAR(160)
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

