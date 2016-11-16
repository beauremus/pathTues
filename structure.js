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
        experience: "number",
        class: [
            {
                name: "class name",
                level: "number",
                ranksPerLv: "number",
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
                specials: [
                    {
                        type: "reference",
                        name: "special name",
                        level: "number"
                    }
                ],
                bab: [
                    {
                        add: [
                            "number"
                        ],
                        level: "number"
                    }
                ],
                saves: {
                    fort: [
                        {
                            add: "number",
                            level: "number"
                        }
                    ],
                    ref: [
                        {
                            add: "number",
                            level: "number"
                        }
                    ],
                    will: [
                        {
                            add: "number",
                            level: "number"
                        }
                    ]
                }
            }
        ],
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
        bab: "number", //calculate
        saves: {
            fort: "number", //calculate
            ref: "number", //calculate
            will: "number" //calculate
        },
        feats: [
            {
                name: "feat name",
                level: "level adopted",
                type: "base/class"
            }
        ],
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
                    damage: {
                        dice: "number",
                        die: "number",
                        ability: "ability tag"
                    },
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
                    name: "unique identifier",
                    type: "wagon/ship",
                    location: "reference",
                    speed: "in feet",
                    size: { //in feet
                        length: "number",
                        width: "number"
                    },
                    capacity: {
                        personnel: "number",
                        goods: "in tons"
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
                    length: "number",
                    width: "number"
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
    feat: [
        {
            name: "feat name",
            description: "text description"
        }
    ],
    talent: [
        {
            name: "talent name",
            description: "text description"
        }
    ],
    classFeature: [
        {
            name: "feature name",
            description: "text description"
        }
    ]
}
