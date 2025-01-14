import React, { useState } from 'react';
import { USER_DATA } from '../Data/DATA';

// Function to generate a random color from a set of colors
const getRandomColor = () => {
    const colors = [
        'bg-green-400',
        'bg-blue-400',
        'bg-red-400',
        'bg-yellow-400',
        'bg-purple-400',
        'bg-pink-400',
        'bg-teal-400',
        'bg-indigo-400',
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
};

const UserProfiles = () => {
    const [showAll, setShowAll] = useState(false);

    // Get the first four users and the remaining users
    const visibleUsers = USER_DATA.slice(0, 4);
    const remainingUsers = USER_DATA.slice(4);

    const handleClick = () => {
        setShowAll(true);
    };

    return (
        <div>
            <section className="select-none md:block hidden">
                <div className="flex min-h-16 px-4 py-2">
                    {visibleUsers.map((user) => (
                        <div key={user.id} className='relative group'>
                            <p className='-ml-4 z-20 text-sm hidden text-nowrap fadeIn absolute left-0 -top-7 group-hover:block'>
                                {user.firstName} {" "}
                                {user.lastName}
                            </p>
                            <span
                                className={`rounded-full -ml-4 z-20 group-hover:z-50 ${getRandomColor()} h-8 w-8 sm:h-[3.2rem] sm:w-[3.2rem] p-2 flex justify-center items-center border`}
                            >
                                {user.firstName.charAt(0).toUpperCase()}
                                {user.lastName.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    ))}
                    {showAll && remainingUsers.map((user) => (
                        <div key={user.id} className='relative group'>
                            <p className='-ml-4 z-20 text-sm hidden text-nowrap fadeIn absolute left-0 -top-7 group-hover:block'>
                                {user.firstName} {" "}
                                {user.lastName}
                            </p>
                            <span
                                className={`rounded-full -ml-4 z-20 group-hover:z-50 ${getRandomColor()} h-8 w-8 sm:h-[3.2rem] sm:w-[3.2rem] p-2 flex justify-center items-center border`}
                            >
                                {user.firstName.charAt(0).toUpperCase()}
                                {user.lastName.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    ))}
                    {/* Show the "2+" span if there are more than 4 users */}
                    {!showAll && remainingUsers.length > 0 && (
                        <div className='relative group'>
                            <p className='-ml-4 z-20 text-sm hidden text-nowrap fadeIn absolute left-0 -top-7 group-hover:block'>
                                Remaining Users
                            </p>
                            <span
                                className="rounded-full -ml-4 z-20 bg-zinc-50 h-8 w-8 sm:h-[3.2rem] sm:w-[3.2rem] p-2 flex justify-center items-center border cursor-pointer"
                                onClick={handleClick}
                            >
                                {remainingUsers.length}+ {/* Displays the number of remaining users */}
                            </span>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default UserProfiles;










{/* <span className="rounded-full  -ml-4 z-20 bg-green-800 h-8 w-8 sm:h-14 sm:w-14  flex justify-center items-center border">
                <img
                    className="w-full h-full rounded-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHx1c2VyfGVufDB8MHx8fDE2OTk0NjA4OTV8MA&ixlib=rb-4.0.3&q=80&w=1080"
                />
            </span> */}