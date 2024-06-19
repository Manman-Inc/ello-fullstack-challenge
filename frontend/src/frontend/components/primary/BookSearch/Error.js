import { Svg } from '../../secondary';

export const Error = () => {
    const handleRefreshClick = async () => {
        window.location.reload();
    };

    return (
        <div className="py-16 flex flex-col items-center justify-center space-y-5 px-3 text-[#4aa088]">
            <div
                onClick={handleRefreshClick}
                className="p-3 rounded-full cursor-pointer group shadow-lg bg-ello-accent-turquoise-dark-2 border-4 border-ello-accent-yellow-dark"
            >
                <Svg className="w-[35px] animate-spin group-active:invisible fill-ello-accent-orange-red">
                    <path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                </Svg>
            </div>
            <p className="font-semibold text-center">
                Oops! Something went wrong. Please try refreshing the page. If
                the problem persists, contact support at{' '}
                <span className="text-ello-accent-orange-red">
                    support@ello.com
                </span>{' '}
                for further assistance.
            </p>
        </div>
    );
};
