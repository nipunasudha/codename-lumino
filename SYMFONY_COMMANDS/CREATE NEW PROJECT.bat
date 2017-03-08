@echo off
ECHO Enter name for the project
set /p projectname=:
cd ..
REM md %projectname%

REM move "SYMFONY COMMANDS" .\%projectname%
composer create-project symfony/framework-standard-edition %projectname% "2.8.*"

pause