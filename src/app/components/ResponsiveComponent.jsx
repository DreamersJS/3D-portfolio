'use client'
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({children}) => {
    const { width, height } = useScreenSize();

    return (
        <>
            {children({ width, height })}
        </>
    );
};
export default ResponsiveComponent;