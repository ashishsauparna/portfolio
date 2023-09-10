import { motion } from "framer-motion";

const YourSVG = () => (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 889.4 95.58">
    {/* <path className="cls-1" d="m10.5,15.5l825.76-5L97.19,85.08s663.46-1.21,781.71-11.85"/> */}
    <motion.path
        strokeDasharray={3000}
        strokeDashoffset={3000}
        initial={{ strokeDasharray: "3000", strokeDashoffset: "3000" }}
        animate={{ strokeDasharray: "3000", strokeDashoffset: "0" }}
        transition={{ 
            duration: 1.1,

        }}
        className="pencile_mark"
        viewport={{
            once:true
          }}
        d="m25.5,15.5l825.76-5L97.19"/>
  </svg>
  );
  
export default YourSVG;