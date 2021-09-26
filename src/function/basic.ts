export const logMessage = (message: string): void => {
  console.log('Function basic sample 1;', message)
}

export function logMessage2(message: string): void {
  console.log('Function basic sample 2;', message)
}

export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3;', message)
}

export const logMessage4 = (message: string): void => console.log('Function basic sample 4;', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

type LogMessage = (message: string) => void
export const logMessage6: LogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}

type LogMessage2 = {
  (message: string): void
}
export const logMessage7: LogMessage2 = (message) => {
  console.log('Function basic sample 7:', message)
}
