import { GeneratePasswordOptions } from './types.ts';

export const getRandomCharacter = (characterPool: string): string => {
  return characterPool.charAt(Math.floor(Math.random() * characterPool.length));
};
export const generateRandomPassword = ({
  length,
  includeSpecialCharacters,
  includeNumbers,
}: GeneratePasswordOptions): string => {
  let characterPool =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzåøæÅØÆ';
  const digits = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=';
  let password = '';

  if (includeNumbers) characterPool += digits;
  if (includeSpecialCharacters) characterPool += specialCharacters;

  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(characterPool);
  }

  return password;
};
