import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
    translations: {
        uk: { lang },
        ru: { lang },
    },
    loaders: [
        {
            locale: 'uk',
            key: 'toast-success',
            loader: async () => (await import('./uk/toast-success.json')).default,
        },
        {
            locale: 'uk',
            key: 'menu',
            loader: async () => (await import('./uk/menu.json')).default,
        },
        {
            locale: 'ru',
            key: 'toast-success',
            loader: async () => (await import('./ru/toast-success.json')).default,
        },
        {
            locale: 'ru',
            key: 'menu',
            loader: async () => (await import('./ru/menu.json')).default,
        },
    ],
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));