import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { imgVariants, contentVariants } from "./emotion";

export default function TabContent({ activeTab, petData }) {
  TabContent.propTypes = {
    activeTab: PropTypes.number.isRequired,
    petData: PropTypes.array.isRequired,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div className="tab__container " key={activeTab}>
        <div className="tab__content">
          {/* algo */}
          <motion.img
            src={petData[activeTab].image}
            alt=""
            initial="initial"
            animate="animate"
            exit="exit"
            variants={imgVariants}
            transition={{duration: 0.5}}
          />
          <motion.p
            variants={contentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {" "}
            {petData[activeTab].fact}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
