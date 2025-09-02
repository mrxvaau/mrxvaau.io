#!/usr/bin/env bash
set -e

# 1) Build fresh
npm run build

# 2) Replace the Pages repo with the new dist build
cd dist
rm -rf .git
git init
git branch -M main
git remote add origin https://github.com/mrxvaau/mrxvaau.github.io.git
git add .
git commit -m "Deploy $(date -u +'%Y-%m-%d %H:%M:%S')"
git push -u origin main --force
cd -
