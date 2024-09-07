This repository contains a WebDriverIO test that automates the login functionality for a demo web application using Node.js 18 and ChromeDriver.

Prerequisites
Before running the tests, ensure you have the following installed:

Node.js (version 18 or later)
npm (comes with Node.js)
Getting Started
1. Clone the Repository
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/webdriverio-demo.git
cd webdriverio-demo
2. Install Dependencies
After cloning the repository, install the required Node.js packages:

bash
Copy code
npm install
This will install WebDriverIO, ChromeDriver, and other required dependencies.

3. Running the Test
To run the login test, use the following command:

bash
Copy code
npx wdio run wdio.conf.js
This command will:

Launch Chrome via ChromeDriver.
Navigate to the demo login page: http://the-internet.herokuapp.com/login.
Enter the username (tomsmith) and password (SuperSecretPassword!).
Verify that the login is successful by checking for a success message.
Folder Structure
The project folder structure is as follows:

bash
Copy code
webdriverio-demo/
│
├── node_modules/             # Project dependencies
├── tests/                    # Folder containing test scripts
│   └── spec/                 # Test spec files (loginTest.js)
├── wdio.conf.js              # WebDriverIO configuration file
├── package.json              # Project configuration file
└── README.md                 # Instructions to run the project
Troubleshooting
If you encounter any issues:

Ensure Node.js 18 or later is installed. You can verify your Node.js version using:

bash
Copy code
node -v
Ensure that Google Chrome is installed and that ChromeDriver is compatible with the installed version of Chrome.

License
This project is licensed under the MIT License.