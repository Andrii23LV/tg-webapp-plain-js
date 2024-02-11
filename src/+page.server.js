import { redirect } from '@sveltejs/kit';

export function load({ startapp }) {
        if (startapp) {
                redirect(307, `/contacts?id=${startapp}`);
        }
}