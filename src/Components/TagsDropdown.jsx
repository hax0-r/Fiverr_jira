import React, { useState } from 'react';
import { FaSortDown } from 'react-icons/fa';

const TagsDropdown = ({ selectedTag, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);

    const options = ['All Tags', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4'];

    const handleSelect = (option) => {
        onSelect(option); // Call parent function to update selected tag
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-32">
            <div
                className="p-3 rounded-lg flex justify-between text-nowrap items-center border bg-white cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {selectedTag}
                <div className="pb-2">
                    <FaSortDown className="text-gray-500" />
                </div>
            </div>

            {isOpen && (
                <ul className="absolute fadeIn bg-white border rounded-lg w-full mt-1 shadow-md">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="px-3 text-nowrap py-2 transition-all duration-500 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TagsDropdown;
