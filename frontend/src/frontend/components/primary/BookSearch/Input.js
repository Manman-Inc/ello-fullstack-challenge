import { useRef } from 'react';
import { preventDefault } from '../../../utils';
import { Svg } from '../../secondary';
import { useGlobalState } from '../../../providers';

export const Input = () => {
    const inputRef = useRef(null);

    const {
        bookSearch: {
            bookSearchQuery,
            setBookSearchQuery,
            setIsFocused,
            isFocused,
        },
    } = useGlobalState();

    const handleChange = (e) => {
        setBookSearchQuery(e.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleClose = () => {
        if (isFocused) {
            inputRef.current.blur();
        }
    };

    return (
        <div className="flex items-center justify-center w-full relative">
            <input
                ref={inputRef}
                type="text"
                className={`bg-white transition-all duration-500 outline-none focus:ring-2 placeholder:text-ello-accent-teal font-semibold text-ello-accent-teal focus:ring-white rounded-full shadow-lg py-3 pl-16 pr-4 w-full`}
                placeholder="Search Book"
                value={bookSearchQuery}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <Svg
                onClick={handleClose}
                onMouseDown={preventDefault}
                className="w-[24px] absolute left-5 top-1/2 transform -translate-y-1/2 fill-ello-accent-teal cursor-pointer"
            >
                {isFocused ? (
                    <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098z" />
                ) : (
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                )}
            </Svg>
        </div>
    );
};
