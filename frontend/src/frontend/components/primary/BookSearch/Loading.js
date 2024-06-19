import { TripletBouncingLoader } from '../../secondary/TrippleBouncingLoader';

export const Loading = () => {
    return (
        <div className="py-16 space-y-5 px-3 text-[#4aa088]">
            <TripletBouncingLoader />
            <p className="font-semibold text-center">Loading</p>
        </div>
    );
};
