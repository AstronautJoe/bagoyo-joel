const SPELLS = [
  {
    name: 'Heal',
    image: '/assets/spells/heal.webp',
    description:
      'Heal for 100 − 390 (based on level) to you and the most wounded nearby ally champion, and both of you gain 30% bonus movement speed for 1 second.',
    cooldown: 110,
  },
  {
    name: 'Ghost',
    image: '/assets/spells/ghost.webp',
    description:
      'Gain a burst of movement speed that decays to 25% bonus movement speed for 8 seconds. Scoring a champion takedown will extend the duration by 6 seconds and refresh the effects, up to the original duration.',
    cooldown: 90,
  },
  {
    name: 'Barrier',
    image: '/assets/spells/barrier.webp',
    description:
      'Shield your champion for 110 − 450 (based on level) for 2 seconds.',
    cooldown: 100,
  },
  {
    name: 'Exhaust',
    image: '/assets/spells/exhaust.webp',
    description:
      'Exhaust the target enemy champion for 2.5 seconds, reducing their damage dealt by 40% and Slow icon slowing them by 60% decaying over the duration.',
    cooldown: 100,
  },
  {
    name: 'Ignite',
    image: '/assets/spells/ignite.webp',
    description:
      'Ignite the target enemy champion for 5 seconds, revealing them, inflicting 60% Grievous Wounds, and dealing 72 − 380 (based on level) true damage over the duration.',
    cooldown: 100,
  },
  {
    name: 'Flash',
    image: '/assets/spells/flash.webp',
    description:
      'Blink your champion a short distance forward or towards the target direction.',
    cooldown: 150,
  },
  {
    name: 'Smite',
    image: '/assets/spells/smite.webp',
    description:
      'Deal 600 true damage to the target large or epic monster or minion and heal for 70 + (10% maximum health). Transforms into Chilling Smite after 3 uses.',
    cooldown: 90,
  },
];

export default SPELLS;
