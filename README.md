# jjk-mvvm-demo

<div>To get this running on a clone, execute the following until I get the package.json running correctly</div>
<ol>
    <li>npm install express</li>
    <li>npm install body-parser</li>
</ol>

<h2>To run this continuously</h2>
<ol>
    <li>Install the supervisor package: npm install supervisor -g</li>
    <li>Run using the below from the /server directory: supervisor --harmony app.js</li>
</ol>
<b><i>this will relaunch the nodejs express app whenever a change to any file in the /server folder is made</i></b>