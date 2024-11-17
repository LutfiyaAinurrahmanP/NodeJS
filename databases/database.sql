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

CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT customers_email_unique UNIQUE (email),
    CONSTRAINT customers_phone_unique UNIQUE (phone)
) ENGINE InnoDB;

CREATE Table products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

INSERT INTO
    products (
        id,
        name,
        price,
        stock,
        category
    )
VALUES ('P001', 'A', 1000, 100, 'K1'),
    ('P002', 'B', 2000, 200, 'K1'),
    ('P003', 'C', 3000, 300, 'K1'),
    ('P004', 'D', 4000, 400, 'K2'),
    ('P005', 'E', 5000, 500, 'K2');

CREATE TABLE categories (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE InnoDB;

INSERT INTO
    categories (name)
VALUES ('Technology'),
    ('Fashion'),
    ('Food & Beverages'),
    ('Health & Wellness'),
    ('Travel'),
    ('Education'),
    ('Sports'),
    ('Entertainment');

CREATE TABLE wallet (
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    CONSTRAINT wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    CONSTRAINT wallet_customer_id_unique UNIQUE (customer_id)
) ENGINE InnoDB;

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    CONSTRAINT comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) ENGINE InnoDB;

INSERT INTO comments(customer_id, title, description) VALUES
('CUST001', 'Comment 1', 'Sample comment 1'),
('CUST002', 'Comment 2', 'Sample comment 2'),
('CUST003', 'Comment 3', 'Sample comment 3'),
('CUST004', 'Comment 4', 'Sample comment 4');