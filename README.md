# Letz React

Step 1. New Repo

New Repo git remote add origin

https://github.com/letz0703/javascript.git git push --set-upstream origin master

Step2. Add Url to Package.json
“homepage”:”https://www.especialist.org/repo명”

Step3. Add gh-pages nom package
yarn add gh-pages --save-dev

Step4. Deploy Script & deploy

“scripts”:{
"predeploy": "yarn run build”,
"deploy": "gh-pages -d build”,
…
}
t
yarn global add gh-pages --save-dev

✭ yarn run deploy
