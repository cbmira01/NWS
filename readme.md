
# Neighborhood Web Site

This project demonstrates an Angular-powered website using back-end
  interaction with MySQL scripted in PHP

## Features
- Born responsive to media size
- Panel-based styling with color cycling
- Top-bar reacts to small media
- Feature article with image fader
- Additional main-page articles with images
- Article images can be optionally hidden on small media
- Links to on-site or YouTube videos
- Provision for advertising content
- Flattering display of neighborhood association board members
- List of useful neighborhood phone numbers
- List of linked archival newsletters
- Feature content can be updated
- Other content can be added and deleted

## Points of interest
- Small and simple initial test database
- PHP confined to database scripting
- PDO invocations with literal preparations throughout
- Packaged as a Netbeans project

## Frameworks and resources
- Zurb Foundation 5.5.2
- Angular 1.4.8
- Slick Carousel 1.5.8
- Angular helpers for Slick and YouTube
- Developed with WAMP 2.5

## To see it in action..
- Install WAMP/LAMP/MAMP stack
- Internet access needed for content delivery
- Clone this project into a preferred folder
- You may need to create an NWS symlink in Apache's docroot folder
- Prepare the database:
    - Restore database backup file "nws/project_notes/NWS_database_export.sql"
    - Create user nws_user
    - Extend nws_db schema rights SELECT, INSERT, UPDATE, DELETE, and EXECUTE to nws_user
- Browse to "localhost/nws"
- Disable ad blocking for localhost

## Extra
Check out NWS/crudTest for a simple MySQL-backed web application in Angular and PHP
