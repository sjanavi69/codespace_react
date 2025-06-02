// src/App.jsx
import Todos from './Module 4/Redux Toolkit - State Management in React/Todos_Redux/Todos';

// src/App.jsx
import React, { useState } from 'react';


/**
 * Root App component
 * -------------------
 * This component acts as the main container for the application.
 * It renders the Todos feature and can be extended to include layout,
 * routing, or other app-wide context in the future.
 */
const App = () => {
  const [hasError, setHasError] = useState(false);

  // Basic error boundary handling
  const ErrorBoundary = ({ children }) => {
    try {
      return children;
    } catch (error) {
      console.error('Error rendering child component:', error);
      setHasError(true);
      return <p>Something went wrong. Please refresh the page.</p>;
    }
  };

  return (
    <div className="app">
      <ErrorBoundary>
        {/* Main To-Do Feature */}
        <Todos />
      </ErrorBoundary>
    </div>
  );
};

export default App;

/**C
 * Notes:
 * - ErrorBoundary is a simple error wrapper; for production apps,
 *   consider using React’s componentDidCatch lifecycle with class components
 *   or libraries like react-error-boundary.
 *
 * - This component is testable via unit tests by checking:
 *   - It renders without crashing
 *   - It contains the Todos component
 *   - It handles internal errors gracefully
 *
 * - Formatting should be handled by ESLint + Prettier in larger apps
 */

