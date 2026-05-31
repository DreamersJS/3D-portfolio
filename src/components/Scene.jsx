import dynamic from "next/dynamic";
import ResponsiveComponent from "../components/ResponsiveComponent";

const RenderModel = dynamic(() => import('@/components/RenderModel'), { ssr: false });
const PortfolioCube = dynamic(() => import('@/components/cube/PortfolioCube'), { ssr: false });

const Scene = () => {
    let cubeScale = 2.7;

    return (
        <ResponsiveComponent>
            {
                ({ width, height }) => {
                    if (width && width >= 480 && height > 480) {
                        cubeScale = 2.8;
                    } else {
                        cubeScale = 2;
                    }
                    return (
                        <RenderModel>
                            <PortfolioCube cubeScale={cubeScale} />
                        </RenderModel>
                    );
                }
            }
        </ResponsiveComponent>
    )
}
export default Scene;