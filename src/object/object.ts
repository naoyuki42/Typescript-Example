export default function objectSample() {
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }
  console.log('Object Sample 1:', country)

  country = {
    language: 'English',
    name: 'USA',
  }
  console.log('Object Sample 2:', country)

  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: 'Naoyuki',
    firstName: 'Miyamori',
  }
  torahack.gender = 'male'
  torahack.lastName = 'Kamado'
  // torahack.firstName = "Tanjiro"
  console.log('Object Sample 3:', torahack)

  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }
  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object Sample 4:', capitals)
}
