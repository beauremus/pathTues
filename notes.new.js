{
    game: {
        advancement: "fast"
    },
    party: {
        company: { //optional
            name: "Infernal Investigators Inc",
            tagline: "Our Business is Showing Devils the Business"
        },
        members: [
            {
                name: "Thragg",
                player: "Jack Harrison",
                status: "deceased"
            },
            {
                name: "Argquen",
                player: "Patrick",
                status: "active"
            },
            {
                name: "Dante Dandalo",
                player: "Kent Smith",
                status: "active"
            },
            {
                name: "Kamish?",
                player: "NPC",
                status: "active"
            },
        ]
    },
    character: {
        name: "Angus Thrail",
        player: "Beau Harrison",
        class: {
            name: "rogue",
            experience: 46000,
            specials: [
                {
                    type: "reference",
                    name: "special name"
                }
            ]
        },
        race: {
            name: "human",
            specials: [
                {
                    type: "reference",
                    name: "special name"
                }
            ]
        },
        abilities: {
            str: "number",
            dex: "number",
            con: "number",
            int: "number",
            wis: "number",
            cha: "number"
        },
        feats: {
            max: 5,
            feat: [
                "feat name"
            ]
        },
        skills: {
            max: "number",
            skill: [
                {
                    name: "skill name",
                    class: "boolean",
                    ranks: "number"
                }
            ]
        },
        property: {
            money: {
                platinum: 0,
                gold: 1500,
                silver: 0,
                copper: 0
            },
            weapons: [
                {
                    name: "descriptor",
                    type: "s/p/b",
                    crit: {
                        range: "number",
                        multiplier: "number"
                    }
                }
            ],
            armor: {
                type: "light/medium/heavy",
                ac: "number",
                shield: "number"
            },
            accessories: [
                {
                    name: "unique identifier"
                }
            ],
            vehicles: [
                {
                    name: "Kyra",
                    type: "ship",
                    location: "Chiwakoth",
                    speed: "in squares",
                    size: {
                        actual: { //optional
                            length: {
                                amount: "number",
                                unit: "unit abbreviation"
                            },
                            width: {
                                amount: "number",
                                unit: "unit abbreviation"
                            }
                        },
                        grid: {
                            length: "number of squares",
                            width: "number of square"
                        }
                    }
                }
            ],
            land: [
                "location reference"
            ]
        }
    },
    notes: {
        locations: [
            {
                name: "Owlensfall",
                type: "town",
                location: "", //optional
                size: {
                    actual: { //optional
                        length: {
                            amount: "number",
                            unit: "unit abbreviation"
                        },
                        width: {
                            amount: "number",
                            unit: "unit abbreviation"
                        }
                    },
                    grid: {
                        length: "number of squares",
                        width: "number of square"
                    }
                }
                reputation: "Mayor"
            },
            {
                name: "Chiwakoth",
                type: "town",
                location: "", //optional
                size: {
                    actual: { //optional
                        length: {
                            amount: "number",
                            unit: "unit abbreviation"
                        },
                        width: {
                            amount: "number",
                            unit: "unit abbreviation"
                        }
                    },
                    grid: {
                        length: "number of squares",
                        width: "number of square"
                    }
                }
                reputation: ""
            },
            {
                name: "Baron's town",
                type: "town",
                location: "reference", //optional
                size: {
                    actual: { //optional
                        length: {
                            amount: "number",
                            unit: "unit abbreviation"
                        },
                        width: {
                            amount: "number",
                            unit: "unit abbreviation"
                        }
                    },
                    grid: {
                        length: "number of squares",
                        width: "number of square"
                    }
                }
                reputation: "Hero"
            },
        ],
        npcs: [
            {
                name: "npc name",
                location: "reference",
                reputation: "descriptor"
            }
        ]
    },
    feats: [
        {
            name: "feat name",
            description: "text description"
        }
    ],
    talents: [
        {
            name: "talent name",
            description: "text description"
        }
    ]
}
