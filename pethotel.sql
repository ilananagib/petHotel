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

SELECT "owner_name" FROM "owners";

SELECT "pets"."owner_id", "owners"."owner_name",
COUNT ("pets"."id") FROM "pets"
JOIN "owners" on "owner_id" = "pets"."owner_id"
GROUP BY "pets"."owner_id", "owners"."owner_name";
