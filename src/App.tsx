import { useCallback, useState } from 'react';
import { House, NewspaperClipping, GearSix } from '@phosphor-icons/react';

import { Drawer } from './Drawer.tsx';

const App = () => {
    const [open, setOpen] = useState(false);
    const handleClick = useCallback(() => {
        setOpen(!open);
    }, [open]);
    const handleDismiss = useCallback(() => {
        setOpen(false);
    }, []);
    return (
        <div className="flex flex-col gap-3 text-orange-600">
            <button
                className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                onClick={handleClick}
            >
                Toggle drawer
            </button>
            <Drawer
                isOpen={open}
                className="w-60 bg-orange-600 p-3"
                onDismiss={handleDismiss}
            >
                <nav>
                    <h2 className="mb-2 ml-2 text-xl font-semibold text-white">
                        Navigation links:
                    </h2>
                    <ul>
                        <li className="">
                            <a
                                className="flex w-full items-center gap-3 rounded-md p-2 text-white hover:bg-gray-600/30"
                                href="#"
                            >
                                <House
                                    size={24}
                                    weight="fill"
                                    color="#FFFFFF"
                                />
                                <span>Main page</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex w-full items-center gap-3 rounded-md p-2 text-white hover:bg-gray-600/30"
                                href="#"
                            >
                                <NewspaperClipping
                                    size={24}
                                    weight="fill"
                                    color="#FFFFFF"
                                />
                                <span>News</span>
                            </a>
                        </li>
                        <li>
                            <a
                                className="flex w-full items-center gap-3 rounded-md p-2 text-white hover:bg-gray-600/30"
                                href="#"
                            >
                                <GearSix
                                    size={24}
                                    weight="fill"
                                    color="#FFFFFF"
                                />
                                <span>Settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Drawer>
        </div>
    );
};

export default App;
