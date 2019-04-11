CREATE TABLE "building" (
	"id" serial NOT NULL,
	CONSTRAINT building_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "room" (
	"id" serial NOT NULL,
	"building_id" integer NOT NULL,
	CONSTRAINT room_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "sensor" (
	"id" serial NOT NULL,
	"room_id" integer NOT NULL,
	"time" integer,
	"numbe_of_people" integer,
	CONSTRAINT sensor_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "zone" (
	"id" serial NOT NULL,
	CONSTRAINT zone_pk PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "room_zone" (
	"room_id" integer,
	"zone_id" integer
) WITH (
  OIDS=FALSE
);

ALTER TABLE "room" ADD CONSTRAINT "room_fk0" FOREIGN KEY ("building_id") REFERENCES "building"("id");

ALTER TABLE "sensor" ADD CONSTRAINT "sensor_fk0" FOREIGN KEY ("room_id") REFERENCES "room"("id");

ALTER TABLE "room_zone" ADD CONSTRAINT "room_zone_fk0" FOREIGN KEY ("room_id") REFERENCES "room"("id");
ALTER TABLE "room_zone" ADD CONSTRAINT "room_zone_fk1" FOREIGN KEY ("zone_id") REFERENCES "zone"("id");

