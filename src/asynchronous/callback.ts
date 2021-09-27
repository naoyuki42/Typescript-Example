export default function callbackSample() {
  const url = 'https://api.github.com/users/naoyuki42'

  const fetchProfile = () => {
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((json) => {
            console.log('Asynchronous Sample 1:', json)
            return json
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const profile = fetchProfile()
  console.log('Asynchronous Sample 2:', profile)
}
