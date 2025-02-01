import { useState, useEffect, useRef } from 'react';
import '../../Styles/filters.css'

const Suggestioninput = ({ options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const toggleOption = (option) => {
        setSelectedItems(prev => {
            if (prev.find(item => item.id === option.id)) {
                return prev.filter(item => item.id !== option.id);
            }
            return [...prev, option];
        });
    };

    const displaySelectedItems = () => {
        if (selectedItems.length === 0) {
            return <span className="text-white">{placeholder}</span>;
        }

        if (selectedItems.length <= 2) {
            return (
                <span className="text-white">
                    {selectedItems.map(item => item.label).join(', ')}
                </span>
            );
        }

        return (
            <span dir='rtl' className="text-white">
                {selectedItems.slice(0, 2).map(item => item.label).join(', ')}
                <span className="text-white"> ... </span>
            </span>
        );
    };

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div className="w-28 md:w-32">
                <button
                    onClick={toggleDropdown}
                    className="w-full p-2 text-center md:text-right bg-[hsl(195,9%,25%)] rounded-md shadow-sm"
                >
                    {displaySelectedItems()}
                </button>
            </div>

            {isOpen && (
                <div className="absolute -right-8 w-48 flex flex-col mt-1 bg-[hsl(195,9%,27%)] rounded-md shadow-lg max-h-60 overflow-auto z-10"
                    style={{
                        '--scrollbar-color': 'rgb(107, 114, 128)',
                        '--scrollbar-hover-color': 'rgb(156, 163, 175)',
                        '--scrollbar-width': '8px',
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'var(--scrollbar-color) transparent',
                    }}>
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className="flex flex-row-reverse items-center p-4 hover:bg-sky-500 cursor-pointer"
                            onClick={() => toggleOption(option)}
                        >
                            <input
                                type="checkbox"
                                checked={selectedItems.some(item => item.id === option.id)}
                                onChange={() => { }}
                                className="h-4 w-4 text-blue-600 rounded"
                            />
                            <span className="ml-2 text-md text-white me-3">{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Suggestioninput;