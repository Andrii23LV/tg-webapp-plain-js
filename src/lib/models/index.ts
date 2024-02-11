export interface Channel {
    id: number;
    name: string;
    autopost: boolean;
    archived: boolean;
}

export interface Location {
    city: string;
    region: string;
    country: string;
    parsing_id: 0,
    parsing_domain: string;
    subject: string;
}

export interface Location {
    city: string;
    region: string;
    country: string;
    parsing_id: 0,
    parsing_domain: string;
    subject: string;
}

interface Contact {
    name: string;
    value: string;
}

export type ModalFunctions = {
    handleFormData: (formData: FormData) => void;
    handleSelectIntervalClick: (type: '30' | '60' | null) => void;
    submitInterval: () => void;
    cancelInterval: () => void;
    submitForm: () => void;
    submitChannelForm: () => void;
    cancelForm: () => void;
    resetModalStates: () => void;
};

export type ModalFunctionsMain = {
    submitLocationForm: () => void;
    submitBotForm: () => void;
};

export type FormData = {
    text: string;
    image: File | null;
    contacts: Contact[];
};

export type ModalState = {
    idOrIdList: number | number[] | null;
    type: ModalType;
    formData: FormData;
    selectedInterval: '30' | '60' | null;
};

export type ModalStateMain = {
    type: ModalType;
    location: string | null;
    bot: string | null;
};

export type ModalType = 'auto' | 'handpost' | 'channel' | 'location' | 'bot' | 'autopost' | null;