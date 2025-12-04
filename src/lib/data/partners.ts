export interface Partner {
    name: string;
    logo?: string;
    website?: string;
    description?: string;
}

export const partners: Partner[] = [
    {
        name: "Eesti Newfoundlandi Koerte ja Landseeride Tõuühing",
        website: "",
        description: "Meie hea koostööpartner, kellega koos korraldame üritusi ja koolitusi."
    },
    {
        name: "Eesti Kennelliit",
        website: "https://kennelliit.ee",
        description: "Eesti koeranduse katusorganisatsioon."
    },
    {
        name: "Päästeliit",
        website: "https://paasteliit.ee",
        description: "Vabatahtlikke päästjaid ühendav organisatsioon."
    }
];
