export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters Sample 1: User is Signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters Sample 2: User is Not Signed in!')
    return false
  }
}

export const isUserSignedIn2 = (userId: string, userName = 'No Name'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters Sample 3: User is Signed in! Username is', userName)
    return true
  } else {
    console.log('Function parameters Sample 4: User is Signed in! Username is', userName)
    return false
  }
}

export const sumProductsPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
