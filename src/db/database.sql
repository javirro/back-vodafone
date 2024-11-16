CREATE TABLE devices (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  last_connection INTEGER NOT NULL,
  lon FLOAT NOT NULL,
  lat FLOAT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)


INSERT INTO devices (name, phone, last_connection, lon, lat) VALUES ('test1', '123456789', 1731743064, -3.2, 45);
INSERT INTO devices (name, phone, last_connection, lon, lat) VALUES ('test2', '987654321', 1731742000, -2.9, 45);
INSERT INTO devices (name, phone, last_connection, lon, lat) VALUES ('test3', '123345655', 1731740000, -3.1, 43);
INSERT INTO devices (name, phone, last_connection, lon, lat) VALUES ('test4', '123456888', 1731741000, -2.8, 44);
INSERT INTO devices (name, phone, last_connection, lon, lat) VALUES ('test5', '987651111', 1731722000, -3.4, 44);