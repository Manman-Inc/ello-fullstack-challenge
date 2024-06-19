import { useEffect, useMemo } from 'react';
import { useInfiniteScroll } from '../../../hooks';
import { BookCard } from './BookCard';
import './index.css';
import { Svg } from '../../secondary';
import { useReadingList } from '../../../providers';

export const ReadingList = () => {
    const { readlist } = useReadingList();

    const memoizedList = useMemo(
        () =>
            Object.entries(readlist).map(([key, value]) => ({
                id: key,
                book: value,
            })),
        [readlist]
    );

    const [visibleItems, { setRef }] = useInfiniteScroll(memoizedList, 10);

    useEffect(() => {
        console.log(visibleItems, memoizedList);
    }, [visibleItems, memoizedList]);

    return (
        <section className="my-5 space-y-5 min-h-[80vh] transition-all duration-700 px-3">
            <div className="m-auto max-w-[1200px]">
                <div className="flex space-x-5 items-center">
                    <Svg
                        viewBox="0 -960 960 960"
                        className="w-[38px] fill-ello-primary-steal-blue"
                    >
                        <path d="M480-160q-48-38-104-59t-116-21q-42 0-82.5 11T100-198q-21 11-40.5-1T40-234v-482q0-11 5.5-21T62-752q46-24 96-36t102-12q58 0 113.5 15T480-740v484q51-32 107-48t113-16q36 0 70.5 6t69.5 18v-480q15 5 29.5 10.5T898-752q11 5 16.5 15t5.5 21v482q0 23-19.5 35t-40.5 1q-37-20-77.5-31T700-240q-60 0-116 21t-104 59Zm80-200v-380l200-200v400L560-360Zm-160 65v-396q-33-14-68.5-21.5T260-720q-37 0-72 7t-68 21v397q35-13 69.5-19t70.5-6q36 0 70.5 6t69.5 19Zm0 0v-396 396Z" />
                    </Svg>

                    <h2 className="text-ello-primary-steal-blue font-bold text-2xl">
                        Reading List
                    </h2>
                </div>
            </div>
            <div className="m-auto max-w-screen-lg">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                    {visibleItems.map(({ id, book }, index) => {
                        return (
                            <div ref={(node) => setRef(node, index)} key={id}>
                                <BookCard book={book} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
