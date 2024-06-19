import { useState } from 'react';
import { useAnimatedState } from '../../../hooks';
import { Shimmer, LazyLoadedImage } from '../../secondary';
import { useReadingList } from '../../../providers';

export const BookCard = ({ book }) => {
    const { deleteValue } = useReadingList();

    const [animationTrigger, setAnimationTrigger] = useState(true);

    const { ref: bookCardRef, handleAnimationEnd } =
        useAnimatedState(animationTrigger);

    const handleRemove = () => {
        setAnimationTrigger(false);
    };

    return (
        <div
            ref={bookCardRef}
            onAnimationEnd={handleAnimationEnd('fade-out', () => {
                deleteValue(`${book.title} by ${book.author}`);
            })}
            className={`flex flex-col h-full ${
                animationTrigger ? 'fade-in' : 'fade-out'
            }  max-w-sm mx-auto w-full cursor-pointer bg-white rounded shadow-lg shadow-gray-300`}
        >
            <div className="w-full aspect-video relative">
                <div className="absolute w-full h-full">
                    <Shimmer>
                        <LazyLoadedImage
                            className="w-full h-full fade-in object-cover object-center"
                            src={book.coverPhotoURL}
                            alt={`${book.title} cover`}
                        />
                    </Shimmer>
                </div>
            </div>
            <div className="flex flex-col justify-between flex-grow p-3">
                <div className="space-y-3">
                    <h2 className="font-bold text-xl text-ello-primary-steal-blue">
                        {book.title}
                    </h2>
                    <p className="text-ello-primary-steal-blue font-semibold text-base">
                        by {book.author}
                    </p>
                </div>
                <div className="mt-3">
                    <button
                        onClick={handleRemove}
                        className="premium-button w-full"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};
