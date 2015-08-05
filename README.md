# jjk-mvvm-demo

To get this running on a clone, execute the following until I get the package.json running correctly
npm install express
npm install body-parser

------------------------
To run this continuously
------------------------
1. Install the supervisor package:
    npm install supervisor -g
2. Run using the below from the /server directory:
    supervisor --harmony app.js

    * this will relaunch the nodejs express app whenever a change to any file in the /server folder is made