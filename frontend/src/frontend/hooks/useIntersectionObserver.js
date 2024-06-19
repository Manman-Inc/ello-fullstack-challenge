import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

/**
 * Custom hook to simplify the usage of the Intersection Observer API.
 * Tracks whether the referenced element is currently in view and if it has ever been in view.
 *
 * @param {...any} args - Arguments to configure the Intersection Observer.
 * @returns {{ ref: React.MutableRefObject<any>, isInView: boolean, mounted: boolean }} - An object containing:
 * - `ref`: The ref object to attach to the element.
 * - `isInView`: Indicates if the element is currently in view.
 * - `mounted`: Indicates if the element has ever been in view.
 *
 * @example
 * // Usage in a functional component
 * const MyComponent = () => {
 *     const { ref, isInView, mounted } = useIntersectionObserver({ threshold: 0.5 });
 *
 *     return (
 *         <div ref={ref}>
 *             {isInView ? 'In View' : 'Out of View'}
 *             {mounted && ' - Has been in view'}
 *         </div>
 *     );
 * };
 */
export const useIntersectionObserver = (...args) => {
    // State to track whether the element is currently in view
    const [isInView, setIsInView] = useState(false);
    // State to track whether the element has ever been in view
    const [mounted, setMounted] = useState(false);
    // useInView hook from react-intersection-observer to get the ref and inView state
    const [ref, inView] = useInView(...args);

    // Effect to set mounted to true when the element comes into view
    useEffect(() => {
        if (inView && !mounted) {
            setMounted(true);
        }
    }, [mounted, inView]);

    // Effect to update isInView state when the inView state changes
    useEffect(() => {
        setIsInView(inView);
    }, [inView]);

    // Return the ref to attach to the DOM element and the state object
    return { ref, isInView, mounted };
};
