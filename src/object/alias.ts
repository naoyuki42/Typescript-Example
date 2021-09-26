export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Alias Sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'USA',
  }
  console.log('Alias Sample 2:', america)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    mp: 40,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイヤーボール',
  }

  console.log('Alias Sample 3:', adventurer1)
  console.log('Alias Sample 4:', adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイヤーボール',
  }
  console.log('Alias Sample 5:', paladin)
}
