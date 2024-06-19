import { TripletBouncingLoader } from '../../secondary';

export const NotFound = () => {
    return (
        <div className="py-16 space-y-5 px-3 text-[#4aa088]">
            <TripletBouncingLoader />
            <p className="font-semibold text-center">
                No relevant results were found
            </p>
        </div>
    );
};
