# node-task
Overview
This project is a web application developed using Node.js. It includes unit tests and is configured with a CI/CD pipeline using GitHub Actions for automated testing and deployment to Heroku.
Table of Contents
1.	Prerequisites
2.	Installation
3.	Running the Application
4.	Running Unit Tests
5.	CI/CD Pipeline
6.	Scaling for Larger Applications
   
Prerequisites
•	Node.js installed on the local machine
•	A GitHub account
•	A Heroku platform

Installation
1.	Creta a public git hub repository 
2.	Clone the repository to the local machine. By “git clone <repo url>”
3.	Navigate to that directory and install dependencies  


Express for Node.js:
1.through VC code we will create the node app .
2.Initialize a new Node.js project by running:”npm init”
3. Install the express package “npm install express”
4.Now creat the app file “ex.app.js”

Run Unit Test:

1.For running unit tests here I used “jest” testing framework
”npm install --save-dev jest supertest”
2.Now create a file name test. Js.
3.in the package.json file add test “"scripts": {
  "test": "jest"
},”
3.For running the test “npm test”

CI/CD Pipeline
This project is configured with  CI/CD pipeline using GitHub Actions. The pipeline consists of two following stages using action workflow file (yaml).
•	Test: Runs unit tests to ensure code quality and reliability.
•	Deploy: Deploys the application to Heroku if the tests pass successfully.

