# CRUD Test

CRUD Test is a small application to study Angular, PHP and MySQL interaction

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
- PHP confined to database operations
- Small and simple initial test database
- PDO invocations with literal preparations used throughout
- Developed with WAMP 2.5:
    - Apache 2.4.9
    - MySQL Server 5.6.17
    - PHP 5.5.12
- Should be portable to other platforms and PDO-supported database servers

## To see it in action..
- Install WAMP/LAMP/MAMP stack
- Internet access needed for framework and content delivery
- Unpack this project in a preferred folder
- You may want to create a symlink to your preferred folder in Apache's docroot folder
- Prepare the database:
    - Restore database backup file "crudTest/notes/dump_of_crudtest_database.sql"
    - Create user crud_user
    - Extend crudtest_db schema rights SELECT, INSERT, UPDATE, DELETE, and EXECUTE to crud_user

