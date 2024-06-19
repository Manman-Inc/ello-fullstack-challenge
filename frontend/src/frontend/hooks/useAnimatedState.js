import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to manage animation state for a component.
 *
 * @param {boolean} trigger - A boolean value that triggers the animation when set to `true`.
 * @returns {Object} - Returns an object containing a ref for the animated element, a paint flag, and a handleAnimationEnd function.
 *
 * This hook sets a flag (`paint`) to initiate the animation and provides a handler to reset the state once the animation ends.
 * The animation will only reset if the triggered animation matches the specified animation name.
 * The `paint` flag controls whether the component should be mounted/unmounted based on animation state.
 *
 * @example
 * // Usage in a functional component
 * const MyComponent = () => {
 *     const trigger = true; // Trigger value to start the animation
 *     const { ref, paint, handleAnimationEnd } = useAnimatedState(trigger);
 *
 *     return (
 *         <div
 *             ref={ref}
 *             className={paint ? 'animate-class' : 'hidden-class'}
 *             onAnimationEnd={handleAnimationEnd('animation-name')}
 *         >
 *             {paint && <AnimatedComponent />} // Render or unmount based on animation state
 *         </div>
 *     );
 * };
 */
export const useAnimatedState = (trigger) => {
    if (typeof trigger !== 'boolean') {
        throw new Error('The trigger parameter must be a boolean.');
    }

    const [paint, setPaint] = useState(false); // State to manage whether the animation should be applied
    const ref = useRef(null); // Ref to be attached to the animated element

    useEffect(() => {
        if (trigger) {
            setPaint(true); // Set paint to true when trigger is true
        }
    }, [trigger]);

    /**
     * Generates an event handler for the 'animationend' event.
     *
     * @param {string} animation - The name of the animation to listen for.
     * @param {function} [cb] - Optional callback function to be executed once the animation ends.
     * @returns {function} - Event handler for 'animationend' event.
     */
    const handleAnimationEnd = (animation, cb) => {
        if (typeof animation !== 'string') {
            throw new Error('The animation parameter must be a string.');
        }

        return (e) => {
            if (e.target === ref.current && e.animationName === animation) {
                setPaint(false); // Reset paint to false when the specified animation ends
                if (cb && typeof cb === 'function') {
                    cb(); // Execute the callback function if provided
                }
            }
        };
    };

    return { ref, paint, handleAnimationEnd }; // Return the ref, paint state, and handleAnimationEnd function
};
