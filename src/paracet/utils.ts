import {GeneratePasswordOptions} from "./types.ts";
export const getRandomCharacter = (characterPool: string): string => {
    return characterPool.charAt(Math.floor(Math.random() * characterPool.length));
};
export const fetchRandomName = async (): Promise<string> => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    return data.results[0].name.first;
};

export const generateRandomPassword = ({
                                           length,
                                           includeSpecialCharacters,
                                           includeNumbers,
                                           yourName,
                                           includeYourName,
                                           includeRandomName,
                                       }: GeneratePasswordOptions): string => {
    let characterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=";
    let password = "";

    if (includeNumbers) characterPool += digits;
    if (includeSpecialCharacters) characterPool += specialCharacters;

    if (includeYourName || includeRandomName) {
        password = yourName;
        while (password.length < length) {
            password += getRandomCharacter(characterPool);
        }
    } else {
        for (let i = 0; i < length; i++) {
            password += getRandomCharacter(characterPool);
        }
    }

    return password;
};