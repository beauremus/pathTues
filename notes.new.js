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
                name: "Kamish",
                player: "NPC",
                status: "active"
            },
            {
                name: "Rantar Maycorp",
                player: "NPC",
                status: "active"
            },
            {
                name: "Fosum Kall",
                player: "NPC",
                status: "active"
            },
            {
                name: "Kastagan Folson",
                player: "NPC",
                status: "active"
            },
            {
                name: "Tsak Nurn",
                player: "NPC",
                status: "active"
            },
            {
                name: "Salama Foluga",
                player: "Jack Harrison",
                status: "active"
            },
        ]
    },
    character: {
        name: "Angus Thrail",
        player: "Beau Harrison",
        experience: 63500,
        health: 73,
        class: [
            {
                name: "rogue",
                level: 8,
                ranksPerLv: 8,
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
                        type: "talent",
                        name: "Finesse Rogue",
                        level: 0
                    },
                    {
                        type: "talent",
                        name: "Sniper's Eye",
                        level: 0
                    },
                    {
                        type: "talent",
                        name: "Black Market Connections",
                        level: 0
                    },
                    {
                        type: "talent",
                        name: "Black Market Connections",
                        level: 0
                    }
                ],
                bab: [
                    {
                        add: [1],
                        level: 2
                    },
                    {
                        add: [1],
                        level: 3
                    },
                    {
                        add: [1],
                        level: 4
                    },
                    {
                        add: [1],
                        level: 6
                    },
                    {
                        add: [1],
                        level: 7
                    },
                    {
                        add: [1,1],
                        level: 8
                    },
                ],
                saves: {
                    fort: [
                        {
                            add: 1,
                            level: 3
                        },
                        {
                            add: 1,
                            level: 6
                        }
                    ],
                    ref: [
                        {
                            add: 2,
                            level: 1
                        },
                        {
                            add: 1,
                            level: 2
                        },
                        {
                            add: 1,
                            level: 6
                        },
                        {
                            add: 1,
                            level: 8
                        }
                    ],
                    will: [
                        {
                            add: 1,
                            level: 3
                        },
                        {
                            add: 1,
                            level: 6
                        }
                    ]
                }
            },
            {
                name: "Noble Scion",
                level: 1,
                ranksPerLv: 6,
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
                        type: "classFeature",
                        name: "Affluent"
                    }
                ],
                bab: [],
                saves: {
                    fort: [],
                    ref: [],
                    will: [
                        {
                            add: 1,
                            level: 1
                        }
                    ]
                }
            }
        ],
        race: {
            name: "human",
            specials: []
        },
        bab: [6,1],
        saves: {
            fort: 2,
            ref: 6,
            will: 3
        },
        abilities: {
            str: 12,
            dex: 17,
            con: 10,
            int: 13
            wis: 8,
            cha: 18
        },
        feats: [ // TODO: finish choosing feats
            {
                name: "Combat Advice",
                level: 1,
                type: "base"
            },
            {
                name: "feat name",
                level: 1,
                type: "base"
            },
            {
                name: "feat name",
                level: 3,
                type: "base"
            },
            {
                name: "feat name",
                level: 5,
                type: "base"
            },
            {
                name: "Leadership",
                level: 7,
                type: "base"
            },
            {
                name: "feat name",
                level: 9,
                type: "base"
            }
        ],
        property: {
            money: {
                platinum: 0,
                gold: 2250,
                silver: 0,
                copper: 0
            },
            weapons: [
                {
                    name: "Dagger",
                    type: "s/p",
                    damage: {
                        dice: 1,
                        die: 4,
                        ability: "dex"
                    },
                    crit: {
                        range: 19,
                        multiplier: 2
                    }
                },
                {
                    name: "Dagger",
                    type: "s/p",
                    damage: {
                        dice: 1,
                        die: 4,
                        ability: "dex"
                    },
                    crit: {
                        range: 19,
                        multiplier: 2
                    }
                }
                // TODO: finish adding weapons
            ],
            armor: { // TODO: add armor
                type: "light/medium/heavy",
                ac: "number",
                shield: "number"
            },
            accessories: [ // TODO: add accessories
                {
                    name: "unique identifier"
                }
            ],
            vehicles: [
                {
                    name: "Kyra",
                    type: "ship",
                    location: "Chiwakoth",
                    speed: 150,
                    size: { //in feet
                        length: 100,
                        width: 20
                    },
                    capacity: {
                        personnel: 160,
                        goods: 50
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
                location: "Ospor", //optional
                size: { //TODO: ask about size of Owlensfall
                    length: 0,
                    width: 0
                }
                reputation: "Mayor"
            },
            {
                name: "Chiwakoth",
                type: "town",
                location: "Ospor", //optional
                size: { //TODO: ask about size of Chiwakoth
                    length: 0,
                    width: 0
                },
                reputation: ""
            },
            {
                name: "Swordfall",
                type: "town",
                location: "Ospor", //optional
                size: { //TODO: ask about size of Swordfall
                    length: 0,
                    width: 0
                },
                reputation: "Hero"
            },
            {
                name: "Ospor",
                type: "Island Kingdom",
                location: "", //optional
                size: { //TODO: ask about size of Ospor
                    length: 0,
                    width: 0
                }
                reputation: ""
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
            name: "Leadership",
            description: "This feat enables you to attract a loyal cohort and a number of devoted subordinates who assist you. A cohort is generally an NPC with class levels, while followers are typically lower level NPCs."
        },
        {
            name: "Combat Advice",
            description: "As a move action, you can offer useful advice to an ally engaged in combat at just the right moment. Designate an enemy; your ally gains a +2 competence bonus on her next attack roll against that enemy. For your ally to benefit from this feat, you must be able to clearly see your ally and the designated enemy, and your ally must be able to hear you."
        }
    ],
    talent: [
        {
            name: "Black Market Connections",
            description: "A rogue with this talent gains better access to magic items from black market connections. She treats every settlement as one size greater (see Table: Settlement Statistics) for the purpose of determining the gp limit of the base value of items for sale, as well as the number of minor, medium, and major magic items for sale in the settlement. If the settlement is already a metropolis, all minor and medium magic items are for sale, as well as 3d8 major magic items. With a successful Diplomacy check, the rogue can treat the settlement as two sizes larger. If the settlement is already a metropolis and she succeeds at the check, all magic items are for sale. If the settlement is already a large city and she succeeds at the check, all minor and medium magic items are for sale, as well as 3d8 major magic items. With a successful check, the rogue can also sell stolen items on the black market. If the check fails by 5 or more, the rogue does something to spook the market, and treats the city as normal for 1 week. Furthermore, those in control of the black market may alert the authorities to the rogue’s presence in an act of reprisal for spooking the market or to divert attention away from their illicit activities."
        },
        {
            name: "Sniper's Eye",
            description: "A rogue with this talent can apply her sneak attack damage on ranged attacks targeting foes within 30 feet that benefit from concealment. Foes with total concealment are still immune."
        },
        {
            name: "Finesse Rogue",
            description: "You are trained in using your agility in melee combat, as opposed to brute strength. Benefit: With a light weapon, elven curve blade, rapier, whip, or spiked chain made for a creature of your size category, you may use your Dexterity modifier instead of your Strength modifier on attack rolls. If you carry a shield, its armor check penalty applies to your attack rolls. Special: Natural weapons are considered light weapons."
        },
        {
            name: "Black Market Connections",
            description: "A rogue with this talent gains better access to magic items from black market connections. She treats every settlement as one size greater (see Table: Settlement Statistics) for the purpose of determining the gp limit of the base value of items for sale, as well as the number of minor, medium, and major magic items for sale in the settlement. If the settlement is already a metropolis, all minor and medium magic items are for sale, as well as 3d8 major magic items. With a successful Diplomacy check, the rogue can treat the settlement as two sizes larger. If the settlement is already a metropolis and she succeeds at the check, all magic items are for sale. If the settlement is already a large city and she succeeds at the check, all minor and medium magic items are for sale, as well as 3d8 major magic items. With a successful check, the rogue can also sell stolen items on the black market. If the check fails by 5 or more, the rogue does something to spook the market, and treats the city as normal for 1 week. Furthermore, those in control of the black market may alert the authorities to the rogue’s presence in an act of reprisal for spooking the market or to divert attention away from their illicit activities."
        }
    ],
    classFeature: [
        {
            name: "Affluent",
            description: "At each level, a noble scion gains a stipend worth a number of gold pieces equal to 750 multiplied by his class level. (He gains 750 gp at 1st level, an additional 1,500 gp at 2nd level, and so on.)"
        },
        {
            name: "Sneak Attack",
            description: "If a rogue can catch an opponent when he is unable to defend himself effectively from her attack, she can strike a vital spot for extra damage. The rogue's attack deals extra damage anytime her target would be denied a Dexterity bonus to AC (whether the target actually has a Dexterity bonus or not), or when the rogue flanks her target. This extra damage is 1d6 at 1st level, and increases by 1d6 every two rogue levels thereafter. Should the rogue score a critical hit with a sneak attack, this extra damage is not multiplied. Ranged attacks can count as sneak attacks only if the target is within 30 feet. With a weapon that deals nonlethal damage (like a sap, whip, or an unarmed strike), a rogue can make a sneak attack that deals nonlethal damage instead of lethal damage. She cannot use a weapon that deals lethal damage to deal nonlethal damage in a sneak attack, not even with the usual –4 penalty. The rogue must be able to see the target well enough to pick out a vital spot and must be able to reach such a spot. A rogue cannot sneak attack while striking a creature with concealment."
        },
        {
            name: "Trapfinding",
            description: "A rogue adds 1/2 her level to Perception skill checks made to locate traps and to Disable Device skill checks (minimum +1). A rogue can use Disable Device to disarm magic traps."
        },
        {
            name: "Evasion",
            description: "At 2nd level and higher, a rogue can avoid even magical and unusual attacks with great agility. If she makes a successful Reflex saving throw against an attack that normally deals half damage on a successful save, she instead takes no damage. Evasion can be used only if the rogue is wearing light armor or no armor. A helpless rogue does not gain the benefit of evasion."
        },
        {
            name: "Trap Sense",
            description: "At 3rd level, a rogue gains an intuitive sense that alerts her to danger from traps, giving her a +1 bonus on Reflex saves made to avoid traps and a +1 dodge bonus to AC against attacks made by traps. These bonuses rise to +2 when the rogue reaches 6th level, to +3 when she reaches 9th level, to +4 when she reaches 12th level, to +5 at 15th, and to +6 at 18th level. Trap sense bonuses gained from multiple classes stack."
        },
        {
            name: "Uncanny Dodge",
            description: "Starting at 4th level, a rogue can react to danger before her senses would normally allow her to do so. She cannot be caught flat-footed, nor does she lose her Dex bonus to AC if the attacker is invisible. She still loses her Dexterity bonus to AC if immobilized. A rogue with this ability can still lose her Dexterity bonus to AC if an opponent successfully uses the feint action (see Combat) against her."
        },
        {
            name: "Improved Uncanny Dodge",
            description: "A rogue of 8th level or higher can no longer be flanked. This defense denies another rogue the ability to sneak attack the character by flanking her, unless the attacker has at least four more rogue levels than the target does. If a character already has uncanny dodge (see above) from another class, the levels from the classes that grant uncanny dodge stack to determine the minimum rogue level required to flank the character."
        }
    ]
}
// TODO: integrate Leadership details
// TODO: integrate roles
// TODO:
