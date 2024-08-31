git init
git add README.md
git commit -m "initial commit: add readme.md"
git config --global user.name "Yelanskyi Serhii"
git config --global user.email yolanskyi@gmail.com
git commit --amend --reset-author
git branch -M master
git remote -v
git remote add origin git@github.com:yelanskyi/DevOpsCurse.git
git remote -v
git push -u origin master
git log