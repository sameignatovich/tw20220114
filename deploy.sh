#!/usr/bin/env sh
set -e
yarn build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:sameignatovich/tw20220114.git master:gh-pages
cd -