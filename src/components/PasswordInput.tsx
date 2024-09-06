import React, {useRef, useState} from 'react';
import {CheckCircleIcon, XMarkIcon} from "@heroicons/react/20/solid";

interface PasswordInputProps {
    password: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({password}) => {
    const passwordRef = useRef<HTMLInputElement>(null);
    const [copied, setCopied] = useState<boolean>(false);

    const copyPasswordToClipboard = () => {
        if (passwordRef.current) {
            passwordRef.current.select();
            navigator.clipboard.writeText(passwordRef.current.value).then(() => {
                console.log("Password copied to clipboard");
                setCopied(true);
            });

        }
    };

    return (

        <div>
            {copied && <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400"/>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">Successfully copied</p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                onClick={() => setCopied(false)}
                                type="button"
                                className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon aria-hidden="true" className="h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
            </label>
            <div className="mt-2 flex rounded-md shadow-sm">
                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                    <input
                        readOnly={true}
                        value={password}
                        ref={passwordRef}
                        id="password"
                        name="password"
                        type="text"
                        className="block w-full text-white rounded-none rounded-l-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                <button
                    onClick={copyPasswordToClipboard}
                    type="button"
                    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                    <svg
                        className="h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600"
                        fill="none" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path
                            d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
                            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M13.7475 16.2499L18.2475 16.2499" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <path d="M13.7475 19.2499L18.2475 19.2499" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"></path>
                        <g className="opacity-0">
                            <path d="M15.9975 5.99988L15.9975 3.99988" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M19.9975 5.99988L20.9975 4.99988" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                            <path d="M11.9975 5.99988L10.9975 4.99988" strokeWidth="1.5" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>

    )
        ;
};
