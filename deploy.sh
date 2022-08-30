## To upload new version
git status 
git add .
git status 
git commit -m "Applied some changes"

## Upload to github first
git push origin main

## Upload to production when ready
git push heroku main

## after making changes run - sh deploy.sh

## add commit messages here, bc this wont add any messages.