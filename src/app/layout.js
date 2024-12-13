import "./globals.css";
import clsx from "clsx";
import FirefliesBackground from "@/app/components/FirefliesBackground";
import Sound from "./components/Sound";
import AssetPreloader from './components/AssetPreloader';

export const metadata = {
  title: "Portfolio with 3D models",
  description: "Front-end developer portfolio with 3D models, utilizing Next.js 14, Three.js and React Three Fiber"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx('bg-background text-foreground ',)}
      >
        <AssetPreloader />
        {children}
        <FirefliesBackground/>
        <Sound/>
        <div id="my-modal"/>
      </body>
    </html>
  );
}
