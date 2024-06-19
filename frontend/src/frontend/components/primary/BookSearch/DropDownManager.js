import { useBooks } from '../../../providers';
import { Error } from './Error';
import { Loading } from './Loading';
import { NotFound } from './NotFound';
import { Results } from './Results';

export const DropDownManager = ({ visibleItems, setRef }) => {
    const { loading, error } = useBooks();

    if (loading) return <Loading />;

    if (error) return <Error />;

    if (visibleItems.length) return <Results {...{ visibleItems, setRef }} />;

    return <NotFound />;
};
