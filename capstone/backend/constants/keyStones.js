const KEYSTONES = [
  {
    name: 'Electrocute',
    imageURL: '/assets/keystones/electrocute.webp',
    description:
      'Your next damaging ability against a champion will deal 28 − 42 (based on level) bonus magic damage after 1 second.',
    cooldown: {
      time: 8,
      unit: 'seconds',
    },
  },
  {
    name: 'Aery',
    imageURL: '/assets/keystones/aery.webp',
    description:
      'Basic attacks and abilities against an enemy champion signals Aery to dash to them, dealing 10 − 60 (based on level) (+ 20% bonus AD) (+ 10% AP) Attack damageMagic damage Adaptive damage. Heal power icon Healing, Hybrid resistances icon shielding, or buffing an ally signals Aery to dash to them, Hybrid resistances icon shielding them for 20 − 120 (based on level) (+ 40% bonus AD) (+ 20% AP) for 2 seconds.',
  },
  {
    name: 'Phase Rush',
    imageURL: '/assets/keystones/phase-rush.webp',
    description:
      'Hitting enemy champions with 3 separate attacks or abilities within 3 seconds grants (Melee role 40% − 60% / Ranged role 30% − 50%) (based on level) bonus movement speed and 25 basic ability haste for 3 seconds. Your basic ability remaining cooldowns are also reduced by 20%.',
    cooldown: {
      time: 12,
      unit: 'seconds',
    },
  },
  {
    name: 'Conqueror',
    imageURL: '/assets/keystones/conqueror.webp',
    description:
      'Hitting enemy champions with separate attacks or abilities will generate a stack lasting 6 seconds, refreshing on subsequent hits. Stacks expire by 1 every 0.5 seconds. Each stack grants 2 − 6 (based on level) bonus Attack Damage or 3 − 9 (based on level) Ability Power (Adaptive), stacking up to 6 times for a maximum 12 − 36 (based on level) bonus Attack Damage or 18 − 54 (based on level) Ability Power (Adaptive), upon which you gain (Melee role 8% / Ranged role 5%) omnivamp.',
    cooldown: {
      time: 12,
      unit: 'seconds',
    },
  },
  {
    name: 'Fleet Footwork',
    imageURL: '/assets/keystones/fleet-footwork.webp',
    description:
      'Moving and basic attacking generates Charges, up to 100. When fully Energized WR buff Energized, your next basic attack gains 100% attack speed, Heal power icon heal you for 15 − 85 (based on level) (+ 30% bonus AD) (+ 30% AP) and grants 20% bonus movement speed for 1 second.',
  },
  {
    name: 'Empowerment',
    imageURL: '/assets/keystones/empowerment.webp',
    description:
      'Basic attacks On-hit icon on-hit against enemy champions inflict a stack lasting 4 seconds, refreshing on subsequent hits, expiring upon attacking a new champion, and stacking up to 3 times. The third stack consumes them all to deal 40 − 180 (based on level) bonus Attack damageMagic damage adaptive damage and mark the target for 6 seconds, causing them to take 8% increased incoming damage and your basic attacks against them to deal 8 − 24 (based on level) bonus true damage.',
  },
  {
    name: 'Grasp of the Undying',
    imageURL: '/assets/keystones/grasp-of-the-undying.webp',
    description:
      'Entering combat generates one stack every second for the next 3 seconds. After reaching 3 stacks, your next basic attack within 7 seconds against an enemy champion consumes them all to deal bonus magic damage equal to (Melee role 3% / Ranged role 1.2%) of your maximum health (+ 20% AD) (+ 10% AP), Heal power icon heal you for (Melee role 2% / Ranged role 0.8%) of your maximum health, and permanently grant (Melee role 5 / Ranged role 2) bonus health.',
  },
  {
    name: 'Aftershock',
    imageURL: '/assets/keystones/aftershock.webp',
    description:
      'Immobilizing an enemy champion grants 35 (+ 80% bonus armor) bonus armor and 35 (+ 80% bonus magic resistance) bonus magic resistance for 2.5 seconds.',
    cooldown: {
      time: 35,
      unit: 'seconds',
    },
  },
  {
    name: 'Lethal Tempo',
    imageURL: '/assets/keystones/lethal-tempo.webp',
    description:
      'Your basic attacks on-attack against champions generate a stack lasting 6 seconds, refreshing on subsequent attacks. Each stack grants (Melee role 10% − 18% / Ranged role 7% − 15%) (based on level) bonus attack speed, stacking up to 6 times for a maximum (Melee role 60% − 108% / Ranged role 42% − 90%) (based on level)',
  },
  {
    name: 'First Strike',
    imageURL: '/assets/keystones/first-strike.webp',
    description:
      'When you deal damage or inflict Stun icon crowd control against an enemy champion within the first 0.25 seconds of champion combat, you gain 5 Gold 5 and First Strike for 3 seconds, causing all of your post-mitigation damage dealt against champions to deal 7% bonus true damage. Afterwards, you are granted gold Gold gold equal to (Melee role 100% / Ranged role 85%) of all bonus damage dealt within the duration.',
    cooldown: {
      time: 20,
      unit: 'seconds',
    },
  },
  {
    name: 'Glacial Augment',
    imageURL: '/assets/keystones/glacial-augment.webp',
    description:
      'Your next basic attack against a champion will Slow icon slow them by 20% for 1.5 seconds. (10 seconds cooldown per target)',
    cooldown: {
      time: 20,
      unit: 'seconds',
    },
  },
  {
    name: 'Arcane Comet',
    imageURL: '/assets/keystones/arcane-comet.webp',
    description:
      'Your ability damage against an enemy champion will hurl an Arcane Comet at their current location that lands after 0.8 seconds, dealing 30 − 100 (based on level) (+ 2 per stack) (+ 35% bonus AD) (+ 20% AP) physical or magic damage to enemies hit, and generating 1 stack if it hits at least one enemy champion. (16 − 8 (based on level) second cooldown)',
    cooldown: {
      time: 16,
      unit: 'seconds',
    },
  },
];

export default KEYSTONES;
