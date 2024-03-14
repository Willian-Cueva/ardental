@Echo off
:home
cls
cd C:\server\ardental
@git pull origin main
@npm install
@npm start
goto End