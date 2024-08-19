
import React, { useState, useCallback } from 'react';
import './App.css';
import {generateRandomPassword} from "./paracet/utils.ts";
import {PasswordInput} from "./components/PasswordInput.tsx";
import {PasswordOptions} from "./components/PasswordOptions.tsx";
const App: React.FC = () => {
    const [length, setLength] = useState<number>(8);
    const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState<boolean>(false);
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [yourName, setYourName] = useState<string>("");
    const [includeYourName, setIncludeYourName] = useState<boolean>(false);
    const [includeRandomName, setIncludeRandomName] = useState<boolean>(false);

    const handleGeneratePassword = useCallback(() => {
        const newPassword = generateRandomPassword({
            length,
            includeSpecialCharacters,
            includeNumbers,
            yourName,
            includeYourName,
            includeRandomName,
        });
        setPassword(newPassword);
    }, [length, includeSpecialCharacters, includeNumbers, yourName, includeYourName, includeRandomName]);

    return (
        <div
            className="bg-cover bg-center h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            <h1 className="my-5 text-2xl font-bold text-center rounded glass text-[#307473]">
                Password Generator
            </h1>
            <div className="glass flex flex-col justify-between h-2/5 w-11/12 p-3 rounded-lg text-[#F9F9F9]">
                <PasswordInput password={password} />
                <PasswordOptions
                    length={length}
                    setLength={setLength}
                    includeSpecialCharacters={includeSpecialCharacters}
                    setIncludeSpecialCharacters={setIncludeSpecialCharacters}
                    includeNumbers={includeNumbers}
                    setIncludeNumbers={setIncludeNumbers}
                    yourName={yourName}
                    includeYourName={includeYourName}
                    setIncludeYourName={setIncludeYourName}
                    includeRandomName={includeRandomName}
                    setIncludeRandomName={setIncludeRandomName}
                    setYourName={setYourName}
                />
                <button
                    onClick={handleGeneratePassword}
                    className="bg-[#307473] w-1/3 self-center h-12 rounded cursor-pointer"
                >
                    Generate
                </button>
            </div>
        </div>
    );
};

export default App;
