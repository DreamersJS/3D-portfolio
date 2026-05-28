'use client'
import dynamic from 'next/dynamic';
const ResumeDetails = dynamic(
    () => import("@/app/components/resume"),
    { ssr: false }
);

export default function Home() {
    return (
        <main>
            <ResumeDetails />
        </main>
    );
}