export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 1:', stringReduce(['A', 'B', 'C'], 'NAO'))

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReduce([1, 4, 10], 30))

  type GenericsReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericsStringReduce: GenericsReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3:', genericsStringReduce(['A', 'B', 'C'], 'NAOYUKI'))

  const genericsNumberReduce: GenericsReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 4:', genericsNumberReduce([100, 200, 300], 1000))

  type GenericsReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  type GenericsReduce3<T> = (array: T[], initialValue: T) => T
  type GenericsReduce4 = <T>(array: T[], initialValue: T) => T
}
