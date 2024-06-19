import { useReadingList } from '../../../providers';
import { LazyLoadedImage, Shimmer } from '../../secondary';

export const ResultCard = ({ book }) => {
    const { setValue, readlist } = useReadingList();

    const handleAddClick = () => {
        setValue(`${book.title} by ${book.author}`, book);
    };

    return (
        <div className="flex items-center p-4 border-b border-gray-200">
            <div className="w-16 aspect-square rounded-xl shadow-md border-2 border-white shadow-ello-accent-teal overflow-hidden mr-4">
                <Shimmer>
                    <LazyLoadedImage
                        src={book.coverPhotoURL}
                        alt={`${book.title} cover`}
                        className="w-full h-full scale-150 transition-all duration-700 ease-in-out fade-in object-center object-cover"
                    />
                </Shimmer>
            </div>
            <div className="flex-1 space-y-3">
                <h3 className="font-semibold text-center text-ello-primary-steal-blue">
                    {book.title}
                </h3>
                <p
                    className={`text-sm text-center text-ello-primary-steal-blue italic`}
                >
                    by {book.author}
                </p>
            </div>
            <button
                onClick={handleAddClick}
                className={`ml-4 ${
                    Object.keys(readlist).includes(
                        `${book.title} by ${book.author}`
                    )
                        ? 'text-ello-accent-teal'
                        : 'bg-ello-accent-teal text-white'
                } px-3 py-2 transition-all duration-700 ease-in-out rounded-3xl rounded-br border-2 border-ello-accent-teal font-bold shadow-sm shadow-ello-accent-teal`}
            >
                Add
            </button>
        </div>
    );
};
