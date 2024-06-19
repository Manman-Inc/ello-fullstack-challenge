import { ResultCard } from './ResultCard';

export const Results = ({ visibleItems, setRef }) => {
    return (
        <div className="w-full flex flex-col">
            {visibleItems.map((book, index) => (
                <div
                    ref={(node) => setRef(node, index)}
                    key={`${book.title} by ${book.author}`}
                >
                    <ResultCard book={book} />
                </div>
            ))}
        </div>
    );
};
