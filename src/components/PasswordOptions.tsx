import React from 'react';

interface PasswordOptionsProps {
    length: number;
    setLength: (length: number) => void;
    includeSpecialCharacters: boolean;
    setIncludeSpecialCharacters: (include: boolean) => void;
    includeNumbers: boolean;
    setIncludeNumbers: (include: boolean) => void;

}

export const PasswordOptions: React.FC<PasswordOptionsProps> = ({
                                                                    length,
                                                                    setLength,
                                                                    includeSpecialCharacters,
                                                                    setIncludeSpecialCharacters,
                                                                    includeNumbers,
                                                                    setIncludeNumbers,
                                                                }) => {


    return (
        <div className="grid items-center gap-2 py-4">
            <div className="flex items-center gap-2">
                <label className={"flex gap-2 w-full"}>Length: {length}
                </label>
                <input
                    className="w-full"
                    type="range"
                    min={8}
                    max={20}
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value))}
                />
            </div>
            <div className="flex items-center">
                <label className={"flex items-center gap-2 w-full"}>
                <input
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    type="checkbox"
                    checked={includeSpecialCharacters}
                    onChange={() => setIncludeSpecialCharacters(!includeSpecialCharacters)}
                />
                    Special Characters</label>
            </div>
            <div className="flex items-center">
                <label className={"flex items-center gap-2"}>
                <input
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                    Numbers</label>
            </div>
        </div>
    );
};
