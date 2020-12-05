import React from "react";

interface IProps {}

const Header: React.FC<IProps> = () => {
    return (
        <div className="h-three bg-checkBg  text-white py-12 pb-12">
            <div className="w-90 mx-auto">
                <div className=" mb-6 flex justify-between items-center w-full">
                    <h1 className="text-2xl tracking-one font-bold">TODO</h1>
                    <button
                        className="text-white w-6 h-6 inline-block"
                        onClick={() => alert()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                        >
                            <path d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
                        </svg>
                    </button>
                </div>
                <form className="flex items-center bg-white p-4 rounded-md">
                    <span className="w-6 h-6 border border-primaryBrightBlue rounded-full mr-4" />
                    <input
                        type="text"
                        className="font-light text-sm text-gray-900 flex-1 h-full"
                        placeholder="Create a new todo..."
                    />
                </form>
            </div>
        </div>
    );
};

export default Header;
