@Echo off
:home
cls
cd C:\server\ardental
git pull origin main
@npm start
goto End