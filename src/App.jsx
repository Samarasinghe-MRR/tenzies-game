import { useState } from "react"
import { nanoid } from "nanoid"
import Die from "./Die"

export default function App() {

  const [dice, setDice] = useState(generateAllNewDice())

  // function generateAllNewDice() {
  //   const diceArr = []
  //   for (let i = 0; i < 10; i++) {
  //     const randomNumber = Math.ceil(Math.random() * 6)
  //     diceArr.push(randomNumber)
  //   }
  //   return diceArr
  // }

  function generateAllNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid()
      }))
  }

  function rollDice() {
    setDice(generateAllNewDice())
  }

  const diceElements = dice.map(num => <Die key={num.id} value={num.value} isHeld={num.isHeld} />)

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>

      <button className="roll-dice" onClick={rollDice}>Roll</button>

    </main>
  )
}