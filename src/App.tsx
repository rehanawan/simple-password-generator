import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { generateRandomPassword } from './paracet/utils.ts';
import { PasswordInput } from './components/PasswordInput.tsx';
import { PasswordOptions } from './components/PasswordOptions.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [length, setLength] = useState<number>(8);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] =
    useState<boolean>(false);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');

  const handleGeneratePassword = useCallback(() => {
    const newPassword = generateRandomPassword({
      length,
      includeSpecialCharacters,
      includeNumbers,
    });
    setPassword(newPassword);
  }, [length, includeSpecialCharacters, includeNumbers]);

  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  return (
    <div className={'flex h-full flex-col'}>
      <div className='flex h-full flex-col items-center justify-center'>
        <h1 className='glass my-5 rounded text-center text-2xl font-bold text-[#307473]'>
          Simplest Password Generator
        </h1>
        <div className='glass flex w-full max-w-4xl flex-col justify-between rounded-lg text-[#F9F9F9]'>
          <PasswordInput password={password} />
          <PasswordOptions
            length={length}
            setLength={setLength}
            includeSpecialCharacters={includeSpecialCharacters}
            setIncludeSpecialCharacters={setIncludeSpecialCharacters}
            includeNumbers={includeNumbers}
            setIncludeNumbers={setIncludeNumbers}
          />
          <button
            onClick={handleGeneratePassword}
            className='h-12 w-1/3 cursor-pointer self-center rounded bg-[#307473]'
          >
            Generate
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
