export interface ICoffee {
    _id:            string;
    id:             number;
    name:           string;
    description:    string;
    price:          number;
    region:         string;
    weight:         number;
    flavor_profile: string[];
    grind_option:   GrindOption[];
    roast_level:    number;
    image_url:      string;
}

export enum GrindOption {
    Cafetiere = "Cafetiere",
    Espresso = "Espresso",
    Filter = "Filter",
    FrenchPress = "French press",
    GrindOptionWholeBean = "Whole bean",
    PourOver = "Pour Over",
    WholeBean = "Whole Bean",
}
