import PropTypes from "prop-types";
import { AnimatePresence, animate, motion } from "framer-motion";
import TabContent from "./TabContent";

export default function TabButtons({ petData, activeTab, setActiveTab }) {
  TabButtons.propTypes = {
    petData: PropTypes.arrayOf(
      PropTypes.shape({
        animal: PropTypes.string.isRequired,
      })
    ).isRequired,
    activeTab: PropTypes.number.isRequired,
    setActiveTab: PropTypes.func.isRequired,
  };

  const handleClick = (index) => {
    setActiveTab(index);
    animate(TabContent, [TabContent.children]);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div className="tab__header">
        {petData.map((item, index) => (
          <li
            className={`${index === activeTab && "active"} tab__button`}
            key={item.animal}
            onClick={() => handleClick(index)}
          >
            {item.animal}
          </li>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
