export default function tupleSample() {
  const response: [number, string] = [200, 'OK']
  // response = [400, 'NG', 'OK'];
  // response = ['200', 'OK'];
  console.log('Tuple Sample 1:', response)

  const girlfrends: [string, ...string[]] = ['nao', 'keiko', 'sachiko']
  console.log('Tuple Sample 2:', girlfrends)
}
