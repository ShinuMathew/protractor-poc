# Protractor_Demo

Protractor installation:

	1. NPM/Node
	2. Protractor using npm sudo npm install -g protractor
	3. JDK
	4. Webdriver manager update sudo webdriver-manager update
	5. Start webdriver manager from terminal webdriver-manager start:
		a. Starts on localhost:4444
		b. http://localhost:4444/wd/hub/static/resource/hub.html
		c. Webdriver manager is selenium server

Creating a project:

	1. Create a projectfolder.
	2. Run npm init. Enter the parameters.
	- The package.json is created which is similar to pom.xml
	3. Add protractor and jasmine libraries(mocha, grunt) under 
		"dependencies": {
		"protractor": "^5.4.2",
		"jasmine": "^3.3.1"
		},
	4. Do and npm install. This creates node_modules and package-lock.json
	5. Create 2 file
		a. Configuration file (conf.js): Contains details about the selenium, chrome browsers, etc
		b. Specification file (spec.js): Actual code goes here.
	6. Using Jasmine(similar to TestNG) create a small test in spec.js
	7. Add the spec.js and selenium details to conf.js like below:
		export const config = {
		seleniumAddress: 'http://localhost:4444/wd/hub', 
		specs: ['spec.js']
		};
	8. Protractor conf.js
