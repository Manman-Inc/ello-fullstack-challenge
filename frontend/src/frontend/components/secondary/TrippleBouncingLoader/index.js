import './index.css';

export const TripletBouncingLoader = () => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="loader-circle bg-[#F76434]"></div>
            <div className="loader-circle bg-[#4aa088]"></div>
            <div className="loader-circle bg-[#faad00]"></div>
        </div>
    );
};
