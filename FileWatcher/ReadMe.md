Hello.

This app is able to watch for given folder with .csv Files and create new .json Files if this folder's file's are changed or user create's new .csv File in the given folder.
All others File's types will be ignored.

For running that app you have to write next command in command line: node runner --path="path to the folder with .csv Files" --delay="number of delay for watcher" .

All new .json Files with .csv File's data inside will be created in the root folder by default. 