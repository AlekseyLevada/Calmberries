#!/usr/bin/env sh

set -e 

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy_app_pages'

git push -f git@github.com:AlekseyLevada/Calmberries.git master:gh-pages

cd -