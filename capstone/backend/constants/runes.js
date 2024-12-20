const RUNES = [
  {
    name: 'Scorch',
    imageURL: '/assets/runes/scorch.webp',
    path: 'Domination',
    slot: 1,
    description:
      'Your next damaging ability against a champion will deal 28 − 42 (based on level) bonus magic damage after 1 second.',
    cooldown: {
      time: 8,
      unit: 'seconds',
    },
  },
  {
    name: 'Shield Bash',
    imageURL: '/assets/runes/shield-bash.webp',
    path: 'Domination',
    slot: 1,
    description:
      'When you gain a Heal power icon heal or Hybrid resistances icon shield, your next basic attack against a champion will deal 15 − 50 (based on level) (+ 15% bonus AD) (+ 10% AP) bonus Attack damageMagic damage adaptive damage.',
    cooldown: {
      time: 7,
      unit: 'seconds',
    },
  },
  {
    name: 'Sudden Impact',
    imageURL: '/assets/runes/sudden-impact.webp',
    path: 'Domination',
    slot: 1,
    description:
      'When you damage a champion within 4 seconds after exiting Guerrilla Warfare stealth or using a Dash dash, Bear Stance lunge, Flash blink, or teleport effect, you gain 13 armor penetration and 13 magic penetration for 4 seconds.',
    cooldown: {
      time: 4,
      unit: 'seconds',
    },
  },
  {
    name: 'Psychic Wave',
    imageURL: '/assets/runes/psychic-wave.webp',
    path: 'Domination',
    slot: 1,
    description:
      'Upon hitting an enemy champion with a basic attack and an ability within 4 seconds, an explosion will detonate upon the target dealing 22 − 50 (based on level) (+ 15% bonus AD) (+ 7.5% AP) Attack damageMagic damage adaptive damage to enemies hit, reduced to 70% damage for Ranged role Ranged users.',
    cooldown: {
      time: 6,
      unit: 'seconds',
    },
  },
  {
    name: 'Brutal',
    imageURL: '/assets/runes/brutal.webp',
    path: 'Precision',
    slot: 1,
    description:
      'Your basic attacks deal 12 − 19 (based on level) bonus Attack damageMagic damage adaptive damage on-hit against champions.',
  },
  {
    name: 'Triumph',
    imageURL: '/assets/runes/triumph.webp',
    path: 'Precision',
    slot: 1,
    description:
      'Champion Damage rating takedowns Heal power icon heal you for 10% missing health and 10% of maximum mana or energy.',
  },
  {
    name: 'Gathering Storm',
    imageURL: '/assets/runes/gathering-storm.webp',
    path: 'Precision',
    slot: 1,
    description:
      'Passive: Gain 2 − ∞ (based on minutes) bonus Attack Damage or 4 − ∞ (based on minutes) Ability Power.',
  },
  {
    name: 'Font Of Life',
    imageURL: '/assets/runes/font-of-life.webp',
    path: 'Resolve',
    slot: 1,
    description:
      'Your basic attacks and abilities mark enemy champions hit for 3 seconds. When you or allies damage marked champions, it Heal power icon heals those allies for 3% of your maximum health (+ 15% of your AP), while you heal for 1% of your maximum health (+ 5% of your AP).',
  },
  {
    name: 'Courage of the Colossus',
    imageURL: '/assets/runes/courage-of-the-colossus.webp',
    path: 'Resolve',
    slot: 1,
    description:
      'When you Stun icon WR immobilize an enemy champion, gain a Hybrid resistances icon shield equal to 25 − 45 (based on level) (+ 1% maximum health) lasting 3 seconds.',
    cooldown: {
      time: 10,
      unit: 'seconds',
    },
  },
  {
    name: 'Nullifying Orb',
    imageURL: '/assets/runes/nullifying-orb.webp',
    path: 'Resolve',
    slot: 1,
    description:
      'If you would take damage that would reduce you below 35% maximum health, you first gain a Hybrid resistances icon shield that absorbs 60 − 190 (based on level) for 4 seconds.',
    cooldown: {
      time: 60,
      unit: 'seconds',
    },
  },
  {
    name: 'Sweet Tooth',
    imageURL: '/assets/runes/sweet-tooth.webp',
    path: 'Inspiration',
    slot: 1,
    description:
      'Increases Honeyfruit Honeyfruit healing by 20%, each fruit eaten by yourself also provides 15 Gold 15.',
  },
  {
    name: 'Hextech Flashtraption',
    imageURL: '/assets/runes/hextech-flashtraption.webp',
    path: 'Inspiration',
    slot: 1,
    description:
      "You begin Channeling icon charging for up to 6.5 seconds, increasing Hexflash's range over a portion of the duration. Releasing the charge early, or entering combat with an enemy Champion icon champion will end the charge and incur a Cooldown icon 10 second cooldown.",
    cooldown: {
      time: 25,
      unit: 'seconds',
    },
  },
  {
    name: 'Item Crafting',
    imageURL: '/assets/runes/item-crafting.webp',
    path: 'Inspiration',
    slot: 1,
    description:
      'While you are out of combat outside the fountain, you can buy an upgraded or enchantment item for an additional 50 Gold 50.',
    cooldown: {
      time: 180,
      unit: 'seconds',
    },
  },
  {
    name: 'Empowered Attack',
    imageURL: '/assets/runes/empowered-attack.webp',
    path: 'Domination',
    slot: 2,
    description:
      'Your next basic attack against champions will deal 35 − 50 (based on level) bonus Attack damageMagic damage adaptive damage',
    cooldown: {
      time: 10,
      unit: 'seconds',
    },
  },
  {
    name: 'Cheap Shot',
    imageURL: '/assets/runes/cheap-shot.webp',
    path: 'Domination',
    slot: 2,
    description:
      'Your damaging basic attacks and ability damage deal 10 − 45 (based on level) bonus true damage against champions affected by certain Stun icon crowd control effects.',
    cooldown: {
      time: 7,
      unit: 'seconds',
    },
  },
  {
    name: 'Mark of the Weak',
    imageURL: '/assets/runes/mark-of-the-weak.webp',
    path: 'Domination',
    slot: 2,
    description:
      'Your ability damage will mark champions hit, increasing their ability damage taken by 4 / 5 / 6 / 7% (based on level). The mark expires after 7 seconds or when they take ability damage 3 times.',
    cooldown: {
      time: 15,
      unit: 'seconds',
    },
  },
  {
    name: 'Last Stand',
    imageURL: '/assets/runes/last-stand.webp',
    path: 'Precision',
    slot: 2,
    description:
      'You deal 5% − 11% (based on missing health) increased damage (except true damage) against champions.',
  },
  {
    name: 'Giant Slayer',
    imageURL: '/assets/runes/giant-slayer.webp',
    path: 'Precision',
    slot: 2,
    description:
      "You deal 0% − 16% (based on target's bonus health) increased damage against champions.",
  },
  {
    name: 'Coup de Grace',
    imageURL: '/assets/runes/coup-de-grace.webp',
    path: 'Precision',
    slot: 2,
    description:
      'You deal 8% increased damage (except true damage) against champions below 40% maximum health.',
  },
  {
    name: 'Second Wind',
    imageURL: '/assets/runes/second-wind.webp',
    path: 'Resolve',
    slot: 2,
    description:
      'Restore 5 health every 5 seconds. When you take damage from an enemy champion, regenerate (Melee role 12 / Ranged role 6) (+ (Melee role 4% / Ranged role 2%) missing health) over 5 seconds.',
  },
  {
    name: 'Loyalty',
    imageURL: '/assets/runes/loyalty.webp',
    path: 'Resolve',
    slot: 2,
    description:
      'Gain 2 bonus armor and 5 bonus magic resistance. Your closest ally champion gains 5 bonus armor and 2 bonus magic resistance, which can be stacked.',
  },
  {
    name: 'Bone Plating',
    imageURL: '/assets/runes/bone-plating.webp',
    path: 'Resolve',
    slot: 2,
    description:
      'The next 3 champion abilities or basic attacks that damage you within 1.5 seconds deal 30 − 60 (based on level) reduced post-mitigation damage (except true damage).',
    cooldown: {
      time: 35,
      unit: 'seconds',
    },
  },
  {
    name: 'Transcendence',
    imageURL: '/assets/runes/transcendence.webp',
    path: 'Inspiration',
    slot: 2,
    description: 'Gain cooldown reduction based on level.',
  },
  {
    name: "Future's Market",
    imageURL: '/assets/runes/futures-market.webp',
    path: 'Inspiration',
    slot: 2,
    description:
      'You can enter debt to buy items, up to 145 Gold 145 (+ 7 Gold 7 per minute), which is displayed as negative gold in your treasury.',
  },
  {
    name: 'Pathfinder',
    imageURL: '/assets/runes/pathfinder.webp',
    path: 'Inspiration',
    slot: 2,
    description:
      'While in the river, you gain 50 bonus movement speed. If you are also out of combat, restore 2% missing health or mana (whichever resource is lower) every second.',
  },
  {
    name: 'Eyeball Collector',
    imageURL: '/assets/runes/eyeball-collector.webp',
    path: 'Domination',
    slot: 3,
    description:
      'You gain 1 Attack Damage or 2 Ability Power (Adaptive) upon champion Damage rating takedown, stacking up to 10 times for 10 Attack Damage or 20 Ability Power (Adaptive).',
  },
  {
    name: 'Ingenious Hunter',
    imageURL: '/assets/runes/ingenious-hunter.webp',
    path: 'Domination',
    slot: 3,
    description:
      'Gain 20 item haste. Gain 5 item haste upon champion Damage rating takedown, up to once per unique champion.',
  },
  {
    name: 'Zombie Ward',
    imageURL: '/assets/runes/zombie-ward.webp',
    path: 'Domination',
    slot: 3,
    description:
      'Scoring a Damage rating takedown against an enemy Ward icon ward (excluding Zombie Wards) within 10 seconds of damaging it will summon an allied Zombie Ward in its place. Gain 3 Attack Damage or 6 Ability Power (Adaptive) for every Zombie Ward spawned, stacking up to 5 times for 15 Attack Damage or 30 Ability Power (Adaptive). At max stacks, you gain an additional 10 Attack Damage or 20 Ability Power (Adaptive).',
  },
  {
    name: 'Legend: Alacrity',
    imageURL: '/assets/runes/legend-alacrity.webp',
    path: 'Precision',
    slot: 3,
    description:
      'Gain 3% (+ 1% per Legend stack) Attack damage icon bonus attack speed, up to 20% at maximum stacks. Gain Legend stacks for every 15 points earned, up to 17.',
  },
  {
    name: 'Legend: Tenacity',
    imageURL: '/assets/runes/legend-tenacity.webp',
    path: 'Precision',
    slot: 3,
    description:
      'Gain 3% (+ 1% per Legend stack) Tenacity icon tenacity and 3% (+ 1.416% per Legend stack) Slow immune icon slow resist, up to 15% tenacity and 20% slow resist at maximum stacks.  Gain Legend stacks for every 15 − 30 (based on stacks) points earned, up to 12.',
  },
  {
    name: 'Legend: Bloodline',
    imageURL: '/assets/runes/legend-tenacity.webp',
    path: 'Precision',
    slot: 3,
    description:
      'Gain 1% (+ 1% per Legend stack) Omnivamp icon omnivamp, up to 7% at maximum stacks. Gain Legend stacks for every 30 − 45 (based on stacks) points earned, up to 6',
  },
  {
    name: 'Overgrowth',
    imageURL: '/assets/runes/overgrowth.webp',
    path: 'Resolve',
    slot: 3,
    description:
      'For every 1 Monster icon monster or 2 enemy Minion icon minions that die near you, you generate a stack that grants 3 bonus health, stacking indefinitely. At 30 stacks (30 monsters or 60 minions), your base and bonus health are increased by 3%.',
  },
  {
    name: 'Revitalize',
    imageURL: '/assets/runes/revitalize.webp',
    path: 'Resolve',
    slot: 3,
    description:
      'Gain Heal and shield power icon 5% Heal and shield power. Outgoing Heal power icon healing and Hybrid resistances icon shielding is increased by 10% against targets below 40% of their maximum health.',
  },
  {
    name: 'Perseverance',
    imageURL: '/assets/runes/perseverance.webp',
    path: 'Resolve',
    slot: 3,
    description:
      'Gain Tenacity icon 10% Tenacity. When enemy champions Stun icon WR immobilize you, gain 16 − 30 (based on level) Armor icon armor and Magic resistance icon magic resistance for 1.5 seconds, refreshing on subsequent inflictions.',
  },
  {
    name: 'Onslaught',
    imageURL: '/assets/runes/onslaught.webp',
    path: 'Resolve',
    slot: 3,
    description:
      'Gain 5 / 10 / 15 / 20% (based on nearby enemy champions) Tenacity icon tenacity.',
  },
  {
    name: 'Nimbus Cloak',
    imageURL: '/assets/runes/nimbus-cloak.webp',
    path: 'Inspiration',
    slot: 3,
    description:
      'Casting a summoner spell grants 5% - 25% (based on summoner spell cooldown) bonus movement speed for 2 seconds.',
  },
  {
    name: 'Demolish',
    imageURL: '/assets/runes/demolish.webp',
    path: 'Inspiration',
    slot: 3,
    description:
      'While you are within 550 range of a turret, it generates 6 stacks over 3 seconds. At maximum stacks, your next basic attack against the turret detonates the stacks to deal 200 (+ 30% of your maximum health) bonus Attack damage/Magic damage adaptive damage.',
    cooldown: {
      time: 35,
      unit: 'seconds',
    },
  },
  {
    name: 'Manaflow Band',
    imageURL: '/assets/runes/manaflow-band.webp',
    path: 'Inspiration',
    slot: 3,
    description:
      'Hitting an enemy champion with an ability or empowered attack permanently increases your maximum mana by 30, up to 300 mana.',
  },
];

export default RUNES;
