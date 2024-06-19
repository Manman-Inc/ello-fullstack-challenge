![svgviewer-output](https://github.com/ElloTechnology/backend_takehome/assets/3518127/561bc8d4-bffc-4360-b9ea-61e876bcec93)

# Ello Fullstack Engineering Challenge Solution

👋 Hello! Welcome to my submission for the Ello Engineering Challenge. This repository showcases my solution to the task of developing a teacher-facing user interface for the Ello web viewer product. Designed to empower educators in facilitating children's reading experiences, this project focuses on implementing a robust and intuitive book assignment feature. You can explore the live demo of my solution here https://ello-fullstack-challenge.web.app/.

**Technical** Note: Please note that I utilized vanilla JavaScript for rapid prototyping while adhering to best practices and maintaining code quality and maintainability. In a production environment, In a production environment, the code could be refactored to TypeScript to enforce type safety across the code base.

## Challenge Context

Ello stands at the forefront of educational technology, dedicated to empowering young readers by redefining how children learn to read. This challenge provided an opportunity to showcase proficiency in developing a pivotal component of the Ello ecosystem—specifically, the book assignment view for educators.

### Features Required

1. Search Bar: Allows users to search for books by title.
2. Search Results List: Displays the book title, author, and a button to add the book to the reading list.
3. Reading List: Displays all the books that the teacher has added.
4. Remove Button: Allows the teacher to remove books from the reading list.

### Technical Requirements

-   Frontend Framework: Use React.
-   Component Library: Initially suggested using Material-UI, but I opted to engineer custom components.
-   React Hooks: Showcase the use of React hooks.
-   Directory Structure: Write code in the src/frontend directory and create components as deemed best suited for the solution.

<img width="1013" alt="Screenshot 2024-05-15 at 19 10 51" src="https://github.com/ElloTechnology/fullstack-take-home-test/assets/3518127/bc3eb7f7-489f-4304-93f4-032bbbd38c58">

### Technical Implementation

My solution employs React hooks for efficient state management and custom-designed components to deliver a seamless user experience. Integration with a GraphQL backend facilitates dynamic data retrieval.

The cherry on top, My solution leverages advanced frontend techniques to optimize performance and user experience:

-   **Virtual Scrolling:** Implemented to efficiently render large lists of books without performance degradation. This technique dynamically loads only the visible items in the viewport, enhancing responsiveness and reducing memory consumption.

-   **Infinite Scrolling:** Utilized to seamlessly fetch additional book data as the user scrolls, providing a continuous browsing experience without the need for manual pagination. This approach enhances usability by loading content progressively and improving load times.

-   **Lazy-Loaded Images:** Implemented lazy loading for book cover images. Images are loaded asynchronously as they enter the viewport, reducing initial page load time and improving overall page performance. This technique ensures a faster initial render and smoother user interactions.

### How to Run

Frontend (Create React App)

1. Navigate to the frontend directory.
2. Install dependencies:(npm install)
3. Start the development server:(npm start)
4. Open your browser and go to http://localhost:3000/ to view the application.

Backend (GraphQL Server)

1. Navigate to the backend directory.
2. Install dependencies:(npm install)
3. Start the GraphQL server:(npm start)
4. The GraphQL server will start at http://localhost:4000/.

## Evaluation and Submission

This submission upholds rigorous coding standards and design principles, emphasizing clarity, maintainability, and user-centric design. It was submitted for review to fullstack2024@ello.com to demonstrate expertise in frontend development and adherence to project specifications.
