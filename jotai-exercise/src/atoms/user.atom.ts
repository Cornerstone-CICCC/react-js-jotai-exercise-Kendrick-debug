import { atom } from "jotai";


const firstNameAtom = atom<string>('')
const lastNameAtom = atom<string>('')
const ageAtom = atom<number>(0)
const hobbiesAtom = atom<[]>([])    


// const UserAtom = atom((get) => {
//     return {
//         firstname: get(firstNameAtom),
//         lastname: get(lastNameAtom),
//         age: get(ageAtom),
//         hobbies: get(hobbiesAtom)
//     }
// })


export {
    firstNameAtom,
    lastNameAtom,
    ageAtom,
    hobbiesAtom
}