export const filterList = (inputList, inputText, filterKey) => {
    console.log({ inputList, inputText, filterKey })
    if (!inputText) return inputList;
    return inputList
        // .filter((item) => {
        //     const hasKey = (obj, key) => {
        //         return key.split('.').every((x) => {
        //             if (typeof obj !== 'object' || obj === null || !(x in obj)) return false;
        //             obj = obj[x];
        //             return true;
        //         });
        //     };

        //     // Перевірка, чи містить об'єкт ключ для фільтрації
        //     if (!hasKey(item, filterKey)) return false;

        //     // Отримання значення поля filterKey
        //     const value = filterKey.split('.').reduce((obj, key) => obj[key], item);
        //     const stringValue = String(value);

        //     // Перевірка, чи містить значення текст введений користувачем
        //     return (
        //         (typeof value === 'string' &&
        //             stringValue.toLowerCase().includes(inputText.toLowerCase())) ||
        //         (typeof value === 'number' && stringValue.includes(inputText))
        //     );
        // });
        .map((element) => {
            return {
                ...element, subElements: element.subElements.filter((subElement) => subElement[filterKey].toLowerCase().includes(inputText.toLowerCase()))
            }
        })
};
