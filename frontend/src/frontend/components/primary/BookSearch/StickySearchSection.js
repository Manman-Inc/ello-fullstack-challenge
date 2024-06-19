import { useEffect } from 'react';
import { useAnimatedState } from '../../../hooks';
import { preventDefault } from '../../../utils';
import { Input } from './Input';
import { DropDownManager } from './DropDownManager';

export const StickySearchSection = ({
    isFocused,
    visibleItems,
    setRef,
    bookSearchQuery,
    searchResults,
}) => {
    const {
        ref: dropDownContainerRef,
        paint,
        handleAnimationEnd,
    } = useAnimatedState(isFocused);

    useEffect(() => {
        if (dropDownContainerRef.current) {
            dropDownContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }, [bookSearchQuery, searchResults, dropDownContainerRef]);

    return (
        <div className="bg-ello-primary-turquoise sticky top-0 z-[5000] flex items-center justify-center py-4 px-3 mb-[-1px]">
            <div className="relative flex items-center justify-center w-full max-w-lg">
                <Input />
                {paint && (
                    <div
                        ref={dropDownContainerRef}
                        className={`absolute mt-2 w-full ${
                            isFocused ? 'fade-in' : 'fade-out'
                        } bg-white shadow-lg rounded max-h-[80vh] border-red-500 overflow-auto z-[1000] top-full`}
                        onMouseDown={preventDefault}
                        onAnimationEnd={handleAnimationEnd('fade-out')}
                    >
                        <DropDownManager
                            {...{
                                visibleItems,
                                setRef,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
