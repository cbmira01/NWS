# CRUD Test

A small application to study Angular, PHP and MySQL interaction

This is a "throw-away" project to prepare for a larger web application

## Features
- Complete test of create, read, update and delete operations in an Angular web app
- Totally stripped out, minimal in all ways:
    - no styling frameworks (eg Foundation or Bootstrap)
    - no jQuery
    - no PHP frameworks
    - no additional JavaScript
    - no CSS
- Angular 1.4.8 used for client-side MVC
- Small and simple initial test database
- PHP confined to database operations
- PDO invocations with literal preparations used throughout
- Developed with WAMP 2.5
- Should be portable to other platforms and PDO-supported database servers

## To see it in action..
- Install main NWS app
- Prepare the database:
    - Restore database backup file "crudTest/notes/dump_of_crudtest_database.sql"
    - Create crud_user@localhost, password "password"
    - Extend crudtest_db privileges to crud_user: SELECT, INSERT, UPDATE, DELETE, and EXECUTE
- Browse to "localhost/nws/crudtest"
