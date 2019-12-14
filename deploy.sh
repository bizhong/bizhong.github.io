#!/usr/bin/env sh

# run commands
# chmod 777 deploy.sh (if "Permission denied")
# ./deploy.sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'lanbizhong.com' > CNAME

git init
git add -A
git commit -m '0.1.0'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:bizhong/bizhong.github.io.git master

cd -
