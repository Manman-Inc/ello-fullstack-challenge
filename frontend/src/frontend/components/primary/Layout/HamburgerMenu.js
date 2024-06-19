import { useAnimatedState } from '../../../hooks';
import { useGlobalState } from '../../../providers';
import { Portal } from '../../secondary';
import { Header } from './Header';

export const HamburgerMenu = () => {
    const {
        navigation: { isHamburgerMenu, items },
    } = useGlobalState();

    const {
        ref: hamburgerContainerRef,
        paint,
        handleAnimationEnd,
    } = useAnimatedState(isHamburgerMenu);

    return (
        paint && (
            <Portal className="absolute z-[10000] lg:hidden top-0 left-0 w-full h-screen">
                <div
                    className={`w-full bg-ello-primary-steal-blue h-full ${
                        isHamburgerMenu ? 'fade-in' : 'fade-out'
                    }`}
                    ref={hamburgerContainerRef}
                    onAnimationEnd={handleAnimationEnd('fade-out')}
                >
                    <Header
                        className={`${
                            isHamburgerMenu ? 'fade-in' : 'fade-out'
                        }`}
                        isHamburgerMenu={isHamburgerMenu}
                    />
                    <div
                        className={`px-5 flex flex-col border-t-8 border-ello-accent-turquoise-dark-2 bg-ello-primary-steal-blue`}
                    >
                        {/* Mobile Menu Items */}
                        {isHamburgerMenu && (
                            <nav className="flex flex-col items-center space-y-5 bg-ello-primary-steal-blue py-5">
                                {items.map((item, index) => (
                                    <a
                                        key={index}
                                        href={item.url}
                                        className="text-white text-lg font-semibold"
                                    >
                                        {item.link}
                                    </a>
                                ))}
                            </nav>
                        )}
                    </div>
                </div>
            </Portal>
        )
    );
};
