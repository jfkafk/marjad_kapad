export interface TrainingInfo {
    title: string;
    description: string[];
    schedule?: string;
    location?: string;
    price?: string;
}

export const trainings: TrainingInfo[] = [
    {
        title: "Veepäästetreeningud",
        description: [
            "Veepäästetreeningud toimuvad suveperioodil (tavaliselt maist septembrini) erinevates veekogudes Lõuna-Eestis.",
            "Trennides õpetame koertele ujumist, esemete toomist veest, paadi vedamist, uppuja päästmist ja palju muud.",
            "Oodatud on kõik koerad, olenemata tõust ja vanusest. Peamine on koera ja omaniku soov vees tegutseda.",
            "Treeningud toimuvad gruppides, vastavalt koerte oskustasemele."
        ],
        schedule: "Teisipäeviti ja neljapäeviti kell 18:00",
        location: "Pagari järv / Saadjärv (täpne asukoht lepitakse kokku grupis)"
    },
    {
        title: "Kuulekuskoolitus",
        description: [
            "Lisaks veepäästele pakume ka kuulekuskoolitust, mis on aluseks igasugusele koeraspordile.",
            "Kuulekuskoolituses õpetame koerale põhilisi käsklusi (istu, lama, siia, kõrval jne) ja parandame koera ja omaniku vahelist koostööd.",
            "Koolitused toimuvad aastaringselt."
        ],
        location: "Tartu"
    }
];
