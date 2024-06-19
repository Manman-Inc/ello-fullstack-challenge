import { useMemo } from 'react';
import { useInfiniteScroll } from '../../../hooks';
import { filterData } from '../../../utils';
import { PaddingSection } from './PaddingSection';
import { HeaderContent } from './HeaderContent';
import { StickySearchSection } from './StickySearchSection';
import { useBooks, useGlobalState } from '../../../providers';

export const BookSearch = () => {
    const {
        bookSearch: { bookSearchQuery, isFocused },
    } = useGlobalState();

    const { books } = useBooks();

    const searchResults = useMemo(
        () =>
            filterData(
                books,
                {
                    title: true,
                },
                bookSearchQuery
            ),
        [books, bookSearchQuery]
    );

    const [visibleItems, { setRef }] = useInfiniteScroll(searchResults, 20);

    return (
        <>
            <PaddingSection />
            <HeaderContent />
            <StickySearchSection
                {...{
                    isFocused,
                    visibleItems,
                    setRef,
                    searchResults,
                    bookSearchQuery,
                }}
            />
            <PaddingSection />
        </>
    );
};
