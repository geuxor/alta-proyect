# Getting Started

# Backend
- install docker
- sudo service docker start
- sudo docker build -t <dir_name> .
- sudo docker run -p 8080:8080 <dir_name>

# Frontend
- npm i
- cd <dir_name>
- npm run dev
- Browser would automatically open pointing to http://localhost:3000/

# Testing 
- npm run test

# Routes & Architecture Flow
"Display Orders" => /orders     => Orders        => ShopApi 
"More Details"   => /orders/:id => OrderDetails  => OrderItem  => OrderLine
"Create Order"   => order/new   => OrderCreate   => ShopApi

## Available Scripts
In the project directory, you can run:
#### - "start": "react-scripts start",
Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### - "build": "react-scripts build",
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### - "test": "react-scripts test",
Runs Test files using JEST/Testing Library

#### - "dev": "REACT_APP_API_DOMAIN=development npm start"
Runs the app in the development mode.\
Opens [http://localhost:3000](http://localhost:3000) to view it in the browser.

### NPM packages included
- @ant-design/icons: 4.6.4,
- @testing-library/jest-dom: 5.11.4,
- @testing-library/react: 11.1.0,
- @testing-library/user-event: 12.1.10,
- @types/jest: 26.0.15,
- @types/node: 12.0.0,
- @types/react: 17.0.0,
- @types/react-dom: 17.0.0,
- antd: 4.16.13,
- axios: 0.21.4,
- react: 17.0.2,
- react-dom: 17.0.2,
- react-router-dom: 5.3.0,
- react-scripts: 4.0.3,
- react-toastify: 7.0.4,
- typescript: 4.1.2,
- web-vitals: 1.0.1

# Dev dependencies included
- @types/react-router-dom: 5.1.9,
- @typescript-eslint/eslint-plugin: 4.31.2,
- @typescript-eslint/parser: 4.31.2,
- eslint: 7.32.0,
- eslint-plugin-react: 7.26.0
