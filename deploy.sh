## To upload new version
git status 
git add .
git status 
git commit -m "Applied some changes"

## Upload to github first
git push origin main

## Upload to production when ready
git push heroku main

## sh deploy.sh