import logo from './logoEllo.2b20bb072a0c339867f3cb02fe3515b6.svg';

export const ElloLogo = ({ ...props }) => {
    return (
        <img
            src={logo}
            alt="Ello Logo"
            className="w-[54px] h-auto"
            {...props}
        />
    );
};
