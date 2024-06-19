import { Header } from './Header';
import { HamburgerMenu } from './HamburgerMenu';

export const Layout = ({ children, ...props }) => {
    return (
        <div className="w-full h-screen overflow-auto relative" {...props}>
            <HamburgerMenu />
            <Header className="bg-white" />
            {children}
        </div>
    );
};
