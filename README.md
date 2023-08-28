# Vanilla JS SPA Router

The JavaScript SPA Router is a lightweight and flexible router designed for single-page applications (SPAs). It empowers developers to create dynamic and engaging user experiences by enabling seamless navigation between different views or pages within a web application. This router leverages JavaScript, Express.js for serving static files, and offers an intuitive API for defining routes and managing navigation.

## Features

- Effortless Routing: Define routes easily by associating URL paths with corresponding view components.
- Dynamic Loading: Views are dynamically loaded based on routes, enhancing performance and reducing initial load times.
- Parameterized Routes: Easily capture route parameters and utilize them in your view components.
- History Management: Utilizes browser history API for smooth navigation and proper handling of back and forward actions.
- Event-Based Architecture: Trigger functions when a view is mounted, enabling developers to incorporate custom JavaScript logic.
- Modular and Extensible: Organize your codebase using modular view components and extend the router's capabilities as needed.
- User-Friendly Navigation: Seamlessly navigate between views using data attributes or programmatically through the provided API.

## Getting Started

1. Installation: Begin by installing the necessary dependencies using npm:
- npm install express

2. Route Definitions: Define your routes and their corresponding view components using the router:

- // index.js
import Home from "./pages/Home.js"
// ... other imports

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    // Add more route definitions here
  ];

  // Route matching and view rendering logic
  // ...
};

// ... other router-related code

3. View Components: Create view components by extending the AbstractView class:

// Home.js
import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <div id="welcome-section">
        <h1>Welcome to JavaScript Single Page Application</h1>
        <p>To start your journey, edit Home and add more Pages. Happy Coding!</p>
      </div>
    `;
  }
  // ... other methods and logic
}

## Usage

1. Programmatic Navigation: Navigate between views programmatically using the navigateTo(url) function:

navigateTo("/about");

2. Route Parameters: Capture and utilize route parameters within your view components:

// Define a route with a parameter
{ path: "/user/:id", view: UserView }

// Access parameter in UserView component
const userId = this.params.id;

3. Event Handling: Implement custom logic in the onMount() function of your view components:

onMount() {
  // Perform actions when the view is mounted
}

4. Custom HTML Markup: Customize the HTML markup returned by the getHtml() function in your view components:

async getHtml() {
  return `
    <div>
      <!-- Your custom HTML content here -->
    </div>
  `;

## Contribution
Contributions and feedback from the developer community are highly appreciated. Feel free to fork this repository, make improvements, and submit pull requests. For significant changes, please open an issue to discuss your proposed enhancements.

Developed by Nenad Shkurtevski

