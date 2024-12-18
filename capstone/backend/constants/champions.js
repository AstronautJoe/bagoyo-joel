// For Basic descriptions retrieve from:https://wildrift.leagueoflegends.com/en-sg/champions/
// For Technical descriptions retrieve from: https://leagueoflegends.fandom.com/wiki

const CHAMPIONS = [
  {
    name: 'Ashe',
    title: 'Frost Archer',
    assets: {
      imageThumbnail: '/assets/champions/ashe/thumbnail.webp',
      videoMP4: '/assets/champions/ashe/mutedVideo.mp4',
      videoWEBM: '/assets/champions/ashe/mutedVideo.webm',
    },
    mainRole: 'Duo',
    passive: {
      name: 'Frost Shot',
      image: '/assets/champions/ashe/frost-shot.webp',
      basicDescription:
        "Ashe's attacks slow their target, causing her to deal increased damage to these targets. Ashe's critical strikes deal no bonus damage but apply an empowered slow to the target.",
    },
    abilities: [
      {
        name: "Ranger's Focus",
        image: '/assets/champions/ashe/rangers-focus.webp',
        basicDescription:
          "Ashe builds up Focus by attacking. At maximum Focus, Ashe can cast Ranger's Focus to consume all stacks of Focus, temporarily increasing her Attack Speed and transforming her basic attack into a powerful flurry attack for the duration.",
        cooldownPerLevel: [7, 6, 5, 4],
        costPerLevel: {
          costAmount: [50],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Volley',
        image: '/assets/champions/ashe/volley.webp',
        basicDescription:
          'Ashe fires 9 arrows in a cone for increased damage. Also applies Frost Shot..',
        cooldownPerLevel: [16, 13.5, 11, 8.5],
        costPerLevel: {
          costAmount: [50],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Hawkshot',
        image: '/assets/champions/ashe/hawkshot.webp',
        basicDescription:
          'Ashe fires 9 arrows in a cone for increased damage. Also applies Frost Shot..',
        cooldownPerLevel: [45, 40, 35, 30],
        costPerLevel: {
          costAmount: [50],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Enchanted Crystal Arrow',
        image: '/assets/champions/ashe/enchanted-crystal-arrow.webp',
        basicDescription:
          'Ashe fires a missile of ice which she can steer in the air. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther arrow has traveled. In addition, surrounding enemy units take damage and are slowed.',
        cooldownPerLevel: [70, 60, 50],
        costPerLevel: {
          costAmount: [100],
          resourceType: 'Mana',
        },
      },
    ],
  },
  {
    name: 'Garen',
    title: 'Might of Demacia',
    assets: {
      imageThumbnail: '/assets/champions/ashe/thumbnail.webp',
      videoMP4: '/assets/champions/ashe/mutedVideo.mp4',
      videoWEBM: '/assets/champions/ashe/mutedVideo.webm',
    },
    mainRole: 'Solo',
    passive: {
      name: 'Perseverance',
      image: '/assets/champions/garen/perseverance.webp',
      basicDescription:
        'Garen regenerates missing health every second when he has not recently taken damage from enemy champions or epic monsters.',
    },
    abilities: [
      {
        name: 'Decisive Strike',
        image: '/assets/champions/garen/decisive-strike.webp',
        basicDescription:
          'Garen cleanses all slows and gains bonus movement speed. His next attack deals bonus physical damage and silences the target.',
        cooldownPerLevel: [9, 8.5, 8, 7.5],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'Courage',
        image: '/assets/champions/garen/courage.webp',
        basicDescription:
          'Garen reduces incoming damage for a few seconds and gains Tenacity for a short duration.',
        cooldownPerLevel: [18, 16, 14, 12],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'Judgment',
        image: '/assets/champions/garen/judgement.webp',
        basicDescription:
          'Garen spins in a circle, dealing damage to nearby enemies. This attack critically strikes enemies at the edge of its range.',
        cooldownPerLevel: [9, 8, 7, 6],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'Demacian Justice',
        image: '/assets/champions/garen/demacian-justice.webp',
        basicDescription:
          'Garen calls upon the power of Demacia to execute an enemy champion, dealing more damage to targets with lower health. Nearby enemies take reduced damage.',
        cooldownPerLevel: [70, 65, 60],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
    ],
  },
  {
    name: 'Aatrox',
    title: 'Darkin Blade',
    assets: {
      imageThumbnail: '/assets/champions/ashe/thumbnail.webp',
      videoMP4: '/assets/champions/ashe/mutedVideo.mp4',
      videoWEBM: '/assets/champions/ashe/mutedVideo.webm',
    },
    mainRole: 'Top',
    passive: {
      name: 'Deathbringer Stance',
      basicDescription:
        "Aatrox periodically empowers his next basic attack, dealing bonus physical damage based on the target's max health and healing for a portion of the damage dealt. Basic attacks and abilities that hit champions or large monsters reduce the cooldown.",
    },
    abilities: [
      {
        name: 'The Darkin Blade',
        image: 'assets/champions/aatrox/the-darkin-blade.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox strikes in the target direction up to three times, each cast dealing increasing damage. Each strike has a sweetspot for bonus damage and knock-up.',
        cooldownPerLevel: [13, 11, 9, 7],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'Infernal Chains',
        image: 'assets/champions/aatrox/infernal-chains.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox throws a chain that damages and slows the first enemy hit. If it hits a champion or large monster, they are tethered to the impact area. If the target fails to break the tether, they are pulled back to the center and damaged again.',
        cooldownPerLevel: [15, 14, 13, 12],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'Umbral Dash',
        image: 'assets/champions/aatrox/umbral-dash.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox dashes in the target direction. Passively, he heals for a portion of the damage dealt to enemy champions. This ability can be used during his other abilities without interruption.',
        cooldownPerLevel: [8, 7, 6, 5],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
      {
        name: 'World Ender',
        image: 'assets/champions/aatrox/world-ender.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox unleashes his true form, gaining bonus attack damage, movement speed, size, and increased healing. During the transformation, champion takedowns extend the duration of his ultimate.',
        cooldownPerLevel: [75, 65, 55],
        costPerLevel: {
          costAmount: [0],
          resourceType: 'No Cost',
        },
      },
    ],
  },
  {
    name: 'Soraka',
    title: 'Starchild',
    assets: {
      imageThumbnail: '/assets/champions/soraka/thumbnail.webp',
      videoMP4: '/assets/champions/soraka/mutedVideo.mp4',
      videoWEBM: '/assets/champions/soraka/mutedVideo.webm',
    },
    mainRole: 'Support',
    passive: {
      name: 'Salvation',
      basicDescription:
        'Soraka gains 100% bonus movement speed when moving toward allied champions below 35% health.',
    },
    abilities: [
      {
        name: 'Starcall',
        image: '/assets/champions/soraka/starcall.webp',
        basicDescription:
          'Soraka calls a star, dealing magic damage and slowing enemies. If an enemy champion is hit, Soraka gains Rejuvenation, healing her over 2.5 seconds. After healing any ally champion 3 times, Starcall is empowered to deal 140% damage in a target area.',
        cooldownPerLevel: [7, 6, 5, 4],
        costPerLevel: {
          costAmount: [45, 50, 55, 60],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Astral Infusion',
        image: '/assets/champions/soraka/astral-infusion.webp',
        basicDescription:
          'Soraka heals another allied champion. If Soraka has Rejuvenation, the ally gains Rejuvenation for 2.5 seconds, and the health cost will be reduced by a percentage.',
        cooldownPerLevel: [5, 4, 3, 2],
        costPerLevel: {
          costAmount: [
            '10% Max Health + 55',
            '10% Max Health + 60',
            '10% Max Health + 65',
            '10% Max Health + 70',
          ],
          resourceType: 'Health + Mana',
        },
      },
      {
        name: 'Equinox',
        image: '/assets/champions/soraka/equinox.webp',
        basicDescription:
          'Soraka creates a zone that deals magic damage and silences enemies. After 1.5 seconds, the zone deals the same damage again and roots enemies.',
        cooldownPerLevel: [20, 18, 16, 14],
        costPerLevel: {
          costAmount: [70],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Wish',
        image: '/assets/champions/soraka/wish.webp',
        basicDescription:
          'Soraka heals all allied champions. The heal is increased by 50% for allies below 35% health.',
        cooldownPerLevel: [100, 90, 80],
        costPerLevel: {
          costAmount: [100],
          resourceType: 'Mana',
        },
      },
    ],
  },
  {
    name: 'Warwick',
    title: 'The Uncaged Wrath of Zaun',
    assets: {
      imageThumbnail: '/assets/champions/warwick/thumbnail.webp',
      videoMP4: '/assets/champions/warwick/mutedVideo.mp4',
      videoWEBM: '/assets/champions/warwick/mutedVideo.webm',
    },
    mainRole: 'Jungle',
    passive: {
      name: 'Eternal Hunger',
      image: '/assets/champions/warwick/eternal-hunger.webp',
      basicDescription:
        "Warwick's basic attacks deal bonus magic damage on-hit. While below 50% maximum health, he heals for 100% of the post-mitigation damage dealt by Eternal Hunger.",
    },
    abilities: [
      {
        name: 'Jaws of the Beast',
        image: '/assets/champions/warwick/jaws-of-the-beast.webp',
        basicDescription:
          'Warwick lunges at an enemy, dealing magic damage and healing himself for a portion of the damage dealt. If held, Warwick dashes behind the target after biting.',
        cooldownPerLevel: [6, 6, 6, 6],
        costPerLevel: {
          costAmount: [50],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Blood Hunt',
        image: '/assets/champions/warwick/blood-hunt.webp',
        basicDescription:
          'Passive: Warwick gains bonus attack speed and movement speed against low-health enemies. Active: Warwick marks the nearest enemy champion, gaining passive bonuses against them for 8 seconds regardless of their current health.',
        cooldownPerLevel: [80, 70, 60, 50],
        costPerLevel: {
          costAmount: [70],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Primal Howl',
        image: '/assets/champions/warwick/primal-howl.webp',
        basicDescription:
          'Warwick gains damage reduction for up to 2.5 seconds. Recast: Warwick fears nearby enemies for 1 second, slowing them by 90%.',
        cooldownPerLevel: [14, 13, 12, 11],
        costPerLevel: {
          costAmount: [40],
          resourceType: 'Mana',
        },
      },
      {
        name: 'Infinite Duress',
        image: '/assets/champions/warwick/infinite-duress.webp',
        basicDescription:
          'Warwick leaps to a target, suppressing them for 1.5 seconds and dealing magic damage over time. He heals for all post-mitigation damage dealt during this time.',
        cooldownPerLevel: [75, 65, 55],
        costPerLevel: {
          costAmount: [100],
          resourceType: 'Mana',
        },
      },
    ],
  },
];

export default CHAMPIONS;
