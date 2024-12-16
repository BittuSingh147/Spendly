import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 text-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Whoops! Lost in the Digital Maze
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you&apos;re searching for seems to have gone on an unexpected adventure. 
          Don&apos;t worry, we&apos;ll help you find your way back.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <Button variant="default" className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Return Home</span>
            </Button>
          </Link>
          <Button variant="outline" className="flex items-center space-x-2">
            <Search className="w-5 h-5" />
            <span>Search Site</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;