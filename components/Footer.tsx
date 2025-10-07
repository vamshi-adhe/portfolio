import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-dark-bg text-gray-600 dark:text-gray-400 py-8">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; {new Date().getFullYear()} Vamshi Adhe. All rights reserved.</p>
                <p className="text-sm mt-2">Designed and Built by Vamshi Adhe</p>
            </div>
        </footer>
    );
};

export default Footer;
