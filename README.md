# Restaurant Searcher Android App

Welcome to the README.md file for the Restaurant Searcher Android App project. This mobile app is specifically designed for Newcastle University students and staff to conveniently explore and discover local restaurants. The project is structured with a client-server architecture, dividing the development into three main parts: frontend, backend, and database.

## Architecture

### 1. Client Side (Frontend Development)

#### Technology Stack:
- Vue.js: A progressive JavaScript framework for building dynamic user interfaces.
- JavaScript: Used for client-side scripting.

#### Project Structure:
The frontend is responsible for the user interface and interactions. The project is structured into pages, each utilizing Vue.js for seamless integration. Key pages include:
- Welcome Page
- Login
- Registration
- Main Screen
- Map
- Restaurant Details
- Comments & User Pages

The code structure of each page involves HTML code, client-side scripts for input validation, method calls to the backend, and navigation based on received responses. Utilizing Vue.js enables real-time updates for dynamic user interfaces.

Additionally, utilities were implemented for input validation and formatting, ensuring a smooth user experience.

### 2. Server Side (Backend Development)

#### Technology Stack:
- Java: The programming language for backend development.

#### Project Structure:
The backend manages the interaction between the frontend and the database. The control layer receives requests from the frontend and distributes them to the appropriate processors. The response, indicating the success or failure of the request, is then processed by the service layer. The DAO layer handles data store interaction, offering functions such as "getuser" and "adduser."

### 3. Database

#### Technology:
- MyBatis: A persistence layer framework based on Java.

#### Project Structure:
MyBatis is employed for specific implementations of databases. Interfaces and implementation classes in the DAO layer facilitate data access and manipulation. Java objects are mapped to database tables using MyBatis with Spring Boot support and annotations.

Data availability is ensured by uploading the database to the cloud, enhancing accessibility for all users. Specific code implementation details are provided in the project documentation.

## Code Metrics

The codebase consists of approximately 9000 lines, including both main code and referenced libraries. Excluding libraries, the custom code amounts to approximately 2900 lines. The implementation encompasses 26 methods for various functionalities and 17 components designed for specific features or UI sections.

## System Scalability

The system is designed with scalability in mind to accommodate future growth and upgrades.

### Frontend Expansion:
- Addition of a favorite list with a navigation page.
- Incorporation of more filtering options on the main page.
- Displaying additional details fetched from the Google API.
- Provision of walking routes if deemed necessary in the future.

### Backend Expansion:
- Consideration of migrating the server to renowned cloud platforms like AWS, Microsoft O365, or Google Cloud for enhanced scalability.
- Configuration of settings such as firewall and security for cloud integration.

### Database Upgrade:
- Implementation of stored procedure execution SQL for increased security and enhanced system performance.

Feel free to explore and contribute to the project!
