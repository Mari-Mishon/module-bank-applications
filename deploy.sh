#!/usr/bin/env sh

set -e

npm run build

cd dist

# Github pages hack
cp index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:mari-mishon/module-bank-applications.git master:gh-pages

cd -