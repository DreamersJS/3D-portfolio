import "./globals.css";
import FirefliesBackground from "@/components/FirefliesBackground";
import Sound from "../components/Sound";

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
        <Sound/>
        <div id="my-modal"/>
      </body>
    </html>
  );
}
