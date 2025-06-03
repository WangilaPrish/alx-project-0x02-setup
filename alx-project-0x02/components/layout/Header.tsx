import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex space-x-4">
                <Link href="/home" className="hover:underline">
                    Home
                </Link>

                <Link href="/about" className="hover:underline">
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
