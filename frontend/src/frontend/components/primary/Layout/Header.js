import { useGlobalState } from '../../../providers';
import { ElloLogo } from '../ElloLogo';

export const Header = ({ children, isHamburgerMenu, ...props }) => {
    const {
        navigation: { setIsHamburgerMenu, items },
    } = useGlobalState();

    const handleHamburgerMenuClick = () => {
        setIsHamburgerMenu((previous) => !previous);
    };

    return (
        <header {...props}>
            {/* Navigation For Smaller Devices */}
            <div className="lg:hidden">
                <nav className="flex justify-between items-center py-4 px-3">
                    {/* Logo */}
                    <ElloLogo />

                    {/* Mobile Menu Icon */}
                    <button
                        className="rounded-full p-1"
                        onClick={handleHamburgerMenuClick}
                    >
                        <svg
                            className={`w-9 h-9 ${
                                isHamburgerMenu ? 'fill-white' : 'fill-ello-nav'
                            } cursor-pointer`}
                            viewBox="0 0 24 24"
                        >
                            {isHamburgerMenu ? (
                                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            ) : (
                                <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                            )}
                        </svg>
                    </button>
                </nav>
            </div>
            {/* Navigation for Larger Devices */}
            <nav className="hidden lg:flex justify-between items-center py-4 px-3">
                {/* Logo */}
                <ElloLogo />

                {/* Navigation Items */}
                <div className="flex space-x-10">
                    {items.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            className="text-ello-nav text-lg font-semibold cursor-pointer"
                        >
                            {item.link}
                        </a>
                    ))}
                </div>
            </nav>
            {children}
        </header>
    );
};
