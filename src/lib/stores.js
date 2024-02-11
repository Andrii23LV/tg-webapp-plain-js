// @ts-nocheck
// // src/lib/stores.js
import { writable } from 'svelte/store';

function createChannelsStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,

        updateOneOf: (updatedOne)=> update(oldData => {
            return oldData.map(item  => 
                item.id === updatedOne.id ? updatedOne : item
            );
        }),

        removeOne: (chatIdToRemove) => update(oldData => {
            return oldData.filter(item  => item.id !== chatIdToRemove);
        }),

        addChannel: (newChannel)=> update(oldData => [...oldData, newChannel]),

        setChannels: (channels) => set(channels),
    };
}
export const channelsStore = createChannelsStore();

function createUserStore() {
    const { subscribe, set } = writable(null);

    return {
        subscribe,

        setUser: (user) => set(user),
    };
}
export const userStore = createUserStore();
function createLocationGroupsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,

        setLocationGroups: (locationGroups) => set(locationGroups),
    };
}
export const locationGroupsStore = createLocationGroupsStore();

function createLocationsStore() {
    const { subscribe, set } = writable([]);

    return {
        subscribe,

        setLocations: (locations) => set(locations),
    };
}
export const locationsStore = createLocationsStore();

function createBotStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,

        removeOne: (chatIdToRemove) => update(oldData => {
            return oldData.filter(item  => item.id !== chatIdToRemove);
        }),

        addBot: (newBot)=> update(oldData => [...oldData, newBot]),

        setBots: (bots) => set(bots),
    };
}
export const botStore = createBotStore();

