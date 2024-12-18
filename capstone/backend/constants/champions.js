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
    title: 'The Darkin Blade',
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
];

export default CHAMPIONS;
