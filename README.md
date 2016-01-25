# TiddlyWiki to gh-pages
An MVP for uploading TiddlyWikis to gh-pages

# How to use this repository to deploy TiddlyWiki
### Setup
* Fork the repository (button in the upper right side of the repo's GitHub page).
* Clone in desktop (button with a monitor and downward arrow icon above and to the right of the files list, next to `Download ZIP` button).

### Working folder
* Open the `source/` folder. This will be your working folder, where you save all your TiddlyWiki work, including the TiddlyWiki file and any additional files you use.
* Edit the Empty TiddlyWiki in the `source/` folder, or drop in your own existing TiddlyWiki files. You can add as many TiddlyWiki projects as you want - keeping the file names simple will be helpful when you want to open or link them online, though.
* Add any files you want to include to the `files/` folder, including images in the `files/img/` folder.

### Installing dependencies
To install dependencies (needed, pre-build programs to run the custom commands in this repository):

* Open your command line or terminal
* Type `cd /path/to/your/tiddlywikiproject` where `/path/to/your/tiddlywikiproject` is the path to the directory this project is hosted in.
* Type `npm install`, and let npm run the dependency installer
* You can start using the system!

### Tasks: build, clean, and upload
* When you want to upload your TiddlyWiki to gh-pages (GitHub pages, where the TiddlyWiki will be available online), you will be using three tasks: build, clean, and upload.
* To do the following tasks, you will need to open your command line (CMD.exe on Windows and Terminal on Mac are the standard ones, but any local command line application should work), go to your working directory (type `cd /path/to/your/tiddlywikiproject` where `/path/to/your/tiddlywikiproject` is the path to the directory this project is hosted in), and type `gulp <task>` where `<task>` is the name of one of the three tasks: build, clean, or upload.
* **Build:** This task, called by `gulp build`, will send all your files from `source/` to the `upload/` directory. Use this when your local work is finished, and you want to move your finished files to be uploaded.
* **Upload:** This task, called by `gulp upload` will upload the files from your `upload/` directory to the `gh-pages` branch of your repository, pushing them live on your GitHub account.
* **Clean:** This task, called by `gulp clean`, may or may not be needed (further testing of build/upload is required to say for sure). It will clean out your `upload/` directory, which may be helpful in troubleshooting if there are errors in your gh-pages branch.
