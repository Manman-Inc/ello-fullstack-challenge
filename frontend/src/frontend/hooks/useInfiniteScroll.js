import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * Custom hook to implement infinite scroll functionality.
 *
 * @param {Array} items - The list of items to be displayed.
 * @param {number} buffer - The number of items to load at a time.
 * @returns {[Array, object]} - Returns an array of visible items and an object containing references for the sentinel element.
 *
 * This hook uses the `useInView` hook from the `react-intersection-observer` library to detect when
 * the sentinel element is in view. When the sentinel is in view, more items are loaded and added to
 * the list of visible items.
 *
 * @example
 * // Usage in a functional component
 * const MyComponent = () => {
 *     const items = [...]; // Array of items
 *     const buffer = 10; // Number of items to load at a time
 *     const [visibleItems, { setRef }] = useInfiniteScroll(items, buffer);
 *
 *     return (
 *         <div>
 *             {visibleItems.map((item, index) => (
 *                 <div key={index} ref={node => setRef(node, index)}>
 *                     {item}
 *                 </div>
 *             ))}
 *         </div>
 *     );
 * };
 */
export const useInfiniteScroll = (items, buffer) => {
    // Validate inputs
    if (!Array.isArray(items)) {
        throw new Error('Items must be an array.');
    }
    if (typeof buffer !== 'number' || buffer <= 0) {
        throw new Error('Buffer must be a positive number.');
    }

    const [visibleItems, setVisibleItems] = useState([]); // State to hold the currently visible items

    // Use the useInView hook to create a reference and track if the element is in view
    const [ref, inView] = useInView();

    // Callback to set the reference for the last visible item
    const setRef = useCallback(
        (node, index) => {
            if (visibleItems.length - 1 === index) {
                ref(node);
            }
        },
        [ref, visibleItems]
    );

    // Effect to initialize the visible items when the items or buffer changes
    useEffect(() => {
        setVisibleItems((prevVisibleItems) => {
            if (prevVisibleItems.length)
                return items.slice(0, prevVisibleItems.length);

            return items.slice(0, buffer);
        });
    }, [items, buffer]);

    // Effect to load more items when the sentinel comes into view
    useEffect(() => {
        setVisibleItems((prevVisibleItems) => {
            if (inView && prevVisibleItems.length < items.length) {
                return items.slice(
                    0,
                    Math.min(prevVisibleItems.length + buffer, items.length)
                );
            }

            return prevVisibleItems;
        });
    }, [inView, items, buffer]);

    return [visibleItems, { ref, setRef }]; // Return the visible items and the reference to the sentinel element
};
