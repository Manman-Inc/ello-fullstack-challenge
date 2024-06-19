export const Svg = ({
    size,
    children,
    viewBox = '0 0 16 16',
    className,
    ...props
}) => {
    return (
        <svg
            className={`asspect-square ${className}`}
            {...props}
            viewBox={viewBox}
        >
            {children}
        </svg>
    );
};
