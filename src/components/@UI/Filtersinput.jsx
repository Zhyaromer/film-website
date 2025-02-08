import { useState, useEffect, useRef } from 'react';
import '../../Styles/filters.css'

const MultiSelect = ({ options, placeholder, onSelectionChange, singleSelect = false }) => {
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

    useEffect(() => {
        onSelectionChange(selectedItems);
    }, [selectedItems, onSelectionChange]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const toggleOption = (option) => {
        setSelectedItems(prev => {
            if (singleSelect) {
                return prev.find(item => item.id === option.id) ? [] : [option];
            } else {
                if (prev.find(item => item.id === option.id)) {
                    return prev.filter(item => item.id !== option.id);
                }
                return [...prev, option];
            }
        });
    };

    const displaySelectedItems = () => {
        if (selectedItems.length === 0) {
            return <span className="text-white">{placeholder}</span>;
        }

        if (selectedItems.length <= 5) {
            return (
                <span className="text-white">
                    {selectedItems.map(item => item.label).join(', ')}
                </span>
            );
        }

        return (
            <span dir='rtl' className="text-white">
                {selectedItems.slice(0, 5).map(item => item.label).join(', ')}
                <span className="text-white"> ... </span>
            </span>
        );
    };

    return (
        <div className="relative w-72 z-40" ref={dropdownRef}>
            <div>
                <button
                    onClick={toggleDropdown}
                    className="w-full p-2 text-right bg-[hsl(195,9%,25%)] rounded-md shadow-sm"
                >
                    {displaySelectedItems()}
                </button>
            </div>

            {isOpen && (
                <div className="absolute w-full mt-1 bg-[hsl(195,9%,27%)] rounded-md shadow-lg max-h-60 overflow-auto z-10"
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
                                onChange={() => {}}
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

export default MultiSelect;