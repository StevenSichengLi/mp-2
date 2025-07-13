export interface JokeAttributes {
    error: boolean;
    category: string;
    type: "twopart" | "single";
    // variables marked with ? are optional
    setup?: string;         // only present if  "twopart"
    delivery?: string;      // only present if "twopart"
    joke?: string;          // only present if "single"
    flags: {
        nsfw: boolean;
        religious: boolean;
        political: boolean;
        racist: boolean;
        sexist: boolean;
        explicit: boolean;
    };
    safe: boolean;
    id: number;
    lang: string;
}