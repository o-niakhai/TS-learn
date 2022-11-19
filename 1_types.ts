const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello world!'

const numberArray: number[] = [1, 2, 3, 4, 5, 6, 7]
const numberArray2: Array<number> = [1, 2, 3, 4, 5, 6, 7]
const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Oleg', 12345]

// Array
let variable: any = 41

//...
variable = 'New String'
variable = []

//===
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName( 'Heisenberg')

// Never
function throwError(message: string): never {
    throw new Error(message)
}
function infinite(): never {
    while (true) {
    }
}

//Type
type Login = string

const login: Login = 'admin'
// const login2: Login = 2

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true

type SomeType = string | null | undefined