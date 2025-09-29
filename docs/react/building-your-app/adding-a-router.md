---
id: adding-a-router
title: Adding a Router
sidebar_position: 8
tags: [react, react router, routing, react app, single-page application, spa, create react app, navigation, links, components]
keywords: [react, react router, routing, react app, single-page application, spa, create react app, navigation, links, components]
description: "Learn how to add routing capabilities to your React app using React Router, enabling dynamic, multi-page applications without full-page refreshes."
---

In the world of web development, creating dynamic and interactive applications is a common requirement. React, being a popular JavaScript library for building user interfaces, provides a powerful way to create single-page applications (SPAs). However, to enhance the user experience and enable navigation between different views or pages within your React app, you need to implement routing.

In this guide, we will explore how to add routing capabilities to your React app using React Router, a widely used library for handling routing in React applications. By the end of this tutorial, you'll have a solid understanding of how to set up and use React Router to create a seamless navigation experience for your users.

<AdsComponent />

<br />

### 1: What is React Router?

React Router is a popular library that enables navigation and routing within a React application. It provides a seamless way to create multiple pages while maintaining a single-page app feel. Think of it as a virtual GPS system for your app, guiding users to different views without reloading the entire page.

### 2: Getting Started

Before we hit the road, let's set up our project! Make sure you have Node.js and npm installed. If not, visit Node.js' official website and follow their easy installation guide.

Once you have everything set up, create your React app using Create React App (CRA). In your terminal, type:

```bash
npx create-react-app my-awesome-app
cd my-awesome-app
```

Now, we're ready to install React Router. Execute the following command:

```bash
npm install react-router-dom
```

### 3: Creating Our Routes

Imagine your app is a fantastic theme park, and each attraction represents a different page. Let's map out our routes accordingly:

1. **Home:** The main entrance to our park, where visitors start their journey.
2. **About:** An information booth to learn more about our park's history.
3. **Contact:** A helpline where visitors can reach out for any queries.
4. **NotFound:** A secret portal to another dimension for lost URLs (404 page).

### 4: Setting Up the Router

Now that we have our routes planned out, let's integrate React Router into our app. Open the `src/App.js` file, and let the routing magic begin:

```jsx title="src/App.js"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}
```

In this code, we import the necessary components from `react-router-dom` and define our routes using the `<Routes>` and `<Route>` components. Each route is associated with a specific path and component.

<AdsComponent />

<br />

### 5: Creating Our Components

To keep our code organized, let's create separate components for each route we defined earlier. For instance, create `Home.js`, `About.js`, `Contact.js`, and `NotFound.js` in the `src/components` folder. Don't forget to sprinkle some code wizardry into each component to make them shine!

### 6: Linking It All Together

Now that we have our routes and components set up, we need navigation links for our visitors to explore the park. Update your `src/components/Home.js` with the following code:

```jsx title="src/components/Home.js"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Code Mastermind Theme Park!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
```

In this code, we use the `<Link>` component from `react-router-dom` to create navigation links. These links allow users to navigate between different routes without triggering a full page reload.

### 7: Celebrate Your Success!

Congratulations! You've successfully added React Router to your app, making it dynamic and user-friendly. Now, users can roam freely through your theme park without ever getting lost.

<AdsComponent />

<br />

### Apply your Idea's

[Contribution Now](https://github.com/ajay-dhangar/react-blog-app/tree/main/)

## Conclusion

In this guide, we've explored the exciting world of routing in React applications using React Router. By setting up routes, creating components, and linking them together, you've transformed your React app into a dynamic and interactive experience for your users.