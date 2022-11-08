let deck = [
    {
        "id": "swsh3-19",
        "name": "Charizard V",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "V"
        ],
        "hp": "220",
        "types": [
            "Fire"
        ],
        "rules": [
            "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
            {
                "name": "Claw Slash",
                "cost": [
                    "Colorless",
                    "Colorless",
                    "Colorless"
                ],
                "convertedEnergyCost": 3,
                "damage": "80",
                "text": ""
            },
            {
                "name": "Fire Spin",
                "cost": [
                    "Fire",
                    "Fire",
                    "Colorless",
                    "Colorless"
                ],
                "convertedEnergyCost": 4,
                "damage": "220",
                "text": "Discard 2 Energy from this Pokémon."
            }
        ],
        "weaknesses": [
            {
                "type": "Water",
                "value": "×2"
            }
        ],
        "retreatCost": [
            "Colorless",
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 3,
        "image": "https://images.pokemontcg.io/swsh3/19.png"
    },
    {
        "id": "xyp-XY09",
        "name": "Garchomp-EX",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "EX"
        ],
        "hp": "170",
        "types": [
            "Dragon"
        ],
        "evolvesTo": [
            "M Garchomp-EX"
        ],
        "rules": [
            "Pokémon-EX rule: When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
            {
                "name": "Dual Chop",
                "cost": [
                    "Fighting",
                    "Colorless"
                ],
                "convertedEnergyCost": 2,
                "damage": "30×",
                "text": "Flip 2 coins. This attack does 30 damage times the number of heads."
            },
            {
                "name": "Power Blast",
                "cost": [
                    "Water",
                    "Fighting",
                    "Colorless"
                ],
                "convertedEnergyCost": 3,
                "damage": "120",
                "text": "Discard an Energy attached to this Pokémon."
            }
        ],
        "weaknesses": [
            {
                "type": "Fairy",
                "value": "×2"
            }
        ],
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "image": "https://images.pokemontcg.io/xyp/XY09.png",
    },
    {
        "id": "pgo-49",
        "name": "Dragonite V",
        "supertype": "Pokémon",
        "subtypes": [
            "Basic",
            "V"
        ],
        "hp": "230",
        "types": [
            "Dragon"
        ],
        "rules": [
            "V rule: When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards."
        ],
        "attacks": [
            {
                "name": "Hyper Beam",
                "cost": [
                    "Water",
                    "Lightning"
                ],
                "convertedEnergyCost": 2,
                "damage": "60",
                "text": "Discard an Energy from your opponent's Active Pokémon."
            },
            {
                "name": "Buster Tail",
                "cost": [
                    "Water",
                    "Lightning",
                    "Colorless"
                ],
                "convertedEnergyCost": 3,
                "damage": "160",
                "text": ""
            }
        ],
        "retreatCost": [
            "Colorless",
            "Colorless"
        ],
        "convertedRetreatCost": 2,
        "image": "https://images.pokemontcg.io/pgo/49.png" 
    }
]

export default deck