import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-4 bg-[#3C332B] text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            {new Date().getFullYear()} KFoundry. All rights reserved.
          </div>
          <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
