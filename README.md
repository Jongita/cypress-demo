![LICENSE](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)
![Gluten Status](https://img.shields.io/badge/Gluten-Free-green.svg)
![Eco Status](https://img.shields.io/badge/ECO-Friendly-green.svg)

# Automated Tests with Cypress for Web Application

<br>

## 🌟 About

This project showcases automated testing of the [Automation Exercise](https://www.automationexercise.com/) web application using Cypress. It includes several test cases that cover user registration, login, account deletion, and other functionalities to ensure the application works as expected.

## 🎯 Project features/goals

-   **User Registration:** Users can sign up with valid credentials.
-   **User Login:** Users can log in using their registered email and password.
-   **Account Deletion**: Users can delete their accounts successfully.
-   **Form Validation:** Ensures that the application behaves as expected with correct and incorrect inputs.

## 🧪 Test Cases

1. **Register User:** Validates successful registration and deletion.
2. **Login User with Correct Credentials:** Ensures users can log in.
3. **Login User with Incorrect Credentials:** Validates error handling.
4. **Logout User:** Confirms logout functionality.
5. **Register User with Existing Email:** Checks the handling of duplicate accounts.
6. **Contact Us Form:** Tests the contact form functionality.
7. **Verify Test Cases Page:** Ensures the test cases page is accessible.
8. **Product Detail Page:** Validates product details and navigation.

## 🧰 Getting Started

### 💻 Prerequisites

To run this project locally, you need to have the following software installed:

-   **Node.js** - Download and install from [nodejs.org](https://nodejs.org)
-   **Git** - Download and install from [git-scm.com](https://git-scm.com)

### 🏃 Run Locally

Would you like to run this project locally? Open your terminal and follow these steps:

1. Clone the repo
    ```sh
    git clone https://github.com/Jongita/cypress-demo
    cd cypress-demo
    ```
2. Install NPM packages
    ```sh
    npm i
    ```
    or
    ```sh
    npm install
    ```
3. Run Cypress in interactive mode
    ```sh
    npm run test
    ```
4. Run Cypress in CI mode
    ```sh
    npm run cypress:ci
    ```

### 📈 Continuous Integration

This project is configured to run Cypress tests automatically using GitHub Actions. The workflow is triggered on code pushes and pull requests to the main branch.

## 🎉 Conclusion

This project serves as a comprehensive example of using Cypress to automate the testing of web applications, ensuring that critical functionalities perform as expected.

## 🎅 Authors

Jongita: [Profile](https://github.com/jongita)

## ⚠️ License

Distributed under the MIT License. See LICENSE.txt for more information.

## 🔗 Other resources

No other resources.
