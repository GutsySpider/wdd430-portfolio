import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div id="header-title" className="text-2xl px-4 font-bold">Michael Bowman</div>
            <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
                <ul className="flex gap-6">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Overview</Link></li>
                    <li><Link href="/projects/opensource">Open Source</Link></li>
                    <li><Link href="/projects/school">School</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}