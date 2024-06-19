import { useIntersectionObserver } from '../../../hooks';
import { useMemo } from 'react';
import * as images from '../../../assets/images';
import { mapServerImagesToLocalURLs } from '../../../utils';

/**
 * LazyLoadedImage Component
 * A reusable component for displaying images with server-side mapping support and lazy loading.
 *
 * @param {string} src - The local path of the image.
 * @param {string} alt - The alternative text for the image.
 * @param {string} [serverBasePath='assets'] - The base path of the server where images are hosted.
 * @param {object} rest - Additional props to be spread onto the <img> element.
 * @returns {JSX.Element} - The JSX element for rendering the image.
 *
 * This component leverages the `useIntersectionObserver` hook to determine when the image is in view.
 * When the image comes into view for the first time (`mounted` is true), it loads the image from the server.
 * The image source is mapped using the `mapServerImagesToLocalURLs` utility.
 *
 * @example
 * // Usage
 * <LazyLoadedImage
 *   src="image1"
 *   alt="Description of image1"
 *   serverBasePath="https://example.com/assets"
 * />
 */
export const LazyLoadedImage = ({
    src,
    alt,
    serverBasePath = 'assets',
    ...rest
}) => {
    const { ref, mounted } = useIntersectionObserver();

    // Memoized the mapped image URL to prevent unnecessary recalculations
    const mappedSrc = useMemo(() => {
        const localURLs = mapServerImagesToLocalURLs({
            serverBasePath,
            images,
        });

        return localURLs[src];
    }, [src, serverBasePath]);

    return (
        <div ref={ref} className="w-full h-full">
            {mounted && (
                <img
                    ref={ref}
                    src={mappedSrc}
                    alt={alt}
                    data-src={src}
                    loading="lazy"
                    {...rest}
                />
            )}
        </div>
    );
};
