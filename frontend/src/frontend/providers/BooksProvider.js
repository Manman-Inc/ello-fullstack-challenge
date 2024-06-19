import { createContext, useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql';

/**
 * Context for managing books data fetched from Apollo GraphQL query.
 * Provides state variables for books data, loading status, error handling, and data refetching.
 */
export const BooksContext = createContext();

/**
 * Provider component to manage books data fetched from Apollo GraphQL query.
 * Initializes state variables for books data, loading status, error handling, and data refetching.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components that will consume the context.
 */
export const BooksProvider = ({ children }) => {
    // Fetch books data using Apollo useQuery hook
    const { data, loading, error, refetch } = useQuery(GET_BOOKS);
    // State variable to hold books data
    const [books, setBooks] = useState([]);

    // Effect to update books state when data changes
    useEffect(() => {
        if (data) {
            setBooks(data.books); // Update books state with fetched data
        }
    }, [data]);

    return (
        <BooksContext.Provider value={{ books, loading, error, refetch }}>
            {children}
        </BooksContext.Provider>
    );
};

/**
 * Custom hook to consume books data, loading status, error, and refetch function from BooksContext.
 *
 * @returns {Object} - Returns an object containing books data, loading status, error, and refetch function.
 */
export const useBooks = () => {
    return useContext(BooksContext);
};
