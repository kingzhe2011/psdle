::I use PortableGit\bin in PATH
git init
::Switch to gh-pages, pull from master, commit, then switch back to master.
git checkout gh-pages && git checkout master psdle*.js && git commit -a -m "Sync with master." && git push && git checkout master