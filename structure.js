{
    game: {
        advancement: "slow/medium/fast"
    },
    party: {
        company: { //optional
            name: "company name",
            tagline: "company tagline"
        },
        members: [
            {
                name: "character name",
                player: "playerName/NPC",
                status: "active/inactive/deceased"
            }
        ]
    },
    character: {
        name: "character name",
        player: "player name",
        class: {
            name: "class name",
            experience: "number",
            specials: [
                {
                    type: "reference",
                    name: "special name"
                }
            ]
        },
        race: {
            name: "race name",
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
            max: "number",
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
                platinum: "number",
                gold: "number",
                silver: "number",
                copper: "number"
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
            accessories: [],
            vehicles: [
                {
                    name: "unique identifier",
                    type: "wagon/ship",
                    location: "reference",
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
                name: "unique identifier",
                type: "town/building/room",
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
                reputation: "descriptor"
            }
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
