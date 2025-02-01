import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({
    totalItems,
    itemsPerPage = 10,
    onPageChange
}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getPageRange = () => {
        if (totalPages <= 10) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        let range = [];
        if (currentPage <= 4) {
            range = [1, 2, 3, 4, 5, '...', totalPages];
        } else if (currentPage >= totalPages - 3) {
            range = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
        } else {
            range = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
        }
        return range;
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        if (onPageChange) {
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            onPageChange(page, startIndex, endIndex);
        }
    };

    return (
        <div className="flex items-center justify-center gap-1">
            <button
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className="p-2 mr-4 bg-gray-500 text-white rounded-lg text-white disabled:opacity-50"
                disabled={currentPage === 1}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {getPageRange().map((pageNumber, index) => (
                <button
                    key={index}
                    onClick={() => pageNumber !== '...' && handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-lg text-white text-sky-500 ${pageNumber === '...'
                            ? 'cursor-default'
                            : currentPage === pageNumber
                                ? 'bg-sky-500'
                                : 'bg-gray-500'
                        }`}
                >
                    {pageNumber}
                </button>
            ))}

            <button
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className="p-2 ml-4 bg-gray-500 text-white rounded-lg text-white disabled:opacity-50"
                disabled={currentPage === totalPages}
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    );
};


export default Pagination;