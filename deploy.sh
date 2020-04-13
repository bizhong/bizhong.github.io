#!/usr/bin/env sh

# run commands
# chmod 777 deploy.sh (if "Permission denied")
# ./deploy.sh

# abort on errors
set -e

# generate static project
npm run generate --fail-on-error

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m '1.0.0'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:bizhong/bizhong.github.io.git master

cd -
