import { useAtom } from "jotai";
import { ageAtom, firstNameAtom, hobbiesAtom, lastNameAtom,  } from "../atoms/user.atom";
import React, { useState, type FormEvent } from "react";





const User = () => {
    const [fname, setFname] = useAtom(firstNameAtom)
    const [lname, setLname] = useAtom(lastNameAtom)
    const [age, setage] = useAtom(ageAtom)
    const [hobbies, setHobbies] = useAtom(hobbiesAtom)

    const [fnameinput, setfnameInput] = useState<string>("")
    const [lnameInput, setLnameInput] = useState<string>("")
    const [ageInput, setAgeInput] = useState<number>(0)
    const [hobbiesInput, setHobbiesInput] = useState<string[]>([])



    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFname(fnameinput)
        setLname(lnameInput)
        setage(ageInput)
        setHobbies(hobbiesInput)

        


        setAgeInput(0)
        setfnameInput('')
        setLnameInput('')
        setHobbiesInput([])
    }


    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value, checked} = event.target

        if (checked) {
            setHobbiesInput((prev) => [...prev, value])
        } else {
            setHobbiesInput((prev) => prev.filter((hobby) => hobby !== value))
        }
    }

    return (
        <div>
  <h1>User Information</h1>

  <form
    onSubmit={handleSubmit}
  >
    <input type="text" value={fnameinput} onChange={e => setfnameInput(e.target.value)} placeholder="Enter first name"
    />

    <input  type="text"  value={lnameInput}  onChange={e => setLnameInput(e.target.value)}  placeholder="Enter last name"
    />

    <input  type="number" value={ageInput}  onChange={e => setAgeInput(Number(e.target.value))}
    />

    <div style={{display: "flex", flexDirection: "column", gap: '10px', marginBottom: '10px', marginTop: '10px'}}>
        <label htmlFor="Swimming">
        Swimming
        <input type="checkbox" id="Swimming"name=" Swimming" value="Swimming" onChange={handleCheckBox}
        />
        </label>

        <label htmlFor="Reading">
        Reading
        <input  type="checkbox"  id="Reading" name="Reading" value="Reading"  onChange={handleCheckBox} />
        </label>

        <label htmlFor="eating">
        eating
        <input type="checkbox" id="eating" name="eating" value="eating" onChange={handleCheckBox}  />
        </label>
    </div>
    <button type="submit">Add user</button>
  </form>

  <div>
    <span>
      <h2> My name is {fname} {lname} and I am  {age} Years old </h2>
    </span>
    <ul>
      My hobbies are: 
      {hobbies.map(h  => (
        <li>{h}</li>
      ))}
    </ul>
  </div>
</div>

    )


}

export default User