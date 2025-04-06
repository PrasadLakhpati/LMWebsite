CREATE TABLE books (
    id NUMBER PRIMARY KEY,
    title VARCHAR2(100) NOT NULL,
    author VARCHAR2(100) NOT NULL,
    category VARCHAR2(50) NOT NULL,
    status VARCHAR2(20) DEFAULT 'Available'
);

CREATE TABLE members (
    id NUMBER PRIMARY KEY,
    name VARCHAR2(100) NOT NULL,
    email VARCHAR2(100) UNIQUE NOT NULL,
    phone VARCHAR2(20) NOT NULL
);

CREATE TABLE transactions (
    id NUMBER PRIMARY KEY,
    book_id NUMBER REFERENCES books(id),
    member_id NUMBER REFERENCES members(id),
    issue_date DATE DEFAULT SYSDATE,
    due_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR2(20) DEFAULT 'Borrowed'
);

CREATE SEQUENCE books_seq START WITH 1;
CREATE SEQUENCE members_seq START WITH 1;
CREATE SEQUENCE transactions_seq START WITH 1;

EXIT; 