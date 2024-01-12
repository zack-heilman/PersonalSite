import { motion } from "framer-motion";
import { childrenAnimation } from "../../lib/motion";
import { getInformation } from "../../fetchers";
import { useQuery } from "react-query";

const AboutSection = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  return (
      
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className="about-content"
        >
          <ul className="styledlist">
            {data.firstName && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Name{" "}
                </strong>
                : {data.fullName}
              </li>
            )}
            {data.occupation && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Occupation{" "}
                </strong>
                : {data.occupation}
              </li>
            )}
            {data.location && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Location{" "}
                </strong>
                : {data.location}
              </li>
            )}
          </ul>
        </motion.div>
      </div>
  );
};

export default AboutSection;
