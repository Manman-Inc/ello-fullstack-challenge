import { createContext, useState, useContext } from 'react';

/**
 * Context for managing global application state.
 * Provides state and setters for book search and navigation components.
 */
export const GlobalStateContext = createContext();

/**
 * Provider component to manage global application state.
 * Initializes state for book search and navigation components.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components that will consume the context.
 */
export const GlobalStateProvider = ({ children }) => {
    // State variables for book search functionality
    const [bookSearchQuery, setBookSearchQuery] = useState('');
    const [isBookSearchFocused, setIsBookSearchFocused] = useState(false);

    // State variable for managing hamburger menu visibility
    const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

    return (
        <GlobalStateContext.Provider
            value={{
                // Navigation state and setters
                navigation: {
                    isHamburgerMenu, // Current state of hamburger menu visibility
                    setIsHamburgerMenu, // Setter function to toggle hamburger menu
                    items: [
                        {
                            link: 'Explore Ello',
                            url: 'https://www.ello.com/#how-it-works',
                        },
                        {
                            link: 'Parent Resources',
                            url: 'https://www.ello.com/blog',
                        },
                    ],
                },
                // Book search state and setters
                bookSearch: {
                    bookSearchQuery, // Current value of book search query
                    setBookSearchQuery, // Setter function for updating book search query
                    isFocused: isBookSearchFocused, // Boolean state indicating if book search is focused
                    setIsFocused: setIsBookSearchFocused, // Setter function to toggle focus state of book search
                },
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};

/**
 * Custom hook to consume global state from GlobalStateContext.
 * Provides access to book search and navigation state and setters.
 *
 * @returns {Object} - Returns an object containing book search and navigation state and setters.
 */
export const useGlobalState = () => {
    return useContext(GlobalStateContext);
};
