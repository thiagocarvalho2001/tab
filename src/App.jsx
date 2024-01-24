import "./App.css";
import TabButtons from "./components/TabButtons";
import TabContent from "./components/TabContent";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const petData = [
    {
      animal: "Animal 1",
      fact: "Um fato aleatório...",
      image: "../src/assets/1.jpg",
    },
    {
      animal: "Animal 2",
      fact: "Um fato aleatório...",
      image: "../src/assets/2.jpg",
    },
    {
      animal: "Animal 3",
      fact: "Um fato aleatório...",
      image: "../src/assets/3.jpg",
    },
    {
      animal: "Animal 4",
      fact: "Um fato aleatório...",
      image: "../src/assets/4.jpg",
    },
    {
      animal: "Animal 5",
      fact: "Um fato aleatório...",
      image: "../src/assets/5.jpg",
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div className="main__container">
        <h1>Escolha seu animal</h1>
        <TabButtons
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          petData={petData}
        />
        <TabContent activeTab={activeTab} petData={petData} />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
