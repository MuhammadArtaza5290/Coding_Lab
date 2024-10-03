import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Card from "../src/components/card/Card"
import './App.css'
import Input from "../src/components/input/Input"

function App() {
//   const cardData =[{
//     title: "Card 1",
//     content: "This is the content of Card 1",
//     about: "My self Hafiz Artaza.",
//     image: viteLogo
//   },
//   {
//     title: "Card 2",
//     content: "This is the content of Card 2",
//     about: "My self Arslan Ali.",
//     image: reactLogo
//   },
//   {
//     title: "Card 3",
//     content: "This is the content of Card 3",
//     about: "My self Rai Yousaf.",
//     image: reactLogo
//   }
// ]
  return (
    <>
    <Input />
    {/* {cardData.map((card, index) => (
      <Card key={index}
       title={card.title}
        content={card.content}
        about={card.about}
        image={card.image}
        />
    ))} */}
    </>
  )
}

export default App
