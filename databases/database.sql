CREATE TABLE sample (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) Engine InnoDB;

INSERT INTO
    sample (id, name)
VALUES ('1', 'Alice Johnson'),
    ('2', 'Bob Smith'),
    ('3', 'Charlie Davis'),
    ('4', 'Diana Evans'),
    ('5', 'Evan Thompson'),
    ('6', 'Fiona White'),
    ('7', 'George Brown'),
    ('8', 'Hannah Lee'),
    ('9', 'Ivan Scott'),
    ('10', 'Julia Baker');

CREATE TABLE customers(
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) ENGINE InnoDB;