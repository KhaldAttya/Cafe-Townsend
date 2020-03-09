# Cafe-Townsend

### Test cases can be found [here](https://github.com/KhaldAttya/Cafe-Townsend/blob/master/test-cases/cafe-townsend%20test%20cases.pdf)

## Automated tests execution
Tests are using protractor which is a [Node.js](https://nodejs.org/en/) program. To run, you will need to have Node.js installed. You will download Protractor package using npm, which comes with Node.js. Check the version of Node.js you have by running the following command in your terminal or cmd:
```
node --version.
```
If it's installed then you should be using npm command to install protractor, to do so run the follwing command in termnal
```
npm install -g protractor
```
if not then it could be something wrong with the path in the system variables.( Hint: search for 'setting npm path')

To execute tests localy we will use standalone Selenium Server to control browsers. You will need to have the [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) installed to run the standalone Selenium Server. Check this by running the following command from the terminal or cmd:
```
java -version
```
if not you should install it.

clone the repo then navigate to it's root folder using terminal and execute the following command to install dependencies: 
```
npm install
```
after successfully installed run the following command to execute tests: 
```
npm test
```
Tests by default will execute on chrome, make sure it's installed. the report will be generated on repot/ folder to view open index.html file.

