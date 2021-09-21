# AltaPay Frontend Technical Test

This project contains a Shop Order service written in Java, that you can Run as specified in the section [Run](.README.md#run)

The objective of the test is to write a frontend layer on top of the service as specified in the section [Assignment](.README.md#assignment)

## Assignment

**Functional Requirements**

- [v] Create a presentation to display all orders
- [v] Create a presentation to create a new order
- [v] Create a presentation to see order details (transactions)
- [v] Allow to perform transactions operations on the order
- [v] Navigation state needs to be preserved in the URL

A presentation can be a page, view, modal, etc. Please feel free to design the flow as you see fit.

**Technical Requirements:**

- Use ReactJS and TypeScript
    - You may use a framework built on ReactJS
- Working on the presentation design is a plus but not a must
	- Only the flow and layout is mandatory
- You may add the code to this project, or create a new one
- Provide instructions on how to run the application

## Run

### Locally

Install:
- Java 11

```bash
./gradlew bootRun
```

### Docker

Install:
- Docker

```bash
docker build -t technical-test-frontend .
docker run -p 8080:8080 technical-test-frontend
```

## API Documentation

Open API Specification: http://localhost:8080/v3/api-docs/

Swagger: http://localhost:8080/swagger-ui.html