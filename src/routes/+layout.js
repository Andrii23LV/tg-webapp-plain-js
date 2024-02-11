export const ssr = false;

import { loadTranslations } from '$lib/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
    const webApp = window?.Telegram?.WebApp;
    const userRegion = webApp.initDataUnsafe.user?.language_code;

    const initialLocale = userRegion === 'ru' ? 'ru' : 'uk';

    await loadTranslations(initialLocale || 'uk');

    return {};
};