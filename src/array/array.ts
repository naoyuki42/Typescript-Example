export default function arraySample() {
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123);
  console.log('Array Sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('10');
  console.log('Array Sample 2:', even)

  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true);
  console.log('Array Sample 3:', ids)

  const generateSomeArray = () => {
    const _someArray = []
    _someArray.push(123)
    _someArray.push('ABC')
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(false);
  console.log('Array Sample 4:', someArray)

  const commands: readonly string[] = ['git', 'add', 'commit']
  // commands.push('push');
  // commands[2] = 'push';
  console.log('Array Sample 5:', commands)
}
