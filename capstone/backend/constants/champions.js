// For Basic descriptions retrieve from:https://wildrift.leagueoflegends.com/en-sg/champions/
// For Technical descriptions retrieve from: https://leagueoflegends.fandom.com/wiki

const CHAMPIONS = [
  {
    name: 'Ashe',
    title: 'Frost Archer',
    assets: {
      imageThumbnail: '/assets/champions/ashe/champion-thumbnail.webp',
      videoMP4: '/assets/champions/ashe/champion-intro.mp4',
      videoWEBM: '/assets/champions/ashe/champion-intro.webm',
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
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Volley',
        image: '/assets/champions/ashe/volley.webp',
        basicDescription:
          'Ashe fires 9 arrows in a cone for increased damage. Also applies Frost Shot.',
        cooldownPerLevel: [16, 13.5, 11, 8.5],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Hawkshot',
        image: '/assets/champions/ashe/hawkshot.webp',
        basicDescription:
          'Ashe sends her hawk to scout the area. Grants vision as it flies and reveals units it passes over.',
        cooldownPerLevel: [45, 40, 35, 30],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Enchanted Crystal Arrow',
        image: '/assets/champions/ashe/enchanted-crystal-arrow.webp',
        basicDescription:
          'Ashe fires a missile of ice which she can steer in the air. If the arrow collides with an enemy Champion, it deals damage and stuns the Champion, stunning for longer the farther the arrow has traveled. In addition, surrounding enemy units take damage and are slowed.',
        cooldownPerLevel: [70, 60, 50],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Garen',
    title: 'Might of Demacia',
    assets: {
      imageThumbnail: '/assets/champions/garen/champion-thumbnail.webp',
      videoMP4: '/assets/champions/garen/champion-intro.mp4',
      videoWEBM: '/assets/champions/garen/champion-intro.webm',
    },
    mainRole: 'Baron',
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
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Courage',
        image: '/assets/champions/garen/courage.webp',
        basicDescription:
          'Garen reduces incoming damage for a few seconds and gains Tenacity for a short duration.',
        cooldownPerLevel: [18, 16, 14, 12],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Judgment',
        image: '/assets/champions/garen/judgement.webp',
        basicDescription:
          'Garen spins in a circle, dealing damage to nearby enemies. This attack critically strikes enemies at the edge of its range.',
        cooldownPerLevel: [9, 8, 7, 6],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Demacian Justice',
        image: '/assets/champions/garen/demacian-justice.webp',
        basicDescription:
          'Garen calls upon the power of Demacia to execute an enemy champion, dealing more damage to targets with lower health. Nearby enemies take reduced damage.',
        cooldownPerLevel: [70, 65, 60],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Aatrox',
    title: 'Darkin Blade',
    assets: {
      imageThumbnail: '/assets/champions/aatrox/champion-thumbnail.webp',
      videoMP4: '/assets/champions/aatrox/champion-intro.mp4',
      videoWEBM: '/assets/champions/aatrox/champion-intro.webm',
    },
    mainRole: 'Baron',
    secondaryRole: 'Jungle',
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
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Infernal Chains',
        image: 'assets/champions/aatrox/infernal-chains.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox throws a chain that damages and slows the first enemy hit. If it hits a champion or large monster, they are tethered to the impact area. If the target fails to break the tether, they are pulled back to the center and damaged again.',
        cooldownPerLevel: [15, 14, 13, 12],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Umbral Dash',
        image: 'assets/champions/aatrox/umbral-dash.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox dashes in the target direction. Passively, he heals for a portion of the damage dealt to enemy champions. This ability can be used during his other abilities without interruption.',
        cooldownPerLevel: [8, 7, 6, 5],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'World Ender',
        image: 'assets/champions/aatrox/world-ender.webp', // Replace with the actual image URL
        basicDescription:
          'Aatrox unleashes his true form, gaining bonus attack damage, movement speed, size, and increased healing. During the transformation, champion takedowns extend the duration of his ultimate.',
        cooldownPerLevel: [75, 65, 55],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Soraka',
    title: 'Starchild',
    assets: {
      imageThumbnail: '/assets/champions/soraka/champion-thumbnail.webp',
      videoMP4: '/assets/champions/soraka/champion-intro.mp4',
      videoWEBM: '/assets/champions/soraka/champion-intro.webm',
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
        costPerLevel: [
          [
            {
              amount: 45,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 55,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 60,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Astral Infusion',
        image: '/assets/champions/soraka/astral-infusion.webp',
        basicDescription:
          'Soraka heals another allied champion. If Soraka has Rejuvenation, the ally gains Rejuvenation for 2.5 seconds, and the health cost will be reduced by a percentage.',
        cooldownPerLevel: [5, 4, 3, 2],
        costPerLevel: [
          [
            {
              amount: 10,
              isPercentage: true,
              resourceType: 'max-health',
            },
            {
              amount: 55,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 10,
              isPercentage: true,
              resourceType: 'max-health',
            },
            {
              amount: 60,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 10,
              isPercentage: true,
              resourceType: 'max-health',
            },
            {
              amount: 65,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 10,
              isPercentage: true,
              resourceType: 'max-health',
            },
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Equinox',
        image: '/assets/champions/soraka/equinox.webp',
        basicDescription:
          'Soraka creates a zone that deals magic damage and silences enemies. After 1.5 seconds, the zone deals the same damage again and roots enemies.',
        cooldownPerLevel: [20, 18, 16, 14],
        costPerLevel: [
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Wish',
        image: '/assets/champions/soraka/wish.webp',
        basicDescription:
          'Soraka heals all allied champions. The heal is increased by 50% for allies below 35% health.',
        cooldownPerLevel: [100, 90, 80],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Warwick',
    title: 'The Uncaged Wrath of Zaun',
    assets: {
      imageThumbnail: '/assets/champions/warwick/champion-thumbnail.webp',
      videoMP4: '/assets/champions/warwick/champion-intro.mp4',
      videoWEBM: '/assets/champions/warwick/champion-intro.webm',
    },
    mainRole: 'Jungle',
    secondaryRole: 'Baron',
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
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Blood Hunt',
        image: '/assets/champions/warwick/blood-hunt.webp',
        basicDescription:
          'Passive: Warwick gains bonus attack speed and movement speed against low-health enemies. Active: Warwick marks the nearest enemy champion, gaining passive bonuses against them for 8 seconds regardless of their current health.',
        cooldownPerLevel: [80, 70, 60, 50],
        costPerLevel: [
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Primal Howl',
        image: '/assets/champions/warwick/primal-howl.webp',
        basicDescription:
          'Warwick gains damage reduction for up to 2.5 seconds. Recast: Warwick fears nearby enemies for 1 second, slowing them by 90%.',
        cooldownPerLevel: [14, 13, 12, 11],
        costPerLevel: [
          [
            {
              amount: 40,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Infinite Duress',
        image: '/assets/champions/warwick/infinite-duress.webp',
        basicDescription:
          'Warwick leaps to a target, suppressing them for 1.5 seconds and dealing magic damage over time. He heals for all post-mitigation damage dealt during this time.',
        cooldownPerLevel: [75, 65, 55],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Annie',
    title: 'Dark Child',
    assets: {
      imageThumbnail: '/assets/champions/annie/champion-thumbnail.webp',
      videoMP4: '/assets/champions/annie/champion-intro.mp4',
      videoWEBM: '/assets/champions/annie/champion-intro.webm',
    },
    mainRole: 'Mid',
    passive: {
      name: 'Pyromania',
      image: '/assets/champions/annie/pyromania.webp',
      basicDescription:
        'Annie gains a stack of Pyromania each time she casts an ability, stacking up to 4 times. At 4 stacks, her next ability consumes all stacks to additionally stun for 1.25 / 1.5 / 1.75 (based on level) seconds.',
    },
    abilities: [
      {
        name: 'Disintegrate',
        image: '/assets/champions/annie/disintegrate.webp',
        basicDescription:
          'Annie launches a fireball in the target direction that explodes upon the first enemy hit or reaching maximum range, dealing magic damage to all nearby enemies.',
        cooldownPerLevel: [4, 4, 4, 4],
        costPerLevel: [
          [
            {
              amount: 65,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 75,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 80,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Incinerate',
        image: '/assets/champions/annie/incinerate.webp',
        basicDescription:
          'Annie unleashes fire in a cone in the target direction, dealing magic damage to enemies hit.',
        cooldownPerLevel: [8, 8, 8, 8],
        costPerLevel: [
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 80,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 90,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Molten Shield',
        image: '/assets/champions/annie/molten-shield.webp',
        basicDescription:
          'Annie grants a shield to herself and Tibbers for 3 seconds. They also gain bonus movement speed that decays over 3 seconds.',
        cooldownPerLevel: [14, 13, 12, 11],
        costPerLevel: [
          [
            {
              amount: 60,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Summon: Tibbers',
        image: '/assets/champions/annie/summon-tibbers.webp',
        basicDescription:
          'Annie summons Tibbers at the target location, dealing magic damage to nearby enemies. For the next 20 seconds, Tibbers deals bonus magic damage with his attacks.',
        cooldownPerLevel: [70, 65, 60],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Master Yi',
    title: 'Wuju Bladesman',
    assets: {
      imageThumbnail: '/assets/champions/master-yi/champion-thumbnail.webp',
      videoMP4: '/assets/champions/master-yi/champion-intro.mp4',
      videoWEBM: '/assets/champions/master-yi/champion-intro.webm',
    },
    mainRole: 'Jungle',
    passive: {
      name: 'Double Strike',
      image: '/assets/champions/master-yi/double-strike.webp',
      basicDescription:
        'Every 4th consecutive basic attack strikes twice for 150% AD physical damage.',
    },
    abilities: [
      {
        name: 'Alpha Strike',
        image: '/assets/champions/master-yi/alpha-strike.webp',
        basicDescription:
          'Master Yi becomes untargetable and strikes up to 4 enemies near his target, dealing physical damage. If there are no other targets, Alpha Strike can strike the same enemy unit repeatedly, dealing 25% damage with each subsequent strike.',
        cooldownPerLevel: [17, 16, 15, 14],
        costPerLevel: [
          [
            {
              amount: 55,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 60,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 65,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Meditate',
        image: '/assets/champions/master-yi/meditate.webp',
        basicDescription:
          'Master Yi channels for up to 4 seconds, gaining damage reduction and healing each second. The heal is increased based on missing health.',
        cooldownPerLevel: [25, 25, 25, 25],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Wuju Style',
        image: '/assets/champions/master-yi/wuju-style.webp',
        basicDescription:
          'Passive: Master Yi gains 10% AD while Wuju Style is off cooldown. Active: Master Yi’s basic attacks deal bonus true damage for 5 seconds.',
        cooldownPerLevel: [17, 16, 15, 14],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Highlander',
        image: '/assets/champions/master-yi/highlander.webp',
        basicDescription:
          "Passive: Takedowns reduce Master Yi's basic ability cooldowns by 70%. Active: Master Yi becomes immune to slows, gains bonus movement speed and bonus attack speed for 7 seconds. Takedowns extend the duration of this ability by 7 seconds.",
        cooldownPerLevel: [80, 70, 60],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Jinx',
    title: 'The Loose Cannon',
    assets: {
      imageThumbnail: '/assets/champions/jinx/champion-thumbnail.webp',
      videoMP4: '/assets/champions/jinx/champion-intro.mp4',
      videoWEBM: '/assets/champions/jinx/champion-intro.webm',
    },
    mainRole: 'Duo',
    passive: {
      name: 'Get Excited!',
      image: '/assets/champions/jinx/get-excited.webp',
      basicDescription:
        'Scoring a takedown on a champion or structure that Jinx has damaged within the last 3 seconds grants her 150% decaying bonus movement speed and 15% total attack speed for 6 seconds. While Excited, Jinx can exceed the attack speed cap.',
    },
    abilities: [
      {
        name: 'Switcheroo!',
        image: '/assets/champions/jinx/switcheroo.webp',
        basicDescription:
          'Jinx switches between Pow-Pow, her minigun, and Fishbones, her rocket launcher. Pow-Pow grants bonus attack speed, while Fishbones deals bonus physical damage and has increased attack range and splash damage.',
        cooldownPerLevel: [1, 1, 1, 1],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Zap!',
        image: '/assets/champions/jinx/zap.webp',
        basicDescription:
          'Jinx fires a shock blast that deals physical damage to the first enemy hit, granting vision and slowing them for 2 seconds.',
        cooldownPerLevel: [8, 7, 6, 5],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 60,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
          [
            {
              amount: 80,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Flame Chompers!',
        image: '/assets/champions/jinx/flame-chompers.webp',
        basicDescription:
          'Jinx tosses out three chompers that explode on contact with enemy champions, interrupting dashes and rooting them. Enemies hit take magic damage.',
        cooldownPerLevel: [19, 16, 13, 10],
        costPerLevel: [
          [
            {
              amount: 70,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Super Mega Death Rocket!',
        image: '/assets/champions/jinx/super-mega-death-rocket.webp',
        basicDescription:
          'Jinx fires a mega-rocket that gains damage and speed over the first second. It explodes on the first enemy champion hit, dealing physical damage, with nearby enemies taking reduced damage.',
        cooldownPerLevel: [60, 50, 40],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Blitzcrank',
    title: 'Great Steam Golem',
    assets: {
      imageThumbnail: '/assets/champions/blitzcrank/champion-thumbnail.webp',
      videoMP4: '/assets/champions/blitzcrank/champion-intro.mp4',
      videoWEBM: '/assets/champions/blitzcrank/champion-intro.webm',
    },
    mainRole: 'Support',
    passive: {
      name: 'Mana Barrier',
      image: '/assets/champions/blitzcrank/mana-barrier.webp',
      basicDescription:
        'Periodically, when Blitzcrank’s health drops below 35%, he generates a shield equal to 30% of his maximum mana, lasting for 10 seconds.',
    },
    abilities: [
      {
        name: 'Rocket Grab',
        image: '/assets/champions/blitzcrank/rocket-grab.webp',
        basicDescription:
          'Blitzcrank fires his right hand in the target direction, grabbing the first enemy hit and pulling them towards him, stunning them for 0.65 seconds.',
        cooldownPerLevel: [18, 17, 16, 15],
        costPerLevel: [
          [
            {
              amount: 80,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Overdrive',
        image: '/assets/champions/blitzcrank/overdrive.webp',
        basicDescription:
          'Blitzcrank gains bonus movement speed for 2.5 seconds, decaying to 25%. The ability can be recast for an increased speed boost, but Blitzcrank becomes slowed afterward.',
        cooldownPerLevel: [10, 10, 10, 10],
        costPerLevel: [
          [
            {
              amount: 50,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Power Fist',
        image: '/assets/champions/blitzcrank/power-fist.webp',
        basicDescription:
          'Blitzcrank empowers his next basic attack within 5 seconds, gaining bonus attack range and causing his attack to critically strike and knock up the target for 1 second.',
        cooldownPerLevel: [8, 7, 6, 5],
        costPerLevel: [
          [
            {
              amount: 25,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
      {
        name: 'Static Field',
        image: '/assets/champions/blitzcrank/static-field.webp',
        basicDescription:
          'Blitzcrank’s basic attacks mark enemies, detonating after 1 second to deal magic damage. He can also activate this ability to deal magic damage and silence nearby enemies for 0.5 seconds.',
        cooldownPerLevel: [55, 35, 15],
        costPerLevel: [
          [
            {
              amount: 100,
              isPercentage: false,
              resourceType: 'mana',
            },
          ],
        ],
      },
    ],
  },
  {
    name: 'Riven',
    title: 'Exile',
    assets: {
      imageThumbnail: '/assets/champions/riven/champion-thumbnail.webp',
      videoMP4: '/assets/champions/riven/champion-intro.mp4',
      videoWEBM: '/assets/champions/riven/champion-intro.webm',
    },
    mainRole: 'Baron',
    secondaryRole: 'Jungle',
    passive: {
      name: 'Runic Blade',
      image: '/assets/champions/riven/runic-blade.webp',
      basicDescription:
        "Riven's ability casts generate a stack of Charge for 6 seconds, stacking up to 3 times. Her basic attacks consume a stack to deal bonus physical damage based on her AD, reduced against monsters and structures. The bonus damage is affected by critical strike modifiers.",
    },
    abilities: [
      {
        name: 'Broken Wings',
        image: '/assets/champions/riven/broken-wings.webp',
        basicDescription:
          'Riven slashes with her sword up to three times, dealing physical damage with each cast. The third cast strikes a larger area and knocks back enemies hit. Each cast resets her basic attack timer, and she can dash during the ability. The third cast can cross terrain.',
        cooldownPerLevel: [13, 13, 13, 13],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Ki Burst',
        image: '/assets/champions/riven/ki-burst.webp',
        basicDescription:
          'Riven emits a flash of energy, dealing physical damage to nearby enemies and stunning them for 0.75 seconds.',
        cooldownPerLevel: [8.5, 8, 7.5, 7],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Valor',
        image: '/assets/champions/riven/valor.webp',
        basicDescription:
          'Riven dashes in the target direction, gaining a shield for 2 seconds. She can cast other abilities during the dash, but she cannot dash through terrain.',
        cooldownPerLevel: [9, 8, 7, 6],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
      {
        name: 'Blade of the Exile',
        image: '/assets/champions/riven/blade-of-the-exile.webp',
        basicDescription:
          'Riven empowers her blade for 15 seconds, gaining bonus attack damage, increased range on her abilities, and bonus attack range. During this time, she can cast Wind Slash to deal damage in a cone. Takedowns reset Wind Slash’s cast and extend the duration of the ultimate.',
        cooldownPerLevel: [120, 105, 90, 75, 60],
        costPerLevel: [
          [
            {
              amount: 0,
              isPercentage: false,
              resourceType: 'no-cost',
            },
          ],
        ],
      },
    ],
  },
];

export default CHAMPIONS;
