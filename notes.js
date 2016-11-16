        leadership: {
            score: 15,
            followers: {
                level1: {
                    max: 20,
                    current: 0
                },
                level2: {
                    max: 2,
                    current: 1
                },
                level3: {
                    max: 1,
                    current: 0
                }
            },
            cohort: {
                level: 6
            }
        },
        roles: [
            "Mayor of Owlensfall",
            "CEO of Infernal Investigators Inc"
        ]
    },
    ship: {
        name: "Kyra",
        size: {
            length: 100,
            width: 20
        },
        speed: {
            amount: 150,
            unit: "feet"
        },
        capacity: {
            people: 160,
            cargo: {
                amount: 50,
                unit: "tons"
            }
        },
        masts: 1,
        decks: 2,
        rooms: [
            "captain's quaters",
            "fore storage",
            "mid ship",
            "hidden painting room",
            "fore sleeping for two",
            "half-loft for cook",
            "hammocks",
            "ore room"
        ],
        equipment: [
            "linens",
            "rations",
            "rope",
            "sailing tools",
            "ores"
        ],
        rations: {
            people: 100,
            time: {
                amount: 2,
                unit: "week"
            }
        },
        captainsQuarters: {
            rapiers: 80,
            desk: {
                type: "large",
                amount: 1
            },
            painting: {
                description: "gold man",
                special: "secret room"
            },
            bed: "silken king",
            ale: {
                amount: 5,
                unit: "kegs"
            }
        },
        weapons: {
            cannons: 2
        }
    },
    cohorts: [
        {
            class: "bard",
            level: 2
        }
    ]
}
