import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for the read list
export const ReadingListContext = createContext();

/**
 * ReadListProvider component to provide read list functionality to its children.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components that will consume the context.
 * @param {string} [props.store='readlist'] - The key to use in localStorage for storing the read list data.
 */
export const ReadingListProvider = ({ children, store = 'readlist' }) => {
    // Initialize state with stored data from localStorage or an empty object
    const [storage, setStorage] = useState(() => {
        try {
            const storedData = localStorage.getItem(store);
            return storedData ? JSON.parse(storedData) : {};
        } catch (error) {
            console.error('Error fetching data from localStorage:', error);
            return {};
        }
    });

    // Effect to update localStorage whenever the storage state changes
    useEffect(() => {
        try {
            localStorage.setItem(store, JSON.stringify(storage));
        } catch (error) {
            console.error('Error storing data in localStorage:', error);
        }
    }, [storage, store]);

    /**
     * Function to set a value in the read list.
     *
     * @param {string} id - The identifier for the item.
     * @param {any} value - The value to set for the item.
     */
    const setValue = (id, value) => {
        setStorage((previous) => {
            try {
                if (previous[id]) return previous;
                return { ...previous, [id]: value };
            } catch (error) {
                console.error('Error setting value in storage:', error);
                return previous;
            }
        });
    };

    /**
     * Function to delete a value from the read list.
     *
     * @param {string} id - The identifier for the item to delete.
     */
    const deleteValue = (id) => {
        setStorage((previous) => {
            try {
                previous = { ...previous };
                delete previous[id];
                return previous;
            } catch (error) {
                console.error('Error deleting value from storage:', error);
                return previous;
            }
        });
    };

    return (
        <ReadingListContext.Provider
            value={{ [store]: storage, setValue, deleteValue }}
        >
            {children}
        </ReadingListContext.Provider>
    );
};

/**
 * Custom hook to consume read list context.
 *
 * @returns {Object} - An object containing read list data, setValue function, and deleteValue function.
 */
export const useReadingList = () => {
    return useContext(ReadingListContext);
};
