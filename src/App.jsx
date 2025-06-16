import { useState } from "react";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const defaultItems = [
    { id: "gourd", imgSrc: "bau.png", count: 0 },
    { id: "fish", imgSrc: "ca.png", count: 0 },
    { id: "crab", imgSrc: "cua.png", count: 0 },
    { id: "chicken", imgSrc: "ga.png", count: 0 },
    { id: "deer", imgSrc: "huou.png", count: 0 },
    { id: "shrimp", imgSrc: "tom.png", count: 0 },
  ];

  const [choiceItems, setChoiceItems] = useState(defaultItems);
  const [spinItems, setSpinItems] = useState(["bau.png", "bau.png", "bau.png"]);
  const [count, setCount] = useState(0)
  const [isSpinning, setIsSpinning] = useState(false)
  const [chosenItems, setChosenItems] = useState([])
  const [resultMessage, setResultMessage] = useState("")

  function increaseCount(index) {
    if (count > 2)  return

    const updated = [...choiceItems]
    updated[index].count++

    setChoiceItems(updated)
    setChosenItems(prev => [...prev, updated[index].id])
    setCount(prev => prev + 1)
  }

  function reset() {
    setChoiceItems(defaultItems.map(item => {
      return {...item, count: 0}
    }))
    setCount(0)
    setChosenItems([])
  }

  function spin() {
    if (count === 0) {
      alert("Please place at least 1 choice")
      return
    }
    setIsSpinning(true)

    let interval = setInterval(() => {
      let result = []
      let images = []

      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * choiceItems.length)
        const chosen = choiceItems[randomIndex]

        result.push(chosen.id)
        images.push(chosen.imgSrc)
      }

      setSpinItems(images)
    }, 30)

    setTimeout(() => {
      clearInterval(interval)

      const finalResult = []
      const finalImages = []

      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * choiceItems.length)
        const chosen = choiceItems[randomIndex]

        finalResult.push(chosen.id)
        finalImages.push(chosen.imgSrc)
      }

      setSpinItems(finalImages)
      setIsSpinning(false)
      displayResult(finalResult)
    }, 3000)
  }

  function displayResult(result) {
    const uniqueChoices = [...new Set(chosenItems)]

    const matchedItems = uniqueChoices.filter(choice => result.includes(choice))

    if (matchedItems.length === 3) {
      setResultMessage("🎉 Congratulation! You matched all 3. Incredibly lucky!!!")
    } else if (matchedItems.length > 0) {
      setResultMessage(`😮 So close! You matched ${matchedItems.length} item(s): ${matchedItems.join(', ')}`)
    } else {
      setResultMessage("😢 Unlucky! You didn't match anything. ")
    }
  }

  return (
    <div className="max-w-[1280px] my-0 mx-auto">
      <h1 className="text-center text-2xl font-bold my-7">
        Vietnamese Traditional Game: GOURD-CRAB-SHRIMP-FISH
      </h1>
      <h2 className="text-center text-lg font-extrabold mb-2 text-green-400">The Result here</h2>

      <Header spinItems={spinItems} spin={spin} disable={isSpinning} />
      <Body choiceItems={choiceItems} increaseCount={increaseCount} disable={isSpinning} />
      <Footer reset={reset} disable={isSpinning} resultMessage={resultMessage}/>
    </div>
  );
}

export default App;
