## Synopsis

Neighborhood Web Site

This project demonstrates an Angular-powered website using back-end 
  interaction with MySQL scripted in PHP.

## Features
- Feature article with image fader
- Additional main-page articles with images
- Links to on-site or YouTube videos
- Provision for advertising content
- Flattering display of neighborhood association board members
- List of useful neighborhood phone numbers
- List of linked archival newsletters
- Panel-based styling features color cycling
- Responsive design for large, medium and small media
- Article images can be optionally hidden on small media
- Top-bar adapts to small media
- Feature content can only be updated
- Other content can be added and deleted
- Zurb Foundation 5.5.2 styling framework
- Angular 1.4.8 client-side MVC
- Slick Carousel 1.5.8 for image fading
- Additional public frameworks used to facilitate Slick and YouTube under Angular
- Developed with WAMP 2.5:
    - Apache 2.4.9
    - MySQL Server 5.6.17
    - PHP 5.5.12
- PHP confined to database scripting
- Small and simple initial test database
- PDO invocations with literal preparations throughout

## Preconditions for demonstration
- Installed WAMP/LAMP/MAMP stack
- Internet access for framework and content delivery
- Prepared database:
    - Restore database backup file "nws/project_notes/NWS_database_export.sql"
    - Create user nws_user
    - Extend nws_db schema rights SELECT, INSERT, UPDATE, DELETE, and EXECUTE to nws_user

## Extra
Check out NWS/crudTest for a simple MySQL-backed web application in Angular and PHP.
