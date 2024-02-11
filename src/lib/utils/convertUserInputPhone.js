export const convertUserInputPhone = (phone) => {
    const cleanedString = phone.replace(/[-\s]/g, '');

    const phoneWithPlus = cleanedString.startsWith('+') ? cleanedString : '+' + cleanedString;

    return phoneWithPlus;
};