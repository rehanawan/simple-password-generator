import React, { useRef } from 'react';

interface PasswordInputProps {
    password: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({ password }) => {
    const passwordRef = useRef<HTMLInputElement>(null);

    const copyPasswordToClipboard = () => {
        if (passwordRef.current) {
            passwordRef.current.select();
            navigator.clipboard.writeText(passwordRef.current.value).then(() => {
                alert('Password copied to clipboard');
            }   );

        }
    };

    return (
        <div className="flex justify-center">
            <input
                readOnly
                value={password}
                ref={passwordRef}
                placeholder="Password"
                className="w-2/3 h-10 my-5 ml-5 outline-none text-lg border p-2 text-[#474350]"
            />
            <button
                onClick={copyPasswordToClipboard}
                className="bg-[#F4B942] h-10 w-1/3 my-5 mr-5 cursor-pointer"
            >
                Copy
            </button>
        </div>
    );
};
