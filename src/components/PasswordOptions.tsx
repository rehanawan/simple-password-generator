// PasswordOptions.tsx
import React from 'react';
import {fetchRandomName} from "../paracet/utils.ts";

interface PasswordOptionsProps {
    length: number;
    setLength: (length: number) => void;
    includeSpecialCharacters: boolean;
    setIncludeSpecialCharacters: (include: boolean) => void;
    includeNumbers: boolean;
    setIncludeNumbers: (include: boolean) => void;
    yourName: string;
    includeYourName: boolean;
    setIncludeYourName: (include: boolean) => void;
    includeRandomName: boolean;
    setIncludeRandomName: (include: boolean) => void;
    setYourName: (name: string) => void;
}

export const PasswordOptions: React.FC<PasswordOptionsProps> = ({
                                                                    length,
                                                                    setLength,
                                                                    includeSpecialCharacters,
                                                                    setIncludeSpecialCharacters,
                                                                    includeNumbers,
                                                                    setIncludeNumbers,
                                                                    yourName,
                                                                    includeYourName,
                                                                    setIncludeYourName,
                                                                    includeRandomName,
                                                                    setIncludeRandomName,
                                                                    setYourName,
                                                                }) => {

    const handleYourNameToggle = () => {
        setIncludeYourName(!includeYourName);
        setIncludeRandomName(false);
        if (!includeYourName) {
            const name = prompt("Please enter your name") || "";
            setYourName(name);
        }
    };

    const handleRandomNameToggle = async () => {
        setIncludeRandomName(!includeRandomName);
        setIncludeYourName(false);
        if (!includeRandomName) {
            const randomName = await fetchRandomName();
            setYourName(randomName);
        }
    };

    return (
        <div className="flex flex-col items-center justify-evenly h-3/5">
            <div className="flex items-center">
                <input
                    className="mx-1"
                    type="range"
                    min={8}
                    max={20}
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
                <span>Length: {length}</span>
            </div>
            <div className="flex items-center">
                <input
                    className="mx-1"
                    type="checkbox"
                    checked={includeSpecialCharacters}
                    onChange={() => setIncludeSpecialCharacters(!includeSpecialCharacters)}
                />
                <span>Special Characters</span>
            </div>
            <div className="flex items-center">
                <input
                    className="mx-1"
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                <span>Numbers</span>
            </div>
            <div className="flex items-center">
                <input
                    className="mx-1"
                    type="checkbox"
                    checked={includeYourName}
                    onChange={handleYourNameToggle}
                />
                <span>Your Name</span>
            </div>
            <div className="flex items-center">
                <input
                    className="mx-1"
                    type="checkbox"
                    checked={includeRandomName}
                    onChange={handleRandomNameToggle}
                />
                <span>Random Name</span>
            </div>
            {(includeYourName || includeRandomName) && <span>{yourName}</span>}
        </div>
    );
};
