const ITEMS = [
  {
    name: 'Amplifying Tome',
    imageURL: '/assets/items/amplifying-tome.webp',
    category: 'Basic',
    attributes: {
      abilityPower: 25,
    },
    tags: ['Magic'],
    price: 500,
  },
  {
    name: 'Ancient Coin',
    imageURL: '/assets/items/ancient-coin.webp',
    category: 'Basic',
    attributes: {
      abilityHaste: 5,
      health: 80,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Offering',
        description:
          'Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, nearby minions that die will each consume a charge. Consuming a charge will grant 65 Gold and heal you for 20 − 80 (based on missing health). You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.',
      },
      {
        name: 'Unique – Quest',
        description:
          'Earn 750 Gold using Quest items to upgrade to Talisman of Ascension.',
      },
    ],
  },
  {
    name: "Brawler's Gloves",
    imageURL: '/assets/items/brawlers-gloves.webp',
    category: 'Basic',
    attributes: {
      criticalHitChance: 10,
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Cloth Armor',
    imageURL: '/assets/items/cloth-armor.webp',
    category: 'Basic',
    attributes: {
      armor: 20,
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Dagger',
    imageURL: '/assets/items/dagger.webp',
    category: 'Basic',
    attributes: {
      attackSpeed: 0.15, // 15% attack speed is represented as 0.15
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Long Sword',
    imageURL: '/assets/items/long-sword.webp',
    category: 'Basic',
    attributes: {
      attackDamage: 12,
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Null-Magic Mantle',
    imageURL: '/assets/items/null-magic-mantle.webp',
    category: 'Basic',
    attributes: {
      magicResist: 20,
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Relic Shield',
    imageURL: '/assets/items/relic-shield.webp',
    category: 'Basic',
    attributes: {
      health: 125,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Spoils of War',
        description:
          'Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your basic attacks execute minions below 65% of their maximum health, consuming 1 charge per minion. Consuming a charge will heal you for 15 − 65 (based on missing health), as well as grant 65 Gold to you and 100% kill gold to the nearest allied champion. You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.',
      },
      {
        name: 'Unique – Quest',
        description:
          'Earn 750 Gold using Quest items to upgrade to Bulwark of the Mountain.',
      },
    ],
  },
  {
    name: 'Ring of Revelation',
    imageURL: '/assets/items/ring-of-revelation.webp',
    category: 'Basic',
    attributes: {
      abilityHaste: 10,
    },
    tags: [],
    price: 400,
    uniquePassives: [],
  },
  {
    name: 'Ruby Crystal',
    imageURL: '/assets/items/ruby-crystal.webp',
    category: 'Basic',
    attributes: {
      health: 150,
    },
    tags: [],
    price: 500,
    uniquePassives: [],
  },
  {
    name: 'Sapphire Crystal',
    imageURL: '/assets/items/sapphire-crystal.webp',
    category: 'Basic',
    attributes: {
      abilityHaste: 5,
      mana: 100,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Mana Charge',
        description:
          'Generates a charge every 4 seconds, stacking up to 3 charges. Each mana expenditure consumes a charge and grants +5 mana, stacking up to 250 mana.',
      },
    ],
  },
  {
    name: 'Shimmering Spark',
    imageURL: '/assets/items/shimmering-spark.webp',
    category: 'Basic',
    attributes: {
      health: 50,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Immolate',
        description:
          'While in combat, deal 5 − 10 (based on level) magic damage per second to nearby enemies.',
      },
    ],
  },
  {
    name: 'Spectral Sickle',
    imageURL: '/assets/items/spectral-sickle.webp',
    category: 'Basic',
    attributes: {},
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Versatile',
        description: 'Gain 10 attack damage or 20 ability power (Adaptive).',
      },
      {
        name: 'Unique – Tribute',
        description:
          'Generates a charge every 30 seconds, up to 3 charges. While you are near an allied champion, your damaging abilities and attacks against champions and structures consume up to one charge per attack or cast. Consuming a charge grants 65 Gold and heals for 20 − 80 (based on missing health). You earn 50% reduced gold from killing minions and monsters. Killing minions will also grant 100% kill gold to the nearby ally.',
      },
      {
        name: 'Unique – Quest',
        description:
          'Earn 750 Gold using Quest items to upgrade to Black Mist Scythe.',
      },
    ],
  },
  {
    name: 'Aether Wisp',
    imageURL: '/assets/items/aether-wisp.webp',
    category: 'Mid-tier',
    attributes: {
      abilityPower: 35,
    },
    tags: [],
    price: 950,
    uniquePassives: [
      {
        name: 'Unique – Wisp',
        description: '+5% move speed',
      },
    ],
  },
  {
    name: 'B. F. Sword',
    imageURL: '/assets/items/bf-sword.webp',
    category: 'Mid-tier',
    attributes: {
      attackDamage: 40,
    },
    tags: [],
    price: 1500,
    uniquePassives: [],
  },
  {
    name: "Bami's Cinder",
    imageURL: '/assets/items/bamis-cinder.webp',
    category: 'Mid-tier',
    attributes: {
      health: 250,
    },
    tags: [],
    price: 1300,
    uniquePassives: [
      {
        name: 'Unique – Immolate',
        description:
          'While in combat, deal 10 − 20 (based on level) magic damage per second to nearby enemies, increased to 115% against minions and monsters.',
      },
    ],
  },
  {
    name: 'Blasting Wand',
    imageURL: '/assets/items/blasting-wand.webp',
    category: 'Mid-tier',
    attributes: {
      abilityPower: 40,
    },
    tags: [],
    price: 900,
    uniquePassives: [],
  },
  {
    name: 'Bramble Vest',
    imageURL: '/assets/items/bramble-vest.webp',
    category: 'Mid-tier',
    attributes: {
      armor: 30,
    },
    tags: [],
    price: 1000,
    uniquePassives: [
      {
        name: 'Unique – Thorns',
        description:
          'When struck by a basic attack, you deal 4 (+ 6% bonus armor) magic damage to the attacker and, if they are a champion, inflict 40% Grievous Wounds for 3 seconds.',
      },
    ],
  },
  {
    name: 'Catalyst of Aeons',
    imageURL: '/assets/items/catalyst-of-aeons.webp',
    category: 'Mid-tier',
    attributes: {
      health: 200,
      mana: 300,
    },
    tags: [],
    price: 1100,
    uniquePassives: [
      {
        name: 'Unique – Eternity',
        description:
          'You restore mana equal to 15% of incoming damage taken from champions, and heal for 20% of mana spent, up to 15 health per cast. Toggled abilities can only heal for up to 15 per second.',
      },
    ],
  },
  {
    name: "Caulfield's Warhammer",
    imageURL: '/assets/items/caulfields-warhammer.webp',
    category: 'Mid-tier',
    attributes: {
      attackDamage: 25,
      abilityHaste: 10,
    },
    tags: [],
    price: 1200,
    uniquePassives: [],
  },
  {
    name: 'Chain Vest',
    imageURL: '/assets/items/chain-vest.webp',
    category: 'Mid-tier',
    attributes: {
      armor: 40,
    },
    tags: [],
    price: 900,
    uniquePassives: [],
  },
  {
    name: 'Cloak of Agility',
    imageURL: '/assets/items/cloak-of-agility.webp',
    category: 'Mid-tier',
    attributes: {
      criticalHitChance: 20,
    },
    tags: [],
    price: 1000,
    uniquePassives: [],
  },
  {
    name: "Executioner's Calling",
    imageURL: '/assets/items/executions-calling.webp',
    category: 'Mid-tier',
    attributes: {
      attackDamage: 15,
    },
    tags: [],
    price: 800,
    uniquePassives: [
      {
        name: 'Unique – Sepsis',
        description:
          'Physical damage inflicts 40% Grievous Wounds on enemy champions for 3 seconds.',
      },
    ],
  },
  {
    name: 'Fiendish Codex',
    imageURL: '/assets/items/fiendish-codex.webp',
    category: 'Mid-tier',
    attributes: {
      abilityPower: 35,
      abilityHaste: 10,
    },
    tags: [],
    price: 1000,
    uniquePassives: [],
  },
  {
    name: 'Abyssal Mask',
    imageURL: '/assets/items/abyssal-mask.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      magicResist: 40,
      health: 300,
      mana: 300,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Eternity',
        description:
          'Restore mana equal to 15% of damage taken from champions. Restore health equal to 20% of mana spent, up to 25 health per cast, while toggle abilities can heal for up to 25 per second.',
      },
      {
        name: 'Unique – Abyssal',
        description:
          'Generate stacks of Charge equal to 20% of incoming magic damage, which lasts 5 seconds and refreshes on subsequent hits. Immobilizing an enemy champion will consume all stacks to deal equal magic damage in an explosion around them (Range center 400 range).',
      },
    ],
  },
  // Upgraded items
  {
    name: 'Abyssal Mask',
    imageURL: '/assets/items/abyssal-mask.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      magicResist: 40,
      health: 300,
      mana: 300,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Eternity',
        description:
          'Restore mana equal to 15% of damage taken from champions. Restore health equal to 20% of mana spent, up to 25 health per cast, while toggle abilities can heal for up to 25 per second.',
      },
      {
        name: 'Unique – Abyssal',
        description:
          'Generate stacks of Charge equal to 20% of incoming magic damage, which lasts 5 seconds and refreshes on subsequent hits. Immobilizing an enemy champion will consume all stacks to deal equal magic damage in an explosion around them (Range center 400 range).',
      },
    ],
  },
  {
    name: "Amaranth's Twinguard",
    imageURL: '/assets/items/amaranths-twinguard.webp',
    category: 'Upgraded',
    attributes: {
      armor: 60,
      magicResist: 60,
    },
    tags: [],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Endurance',
        description:
          'Generates a stack of Endurance every second in combat with champions, which expires out of combat and stacks up to 5 times. At max stacks, you gain 30% size, 20% tenacity, and 30% bonus armor and magic resistance.',
      },
    ],
  },
  {
    name: "Archangel's Staff",
    imageURL: '/assets/items/archangels-staff.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 35,
      abilityHaste: 20,
      magicPenetration: 7,
      mana: 500,
    },
    tags: [],
    price: 2950,
    uniquePassives: [
      {
        name: 'Unique – Awe',
        description:
          'Grants bonus ability power equal to 1% maximum mana. Refunds 25% of mana spent.',
      },
      {
        name: 'Unique – Mana Charge',
        description:
          "Generates a charge every 4 seconds, up to 3 charges. Each mana expenditure consumes a charge and grants +15 mana, stacking up to 700 mana. Transforms into Seraph's Embrace at +700 mana.",
      },
    ],
  },
  {
    name: 'Ardent Censer',
    imageURL: '/assets/items/ardent-censer.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 55,
      abilityHaste: 20,
      health: 250,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Ardent',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Censer',
        description:
          'Healing or shielding another allied champion will enhance them for 6 seconds, granting 15% − 40% (based on level) bonus attack speed and 20 − 40 (based on level) bonus magic damage on-hit on basic attacks.',
      },
    ],
  },
  {
    name: 'Awakened Soulstealer',
    imageURL: '/assets/items/awakened-soulstealer.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 65,
      abilityHaste: 20,
      magicPenetration: 7,
      health: 150,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Soul Hunt',
        description: '+15 magic penetration.',
      },
      {
        name: 'Unique – Soulflare',
        description:
          "Takedowns against enemy champions within 3 seconds of damaging them will reduce your abilities' remaining cooldowns by 25%.",
      },
    ],
  },
  {
    name: 'Black Cleaver',
    imageURL: '/assets/items/black-cleaver.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      abilityHaste: 20,
      health: 350,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Sunder',
        description:
          'Dealing physical damage to an enemy champion inflicts 4% armor reduction for 6 seconds, refreshing on subsequent hits and stacking up to 6 times for 24% reduction.',
      },
      {
        name: 'Unique – Rage',
        description:
          'Basic attacks on-hit grant +(Melee role 20 / Ranged role 10) bonus move speed for 2 seconds. Killing a unit grants +(Melee role 60 / Ranged role 30) bonus move speed instead. Bonuses do not stack.',
      },
    ],
  },
  {
    name: 'Black Mist Scythe',
    imageURL: '/assets/items/black-mist-scythe.webp',
    category: 'Upgraded',
    attributes: {},
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Versatile',
        description:
          'Gain 14 bonus attack damage or 28 ability power (Adaptive).',
      },
      {
        name: 'Unique – Soulcast',
        description:
          'Generates a stack every 60 seconds, granting 75 Gold, 25 bonus health, and 2 bonus attack damage or 4 ability power (Adaptive). This stacks up to 10 times for 750 Gold, 250 bonus health, and 20 bonus attack damage or 40 ability power (Adaptive).',
      },
    ],
  },
  {
    name: 'Blade of the Ruined King',
    imageURL: '/assets/items/blade-of-the-ruined-king.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 25,
      attackSpeed: 35,
    },
    tags: [],
    price: 3200,
    uniquePassives: [
      {
        name: 'Unique – Thirst',
        description: '+10% physical vamp.',
      },
      {
        name: 'Unique – Ruined Strikes',
        description:
          "Basic attacks deal bonus physical damage on-hit equal to (Melee role 9% / Ranged role 6%) target's current health, with a minimum of 15 against all units, and a maximum of 60 against monsters.",
      },
      {
        name: 'Unique – Drain',
        description:
          'Hitting a champion with 3 basic attacks or abilities within 2 seconds will deal 30 − 100 (based on level) magic damage on-hit and slow the target by 25% for 2 seconds, while granting you 25% bonus move speed for the same duration (60 second cooldown).',
      },
    ],
  },
  {
    name: 'Bloodthirster',
    imageURL: '/assets/items/bloodthirster.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 50,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3300,
    uniquePassives: [
      {
        name: 'Unique – Bloody',
        description: '+12% Physical Vamp.',
      },
      {
        name: 'Unique – Bloodsworn',
        description:
          'While above 50% maximum health, gain 11 − 25 (based on level) bonus attack damage and 10% bonus attack speed.',
      },
    ],
  },
  {
    name: 'Bulwark of the Mountain',
    imageURL: '/assets/items/bulwark-of-the-mountain.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      health: 175,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Soulcast',
        description:
          'Generates a stack every 60 seconds, granting 75 Gold, 25 bonus health, and 2 bonus attack damage or 4 ability power (Adaptive). This stacks up to 10 times for 750 Gold, 250 bonus health, and 20 bonus attack damage or 40 ability power (Adaptive).',
      },
    ],
  },
  {
    name: 'Chempunk Chainsword',
    imageURL: '/assets/items/chempunk-chainsword.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 45,
      abilityHaste: 15,
      health: 250,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Punishment',
        description:
          'Dealing physical damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds.',
      },
    ],
  },
  {
    name: 'Cosmic Drive',
    imageURL: '/assets/items/cosmic-drive.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 75,
      abilityHaste: 30,
      magicPenetration: 7,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Hyperdrive',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Spellweaving',
        description:
          'Damaging an enemy champion with abilities or empowered attacks grants bonus move speed equal to 30 (+70% ability haste from items), decaying over 2 seconds (1 second cooldown per source).',
      },
    ],
  },
  {
    name: 'Crown of the Shattered Queen',
    imageURL: '/assets/items/crown-of-the-shattered-queen.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 60,
      abilityHaste: 20,
      magicPenetration: 7,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Safeguard',
        description:
          'Grants a Spell Shield that blocks the next hostile ability. When the shield is broken, gain 50% incoming damage reduction for 1.5 seconds (40 second cooldown).',
      },
      {
        name: 'Unique – Poise',
        description:
          "While Safeguard is not on cooldown, gain 20 ability power. Your damaging active abilities against champions will reduce Safeguard's remaining cooldown by 4 seconds.",
      },
    ],
  },
  {
    name: 'Crystalline Reflector',
    imageURL: '/assets/items/crystalline-reflector.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 70,
      armor: 40,
      magicPenetration: 7,
      health: 200,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Mirrored Force',
        description:
          'Ability casts generate a stack lasting 3 seconds, refreshing on subsequent casts and stacking up to 3 times. Physical damage taken from enemy champions is reduced by 8 − 25 (based on level), consuming a stack and dealing 10 (+ 3% AP) (+ 1% bonus health) magic damage to the attacker.',
      },
    ],
  },
  {
    name: 'Dawnshroud',
    imageURL: '/assets/items/dawnshroud.webp',
    category: 'Upgraded',
    attributes: {
      armor: 50,
      magicResistance: 30,
      health: 250,
    },
    tags: [],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Dawnbringer',
        description:
          'If you are within 400 units of an enemy champion when you immobilize an enemy champion or are immobilized by enemy champions, you deal 80 (+ 5% bonus health) magic damage to nearby enemy champions and reveal them for 3 seconds (3 second cooldown).',
      },
    ],
  },
  {
    name: "Dead Man's Plate",
    imageURL: '/assets/items/dead-mans-plate.webp',
    category: 'Upgraded',
    attributes: {
      armor: 50,
      health: 250,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Relentless',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Momentum',
        description:
          'Your movement generates stacks of Momentum, which is all expended by basic attacks and decays while movement is impaired. Each stack grants 0.4 bonus move speed, stacking up to 100 times for 40 bonus move speed.',
      },
      {
        name: 'Unique – Crushing Blow',
        description:
          'Your basic attacks deal bonus magic damage equal to expended Momentum. Melee basic attacks that expend maximum Momentum also Slow by 50% for 1 second.',
      },
    ],
  },
  {
    name: "Death's Dance",
    imageURL: '/assets/items/deaths-dance.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 35,
      abilityHaste: 15,
      armor: 40,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Cauterize',
        description:
          '(Melee role 35% / Ranged role 15%) of physical damage taken from enemy champions is instead dealt as true damage over 3 seconds, dealing a third of the stored damage every second.',
      },
      {
        name: 'Unique – Dance',
        description:
          "Champion takedowns remove Cauterize's remaining stored damage and heal you for 12% maximum health over 2 seconds.",
      },
    ],
  },
  {
    name: 'Divine Sunderer',
    imageURL: '/assets/items/divine-sunderer.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 25,
      abilityHaste: 25,
      health: 425,
    },
    tags: [],
    price: 3400,
    uniquePassives: [
      {
        name: 'Unique – Spellblade',
        description:
          "After using an ability, your next basic attack within 10 seconds deals bonus physical damage equal to (Melee 10% / Ranged 7%) target's maximum health, with a minimum damage equal to 125% base AD and a maximum damage against monsters equal to 225% base AD. Against champions, you also heal for (Melee 7% / Ranged 3%) target's maximum health.",
      },
    ],
  },
  {
    name: 'Duskblade of Draktharr',
    imageURL: '/assets/items/duskblade-of-draktharr.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 55,
      abilityHaste: 10,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Razor',
        description: '+18 armor penetration.',
      },
      {
        name: 'Unique – Nightstalker',
        description:
          'Your next basic attack against an enemy champion deals 60 − 160 bonus physical damage and slows by 99% for 0.35 seconds (10 second cooldown).',
      },
    ],
  },
  {
    name: 'Eclipse',
    imageURL: '/assets/items/eclipse.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 60,
      abilityHaste: 20,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Ever Rising Moon',
        description:
          "Hitting an enemy champion inflicts a stack for 1.8 seconds, up to one per attack or cast per champion. Inflicting 2 stacks will consume them all to deal bonus physical damage equal to (Melee 6% / Ranged 3%) target's maximum health and grant you a shield equal to (Melee 160 / Ranged 80) (+ (Melee 40% / Ranged 20%) bonus AD) lasting 2 seconds.",
      },
    ],
  },
  {
    name: 'Edge of Night',
    imageURL: '/assets/items/edge-of-night.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 50,
      health: 250,
    },
    tags: [],
    price: 3150,
    uniquePassives: [
      {
        name: 'Unique – Gouge',
        description: '+8 armor penetration.',
      },
      {
        name: 'Unique – Annul',
        description:
          'Grants a Spell Shield that blocks the next enemy ability.',
      },
    ],
  },
  {
    name: 'Essence Reaver',
    imageURL: '/assets/items/essence-reaver.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      abilityHaste: 20,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3050,
    uniquePassives: [
      {
        name: 'Unique – Essence Flare',
        description:
          'Your next damaging ability or empowered attack deals 20% − 30% (based on critical rate) bonus physical damage (4 second cooldown).',
      },
      {
        name: 'Unique – Mana Siphon',
        description: 'Basic attacks restore 3% missing mana on-hit.',
      },
    ],
  },
  {
    name: 'Force of Nature',
    imageURL: '/assets/items/force-of-nature.webp',
    category: 'Upgraded',
    attributes: {
      magicResistance: 55,
      health: 350,
    },
    tags: [],
    price: 2750,
    uniquePassives: [
      {
        name: 'Unique – Storm',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Absorb',
        description:
          'Taking ability damage generates a stack of Steadfast lasting 7 seconds, stacking up to 4 times. Maximum stacks grant 10% bonus move speed and 25% incoming magic damage reduction.',
      },
    ],
  },
  {
    name: 'Frozen Heart',
    imageURL: '/assets/items/frozen-heart.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 25,
      armor: 80,
      mana: 200,
    },
    tags: [],
    price: 2700,
    uniquePassives: [
      {
        name: "Unique – Winter's Caress",
        description:
          "Against champions, basic attacks and magic damage you deal or take will inflict a stack of Chill lasting 3 seconds, refreshing on subsequent hits and stacking up to 4 times. Each stack cripples the target's attack speed by 9%, stacking up to 36% reduction.",
      },
    ],
  },
  {
    name: 'Guardian Angel',
    imageURL: '/assets/items/guardian-angel.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      armor: 40,
    },
    tags: [],
    price: 3400,
    uniquePassives: [
      {
        name: 'Unique – Resurrect',
        description:
          'Upon taking lethal damage, you enter resurrection for 4 seconds, undergoing Stasis. Afterward, you heal for 50% base health and restore 30% maximum mana.',
      },
    ],
  },
  {
    name: 'Harmonic Echo',
    imageURL: '/assets/items/harmonic-echo.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 75,
      abilityHaste: 10,
      mana: 300,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Harmonic Echo',
        description:
          'Your movement and ability casts generate stacks of Harmony, stacking up to 100 times. At maximum stacks, your next heal or shield ability on another allied champion consumes them all to heal for 130 (+ 10% AP) to them and up to 3 surrounding allied champions.',
      },
    ],
  },
  {
    name: 'Heartsteel',
    imageURL: '/assets/items/heartsteel.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 25,
      health: 700,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Colossal Consumption',
        description:
          'Enemy champions within 650 units generate stacks over 2.5 seconds, stacking up to 6 times. Your next basic attack consumes all stacks to deal 120 (+ 5% maximum health) bonus physical damage and grants you permanent bonus health equal to 15% of that amount.',
      },
    ],
  },
  {
    name: 'Horizon Focus',
    imageURL: '/assets/items/horizon-focus.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 90,
      abilityHaste: 20,
      magicPenetration: 7,
    },
    tags: [],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Hypershot',
        description:
          'Your ability damage against champions will inflict them with Hypershot if cast from at least 600 units away. The target is revealed and takes 9% increased incoming damage for 6 seconds.',
      },
      {
        name: 'Unique – Focus',
        description:
          'Inflicting Hypershot will reveal surrounding enemy champions within 1200 units for 2 seconds (15 second cooldown).',
      },
    ],
  },
  {
    name: 'Iceborn Gauntlet',
    imageURL: '/assets/items/iceborn-gauntlet.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 30,
      armor: 50,
      health: 250,
      mana: 250,
    },
    tags: [],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Spellblade',
        description:
          'After using an ability, your next basic attack within 10 seconds deals bonus physical damage on-hit equal to 100% base AD (+ 25% bonus armor), and creates a 180 radius frost field for 2 seconds, slowing enemies by 30%. Damage is reduced by 50% against structures.',
      },
    ],
  },
  {
    name: 'Immortal Shieldbow',
    imageURL: '/assets/items/immortal-shieldbow.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      attackSpeed: 15,
      criticalStrikeChance: 25,
      physicalVamp: 5,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Lifeline',
        description:
          'If you take damage that would reduce you below 35% maximum health, you gain a shield for 250 − 550 (based on level) lasting 5 seconds (90 second cooldown).',
      },
      {
        name: 'Unique – Battle Furor',
        description:
          'Triggering Lifeline grants 8% physical vamp for 8 seconds.',
      },
    ],
  },
  {
    name: 'Imperial Mandate',
    imageURL: '/assets/items/imperial-mandate.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 40,
      abilityHaste: 20,
      health: 200,
    },
    tags: [],
    price: 2500,
    uniquePassives: [
      {
        name: 'Unique – Coordinated Fire',
        description:
          'Abilities that slow or stun enemy champions deal bonus magic damage and mark them for 4 seconds. Allied champions that damage marked enemies consume the mark to deal bonus magic damage and grant both of you 20% bonus move speed for 2 seconds.',
      },
    ],
  },
  {
    name: 'Infinity Edge',
    imageURL: '/assets/items/infinity-edge.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 60,
      criticalStrikeChance: 25,
    },
    tags: ['Attack Damage'],
    price: 3400,
    uniquePassives: [
      {
        name: 'Unique – Infinity',
        description: '+30% critical strike damage.',
      },
    ],
  },
  {
    name: 'Infinity Orb',
    imageURL: '/assets/items/infinity-orb.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 85,
      magicPenetration: 7,
    },
    tags: ['Ability Power'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Destiny',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Balance',
        description: '+15 magic penetration.',
      },
      {
        name: 'Unique – Inevitable Demise',
        description:
          'Abilities critically strike for 20% bonus damage against enemies below 35% of their maximum health.',
      },
    ],
  },
  {
    name: 'Ixtali Seedjar',
    imageURL: '/assets/items/ixtali-seedjar.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 25,
      health: 425,
    },
    tags: ['Ability Haste', 'Health'],
    price: 2400,
    uniquePassives: [
      {
        name: 'Unique – Spring',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Propagation',
        description:
          'When you or an ally hit a nearby plant, it drops a seed that you can collect. Collecting the seed will replace your trinket for 60 seconds, and deploying the seed will grow the plant over 1 second. Upon deployment, you cannot collect the same seed type for 30 seconds.',
      },
      {
        name: 'Unique – Harvester',
        description:
          'Picking up a seed grants 40% bonus move speed decaying over 2.5 seconds.',
      },
    ],
  },
  {
    name: "Liandry's Torment",
    imageURL: '/assets/items/liandrys-torment.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 75,
      health: 200,
    },
    tags: ['Ability Power'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Torment',
        description:
          "Your ability damage and empowered attacks inflict a burn that deals magic damage equal to 0.4% (+ 0.5% per 100 AP) of the target's maximum health per second over 3 seconds.",
      },
    ],
  },
  {
    name: 'Lich Bane',
    imageURL: '/assets/items/lich-bane.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 80,
      abilityHaste: 10,
      magicPenetration: 7,
    },
    tags: ['Ability Power'],
    price: 2950,
    uniquePassives: [
      {
        name: 'Unique – Bane',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Spellblade',
        description:
          'After using an ability, your next basic attack within 10 seconds deals bonus magic damage on-hit equal to 75% base AD (+ 50% AP) with a 1.5 second cooldown. The damage is reduced to 50% against structures.',
      },
    ],
  },
  {
    name: "Luden's Echo",
    imageURL: '/assets/items/ludens-echo.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 85,
      abilityHaste: 20,
      mana: 300,
    },
    tags: ['Ability Power'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Discordic Echo',
        description:
          'Your movement and ability casts will generate stacks of Discord, stacking up to 100 times. At maximum stacks, your next damaging ability consumes them all to deal 110 (+ 10% AP) bonus magic damage to the target and up to 3 surrounding enemies.',
      },
    ],
  },
  {
    name: 'Magnetic Blaster',
    imageURL: '/assets/items/magnetic-blaster.webp',
    category: 'Upgraded',
    attributes: {
      attackSpeed: 35,
      criticalStrikeChance: 25,
    },
    tags: ['Attack Damage'],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Power Blitz',
        description:
          'Energy stacks charge 25% faster. Energized attacks deal 50-120 bonus magic damage and gain bonus attack range based on role. This damage can critically strike and will bounce to the nearest enemy within 500 range, repeating up to 4 other targets.',
      },
      {
        name: 'Unique – Energized',
        description:
          'Your movement and basic attacks will generate stacks of Energy, stacking up to 100. At maximum stacks, your next basic attack will consume them all to activate Energized effects.',
      },
    ],
  },
  {
    name: 'Manamune',
    imageURL: '/assets/items/manamune.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 25,
      abilityHaste: 20,
      mana: 300,
    },
    tags: ['Attack Damage', 'Ability Haste'],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Awe',
        description:
          'Grants bonus attack damage equal to 1.5% maximum mana. Refunds 15% of mana spent.',
      },
      {
        name: 'Unique – Mana Charge',
        description:
          'Generates a charge every 4 seconds, stacking up to 3 charges. Each basic attack on-hit or mana expenditure consumes a charge and grants +10 mana, stacking up to 700 mana. Transforms into Muramana at +700 mana.',
      },
    ],
  },
  {
    name: 'Mantle of the Twelfth Hour',
    imageURL: '/assets/items/mantle-of-the-twelfth-hour.webp',
    category: 'Upgraded',
    attributes: {
      armor: 40,
      magicResistance: 40,
      health: 200,
    },
    tags: ['Defense'],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Lifeline',
        description:
          'If you take damage that would reduce you below 35% maximum health, you gain base health equal to 200 (+ 50% bonus health) over 3 seconds, as well as 50% slow resistance and 30% bonus move speed (90 second cooldown).',
      },
    ],
  },
  {
    name: 'Maw of Malmortius',
    imageURL: '/assets/items/maw-of-malmortius.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 55,
      abilityHaste: 10,
      magicResistance: 45,
    },
    tags: ['Attack Damage', 'Magic Resistance'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Demonbane',
        description:
          'Your attacks and abilities against champions will generate a shield that absorbs magic damage equal to 20% of the physical damage dealt, stacking up to 60-400 based on level.',
      },
    ],
  },
  {
    name: 'Morellonomicon',
    imageURL: '/assets/items/morellonomicon.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 75,
      abilityHaste: 20,
      magicPenetration: 7,
      health: 150,
    },
    tags: [],
    price: 2600,
    uniquePassives: [
      {
        name: 'Unique – Affliction',
        description:
          'Dealing magic damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds.',
      },
    ],
  },
  {
    name: 'Mortal Reminder',
    imageURL: '/assets/items/mortal-reminder.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 30,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3300,
    uniquePassives: [
      {
        name: 'Unique – Last Whisper',
        description: '+16% − 33% armor penetration (based on level).',
      },
      {
        name: 'Unique – Sepsis',
        description:
          'Dealing physical damage to enemy champions inflicts 50% Grievous Wounds for 3 seconds.',
      },
    ],
  },
  {
    name: "Nashor's Tooth",
    imageURL: '/assets/items/nashors-tooth.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 25,
      attackSpeed: 50,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Magic Fang',
        description: 'Gain 30 attack damage or 60 ability power (Adaptive).',
      },
      {
        name: 'Unique – Gnaw',
        description:
          'Basic attacks against champions deal 15 (+ 25% bonus AD) (+ 25% AP) bonus magic damage.',
      },
    ],
  },
  {
    name: 'Navori Quickblades',
    imageURL: '/assets/items/navori-quickblades.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 45,
      abilityHaste: 15,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Deft Strikes',
        description:
          'Critical strikes with basic attacks reduce the remaining cooldowns of your basic abilities by 20%.',
      },
    ],
  },
  {
    name: "Oceanid's Trident",
    imageURL: '/assets/items/oceanids-trident.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 80,
      abilityHaste: 10,
      magicPenetration: 7,
      health: 200,
    },
    tags: [],
    price: 2600,
    uniquePassives: [
      {
        name: 'Unique – Lethal Weapon',
        description:
          'Dealing ability damage to an enemy champion afflicts them for 3 seconds, reducing their active shields by 40% (+5% per 100 AP) for single-target abilities and 25% (+5% per 100 AP) for area-of-effect abilities.',
      },
    ],
  },
  {
    name: 'Phantom Dancer',
    imageURL: '/assets/items/phantom-dancer.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 25,
      attackSpeed: 30,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Shadowalk',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Spectral Waltz',
        description:
          'Basic attacks grant 7% bonus move speed and generate a stack of Spectral Waltz lasting 3 seconds, refreshing on subsequent hits and stacking up to 4 times. Upon reaching 4 stacks, gain 25% bonus attack speed.',
      },
    ],
  },
  {
    name: "Protector's Vow",
    imageURL: '/assets/items/protectors-vow.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      armor: 40,
      health: 350,
    },
    tags: [],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Protector',
        description:
          'While near an allied champion, if you or your ally take damage from a champion, monster, or turret, both gain a shield equal to 125 (+30% bonus health) and 20% bonus move speed for 1.5 seconds (20-second cooldown).',
      },
    ],
  },
  {
    name: 'Psychic Projector',
    imageURL: '/assets/items/psychic-projector.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 60,
      abilityHaste: 15,
      magicPenetration: 7,
      health: 300,
    },
    tags: [],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Conversion',
        description:
          'Gain ability power equal to 3% bonus health, up to 999 AP.',
      },
      {
        name: 'Unique – Projection',
        description:
          'Upon taking damage from champions, gain a shield equal to 30 (+10% AP) (+5% bonus health) lasting 3 seconds. Ranged users gain 60% shield strength.',
      },
    ],
  },
  {
    name: "Rabadon's Deathcap",
    imageURL: '/assets/items/rabadons-deathcap.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 100,
      magicPenetration: 7,
    },
    tags: [],
    price: 3400,
    uniquePassives: [
      {
        name: 'Unique – Overkill',
        description: '+20% − 45% AP (based on level).',
      },
    ],
  },
  {
    name: "Randuin's Omen",
    imageURL: '/assets/items/randuins-omen.webp',
    category: 'Upgraded',
    attributes: {
      armor: 65,
      health: 400,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Cold Steel',
        description:
          "When struck by a basic attack, cripple the target's attack speed by 15% for 1.5 seconds.",
      },
      {
        name: 'Unique – Determination',
        description:
          'Generate stacks of Determination equal to 25% of incoming critical damage for melee champions or 18% for ranged champions. Your next basic attack against a champion will consume all stacks to heal you for the same amount.',
      },
    ],
  },
  {
    name: 'Redemption',
    imageURL: '/assets/items/redemption.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 20,
      health: 400,
      mana: 300,
    },
    tags: ['Support'],
    price: 2600,
    uniquePassives: [
      {
        name: 'Unique – Eternity',
        description:
          'Restore mana equal to 15% of damage taken from champions. Restore health equal to 20% of mana spent, up to 15 health per cast, while toggle abilities can heal for up to 15 per second.',
      },
      {
        name: 'Unique – Salvation',
        description:
          'While near an allied champion, you and nearby allied champions heal for 50 (+ 6% of your bonus health) (8 second cooldown; Range center 350 range).',
      },
    ],
  },
  {
    name: 'Riftmaker',
    imageURL: '/assets/items/riftmaker.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 80,
      abilityHaste: 15,
      magicPenetration: 7,
      health: 150,
      omnivamp: 15,
    },
    tags: ['Mage', 'Tank'],
    price: 3200,
    uniquePassives: [
      {
        name: 'Unique – Assimilation',
        description: '+13 omnivamp.',
      },
      {
        name: 'Unique – Void Corruption',
        description:
          'Generates a stack of Corruption every second in champion combat, which expires out of combat and stacks up to 3 times. Each stack grants 2.5% bonus damage, stacking up to 9%, upon which it converts into true damage.',
      },
    ],
  },
  {
    name: 'Rod of Ages',
    imageURL: '/assets/items/rod-of-ages.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 60,
      magicPenetration: 7,
      health: 250,
      mana: 300,
    },
    tags: ['Tank'],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Eternity',
        description:
          'Restore mana equal to 15% of incoming damage from champions, and heal for an amount equal to 20% of mana spent, up to 25 per cast; toggle abilities can only heal for up to 25 per second.',
      },
      {
        name: 'Passive Stack',
        description:
          'This item gains 25 bonus health, 10 bonus mana, and 6 ability power every 40 seconds, stacking up to 10 times for a maximum of 250 bonus health, 100 bonus mana, and 60 ability power.',
      },
    ],
  },
  {
    name: "Runaan's Hurricane",
    imageURL: '/assets/items/runaan-hurricane.webp',
    category: 'Upgraded',
    attributes: {
      attackSpeed: 45,
    },
    tags: ['Ranged', 'Marksman'],
    price: 2900,
    uniquePassives: [
      {
        name: "Unique – Wind's Fury",
        description:
          'Basic attacks on-attack fire additional bolts at up to 2 enemies in front of you (180°), each dealing 50% AD physical damage. Bolts apply on-hit effects at 100% effectiveness and are affected by Critical strike modifiers.',
      },
      {
        name: "Unique – Wind's Favor",
        description:
          'Gain 15 bonus attack damage or 30 ability power (Adaptive).',
      },
      {
        name: 'Unique – Wind Blade',
        description: 'Basic attacks deal 15 bonus physical damage on-hit.',
      },
    ],
  },
  {
    name: "Rylai's Crystal Scepter",
    imageURL: '/assets/items/rylai-crystal-scepter.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 70,
      health: 350,
    },
    tags: ['Mage'],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Icy',
        description:
          'Damaging active abilities slow enemies by 30% for 1 second.',
      },
    ],
  },
  {
    name: 'Searing Crown',
    imageURL: '/assets/items/searing-crown.webp',
    category: 'Upgraded',
    attributes: {
      armor: 50,
      health: 300,
    },
    tags: ['Tank'],
    price: 3200,
    uniquePassives: [
      {
        name: 'Unique – Fiery Touch',
        description:
          "Your basic attacks and ability hits inflict a burn that deals magic damage equal to (Melee role 1.4% / Ranged role 0.7%) target's maximum health per second over 3 seconds. This deals 150% damage against minions and monsters, up to 125 damage against monsters.",
      },
    ],
  },
  {
    name: "Seraph's Embrace",
    imageURL: '/assets/items/seraph-embrace.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 35,
      abilityHaste: 20,
      magicPenetration: 7,
      mana: 1200,
    },
    tags: ['Mage'],
    price: 2950,
    uniquePassives: [
      {
        name: 'Unique – Awe',
        description:
          'Grants ability power equal to 3% maximum mana. Refunds 25% of mana spent.',
      },
      {
        name: 'Unique – Lifeline',
        description:
          'If you would take damage that would reduce you below 35% maximum health, you first gain a shield equal to 100 (+ 15% current mana) lasting 2 seconds, which consumes 15% current mana (90 second cooldown).',
      },
    ],
  },
  {
    name: "Serpent's Fang",
    imageURL: '/assets/items/serpents-fang.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 50,
      abilityHaste: 10,
    },
    tags: ['Assassin'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Stab',
        description: '+15 armor penetration.',
      },
      {
        name: 'Unique – Shield Reaver',
        description:
          'Dealing damage to an enemy champion afflicts them for 3 seconds, reducing their active shields strength as well as any others they gain. Melee champions inflict 40% (+ 10% per 100 bonus AD) reduction, capped at 60%. Ranged champions inflict 25% (+ 10% per 100 bonus AD) reduction, capped at 45%.',
      },
    ],
  },
  {
    name: "Serylda's Grudge",
    imageURL: '/assets/items/serylda-grudge.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      abilityHaste: 15,
    },
    tags: ['Assassin'],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Last Whisper',
        description: '+16% − 33% (based on level) armor penetration.',
      },
      {
        name: 'Unique – Bitter Cold',
        description:
          'Your ability damage and empowered attacks slow affected units by 30% for 1 second.',
      },
    ],
  },
  {
    name: 'Solari Chargeblade',
    imageURL: '/assets/items/solari-chargeblade.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 20,
      attackSpeed: 40,
      criticalStrikeChance: 25,
    },
    tags: ['Marksman'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Sunburst',
        description:
          'Your ability casts generate a stack of Radiance lasting 10 seconds, refreshing on subsequent casts and stacking up to 3 times. Each unique ability counts once every 2 seconds. Basic attacks that critically strike will consume a stack to deal bonus magic damage on-hit. This damage can critically strike.',
      },
    ],
  },
  {
    name: 'Spear of Shojin',
    imageURL: '/assets/items/spear-of-shojin.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 50,
      abilityHaste: 25,
      health: 300,
    },
    tags: ['Fighter'],
    price: 3200,
    uniquePassives: [
      {
        name: 'Unique – Dragon Awakening',
        description:
          'For 10 seconds after casting your ultimate ability, you gain 25% basic ability haste and 25% bonus move speed, decaying over 3 seconds. Scoring a takedown during this time will trigger the effect again.',
      },
      {
        name: 'Unique – Rising Dragon',
        description: '+5% move speed.',
      },
    ],
  },
  {
    name: 'Spirit Visage',
    imageURL: '/assets/items/spirit-visage.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 20,
      magicResistance: 50,
      health: 350,
      baseHealthRegeneration: 100,
    },
    tags: [],
    price: 2800,
    uniquePassives: [
      {
        name: 'Unique – Blessed',
        description:
          'Increases all healing, shielding, health regeneration, and drain effects on yourself by 30%.',
      },
    ],
  },
  {
    name: 'Staff of Flowing Waters',
    imageURL: '/assets/items/staff-of-flowing-waters.webp',
    category: 'Upgraded',
    attributes: {
      abilityPower: 65,
      abilityHaste: 20,
      mana: 350,
    },
    tags: [],
    price: 2500,
    uniquePassives: [
      {
        name: 'Unique – Rapids',
        description:
          "Healing or shielding another allied champion grants both of you 20 ability haste and 20 − 40 ability power for 6 seconds (based on target's level).",
      },
    ],
  },
  {
    name: "Sterak's Gage",
    imageURL: '/assets/items/steraks-gage.webp',
    category: 'Upgraded',
    attributes: {
      health: 400,
    },
    tags: [],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Heavy Handed',
        description: 'Gain bonus attack damage equal to 50% base AD.',
      },
      {
        name: 'Unique – Lifeline',
        description:
          'If you would take damage that would reduce you below 35% maximum health, gain a shield equal to 75% bonus health decaying over 3 seconds (90 second cooldown).',
      },
      {
        name: "Unique – Sterak's Fury",
        description:
          'Triggering Lifeline increases size and grants 30% tenacity for 8 seconds.',
      },
    ],
  },
  {
    name: 'Stormrazor',
    imageURL: '/assets/items/stormrazor.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      attackSpeed: 20,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 3100,
    uniquePassives: [
      {
        name: 'Unique – Energized',
        description:
          'Your movement and basic attacks generate stacks of Energy, stacking up to 100. At maximum stacks, your next basic attack deals 65 − 135 bonus magic damage (based on level) and activates Energized effects.',
      },
      {
        name: 'Unique – Paralyze',
        description: 'Energized attacks slow by 75% for 0.75 seconds.',
      },
    ],
  },
  {
    name: 'Sundered Sky',
    imageURL: '/assets/items/sundered-sky.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      abilityHaste: 15,
      health: 300,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Lightshield Strike',
        description:
          'Your next basic attack against a champion critically strikes for 160% damage and heals you equal to 140% base AD (+6% missing health) (6 second cooldown).',
      },
    ],
  },
  {
    name: 'Sunfire Aegis',
    imageURL: '/assets/items/sunfire-aegis.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 15,
      health: 500,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Immolate',
        description:
          'While in combat, deal 16 − 25 magic damage per second to nearby enemies, increased to 130% against monsters, and 175% − 250% against minions. Damaging champions or epic monsters increases the damage by 11% for 5 seconds, stacking up to 4 times.',
      },
      {
        name: 'Unique – Flame Touch',
        description:
          "At maximum Immolate stacks, your basic attacks burn enemies around you for Immolate's damage over 3 seconds.",
      },
    ],
  },
  {
    name: 'Talisman of Ascension',
    imageURL: '/assets/items/talisman-of-ascension.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 15,
      health: 125,
    },
    tags: [],
    price: 500,
    uniquePassives: [
      {
        name: 'Unique – Soulcast',
        description:
          'Generates a stack every 60 seconds, granting 75 Gold, 25 bonus health, and 2 bonus attack damage or 4 ability power (Adaptive). This stacks up to 10 times for 750 Gold, 250 bonus health, and 20 bonus attack damage or 40 ability power.',
      },
    ],
  },
  {
    name: 'Terminus',
    imageURL: '/assets/items/terminus.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      attackSpeed: 30,
    },
    tags: [],
    price: 3400,
    uniquePassives: [
      {
        name: 'Unique',
        description:
          'Your total percent armor and magic penetration from items is capped at 40%.',
      },
      {
        name: 'Unique – Shadow',
        description: 'Basic attacks deal 35 bonus magic damage on-hit.',
      },
      {
        name: 'Unique – Juxtaposition',
        description:
          'Basic attacks alternate between Light and Dark hits, each granting a bonus for 5 seconds that stacks up to 3 times. Light hits grant bonus armor and magic resist, while Dark hits grant armor and magic penetration.',
      },
    ],
  },
  {
    name: 'The Collector',
    imageURL: '/assets/items/the-collector.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 40,
      criticalStrikeChance: 25,
    },
    tags: [],
    price: 2900,
    uniquePassives: [
      {
        name: 'Unique – Killer',
        description: '+10 armor penetration.',
      },
      {
        name: 'Unique – Death and Taxes',
        description:
          'If you deal damage that would reduce a champion below 5% of their maximum health, you execute them. Champion kills grant you an additional 25 Gold.',
      },
    ],
  },
  {
    name: 'Thornmail',
    imageURL: '/assets/items/thornmail.webp',
    category: 'Upgraded',
    attributes: {
      armor: 75,
      health: 200,
    },
    tags: [],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Thorns',
        description:
          'When struck by a basic attack, deal magic damage to the attacker and inflict 60% Grievous Wounds for 3 seconds against champions.',
      },
    ],
  },
  {
    name: 'Titanic Hydra',
    imageURL: '/assets/items/titanic-hydra.webp',
    category: 'Upgraded',
    attributes: {
      health: 450,
    },
    tags: ['Health', 'Attack Damage'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Colossus',
        description:
          'Gain bonus attack damage equal to 15 (+ 2.5% maximum health).',
      },
      {
        name: 'Unique – Cleave',
        description:
          'Your next basic attack on-hit will deal bonus physical damage equal to 25 (+ 3% bonus health), and 80 (+ 10% bonus health) physical damage to other enemies in a 550-range cone in the direction of the primary target (1.75 second cooldown).',
      },
    ],
  },
  {
    name: 'Trinity Force',
    imageURL: '/assets/items/trinity-force.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 30,
      abilityHaste: 25,
      attackSpeed: 30,
      health: 250,
    },
    tags: ['Attack Damage', 'Health'],
    price: 3333,
    uniquePassives: [
      {
        name: 'Unique – Fervor',
        description: '+5% move speed.',
      },
      {
        name: 'Unique – Spellblade',
        description:
          'After using an ability, your next basic attack within 10 seconds deals bonus physical damage on-hit equal to 200% base AD (1.5 second cooldown). The damage is reduced to 50% against structures.',
      },
      {
        name: 'Unique – Valor',
        description:
          'Basic attacks on-hit grant +(Melee role 20 / Ranged role 10) bonus move speed for 2 seconds. Killing a unit grants +(Melee role 60 / Ranged role 30) bonus move speed instead. Bonuses do not stack.',
      },
    ],
  },
  {
    name: "Warmog's Armor",
    imageURL: '/assets/items/warmogs-armor.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      health: 700,
    },
    tags: ['Health'],
    price: 2850,
    uniquePassives: [
      {
        name: "Unique – Warmog's Heart",
        description:
          'After 6 seconds without taking damage, you regenerate 5% maximum health every second.',
      },
    ],
  },
  {
    name: "Winter's Approach",
    imageURL: '/assets/items/winters-approach.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 15,
      health: 350,
      mana: 500,
    },
    tags: ['Health', 'Mana'],
    price: 2600,
    uniquePassives: [
      {
        name: 'Unique – Awe',
        description:
          'Grants bonus health equal to 8% maximum mana. Refunds 15% of mana spent.',
      },
      {
        name: 'Unique – Mana Charge',
        description:
          'Generates a charge every 4 seconds, stacking up to 3 charges. Each basic attack on-hit, mana expenditure, or taking damage from champions, epic monsters, or turrets consumes a charge and grants +12 mana, stacking up to 700 mana. Transforms into Fimbulwinter at +700 mana.',
      },
    ],
  },
  {
    name: "Wit's End",
    imageURL: '/assets/items/wits-end.webp',
    category: 'Upgraded',
    attributes: {
      magicResistance: 50,
      attackSpeed: 45,
    },
    tags: ['Magic Resistance', 'Attack Speed'],
    price: 2700,
    uniquePassives: [
      {
        name: "Unique – At Wit's End",
        description:
          'Your basic attacks deal 15 − 80 (based on level) bonus magic damage on-hit. While below 50% maximum health, you heal for (Melee role 100% / Ranged role 33%) of the damage that enemy champions take from this effect.',
      },
    ],
  },
  {
    name: "Youmuu's Ghostblade",
    imageURL: '/assets/items/youmuus-ghostblade.webp',
    category: 'Upgraded',
    attributes: {
      attackDamage: 55,
      abilityHaste: 15,
    },
    tags: ['Attack Damage'],
    price: 3000,
    uniquePassives: [
      {
        name: 'Unique – Slice',
        description: '+15 armor penetration.',
      },
      {
        name: 'Unique – Momentum',
        description:
          'Your movement generates stacks of Momentum, which is all expended by basic attacks and decays while movement is impaired. Each stack grants 0.4 bonus move speed, stacking up to 100 times for 40 bonus move speed.',
      },
      {
        name: 'Unique – Spectral Haste',
        description:
          'Basic attacks that expend maximum Momentum grant 25% bonus attack speed for 4 seconds.',
      },
    ],
  },
  {
    name: "Zeke's Convergence",
    imageURL: '/assets/items/zekes-convergence.webp',
    category: 'Upgraded',
    attributes: {
      abilityHaste: 10,
      armor: 40,
      health: 350,
      mana: 150,
    },
    tags: ['Health', 'Armor'],
    price: 2700,
    uniquePassives: [
      {
        name: 'Unique – Harbinger',
        description:
          'While near an allied champion, casting your ultimate ability grants you and a nearby allied champion bonus effects for 10 seconds. Prioritizes highest attack damage ally, else the nearest ally.',
      },
      {
        name: 'Unique – Frostfire Covenant',
        description:
          'If an enemy is both struck by Frost and Fire, your Frost aura ignites and becomes a Frostfire storm, dealing 60 magic damage per second to nearby enemies and slowing by 50% for 3 seconds.',
      },
    ],
  },
];

export default ITEMS;
