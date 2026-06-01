import "./globals.css";
import dynamic from "next/dynamic";

const FirefliesBackground = dynamic(() => import("@/components/FirefliesBackground"), {
  ssr: false,
});

export const metadata = {
  title: "Portfolio with 3D models",
  description: "Front-end developer portfolio with 3D models, utilizing Next.js 14, Three.js and React Three Fiber"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='bg-background text-foreground '
      >
        {children}
        <FirefliesBackground/>
        <div id="my-modal"/>
      </body>
    </html>
  );
}
