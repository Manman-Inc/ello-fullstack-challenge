import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../utils';
import { BooksProvider } from './BooksProvider';
import { ReadingListProvider } from './ReadingListProvider';
import { GlobalStateProvider } from './GlobalStateProvider';

export const Providers = ({ children }) => {
    return (
        <ApolloProvider client={apolloClient}>
            <ReadingListProvider>
                <BooksProvider>
                    <GlobalStateProvider>{children}</GlobalStateProvider>
                </BooksProvider>
            </ReadingListProvider>
        </ApolloProvider>
    );
};
