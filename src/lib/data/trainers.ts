export interface Trainer {
    name: string;
    role: string;
    image?: string;
    description: string;
    email?: string;
    phone?: string;
}

export const trainers: Trainer[] = [
    {
        name: "Valvi Väli",
        role: "Peatreener",
        description: `Valvi Väli - kutseline ja vabatahtlik päästja,  ILS K9 instruktor, peatreener; 15+ aastat kogemust (kodulehel TASEMED: ILS-K9, peatreener)`
    },
    {
        name: "Toomas Tamm",
        role: "K9 instruktor",
        description: `Toomas Tamm - vabatahtlik II astme päästja; ILS K9 instruktor, ~10 aastat kogemust veepäästekoerte treenimisel (kodulehel TASEMED: ILS-K9, treener)`
    },
    {
        name: "Angela Leiaru",
        role: "K9 instruktor",
        description: `Angela Leiaru - vabatahtlik II astme päästja; ILS K9 instruktor, ~10 aastat kogemust veepäästekoerte treenimisel  (kodulehel TASEMED: ILS-K9, treener)`
    }
];
