export default function promiseSample() {
  const url = 'https://api.github.com/users/naoyuki42'

  type Profile = {
    login: string
    id: number
  }

  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile = () => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          res
            .json()
            .then((json) => {
              console.log('Asynchronous Sample 1:', json)
              resolve(json)
            })
            .catch((error) => {
              console.error(error)
              reject(null)
            })
        })
        .catch((error) => {
          console.error(error)
          reject(null)
        })
    })
  }

  fetchProfile().then((profile: Profile | null) => {
    if (profile) {
      console.log('Asynchronous Sample 2:', profile)
    }
  })
}
