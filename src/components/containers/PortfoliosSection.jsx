import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPortfolios } from "../../fetchers";

import { childrenAnimation } from "../../lib/motion";
import { Portfolio } from "../elements";

const PortfoliosSection = () => {
  // States
  const [visiblePortfolios, setVisiblePortfolios] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const { data } = useQuery("portfolios", getPortfolios);

  useEffect(() => {
    if (data) setVisiblePortfolios(data.slice(0, 6));
  }, [data]);

  // Load more function
  const handleLoadmore = useCallback(() => {
    setPageNumber((prevNumber) => prevNumber + 1);
    if (currentFilter === "") {
      setVisiblePortfolios(data.slice(0, (pageNumber + 1) * 6));
    } else {
      setVisiblePortfolios(
        data
          .slice(0, (pageNumber + 1) * 6)
      );
    }
  }, [data, pageNumber]);

  if (!data) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.2 }}
      variants={childrenAnimation}
      className="col-span-9 lg:col-span-4"
    >
      <h4>
        Personal Projects
      </h4>
      <motion.div layout className="mt-12 grid grid-cols-6 gap-7">
        {visiblePortfolios?.map((portfolio) => (
          <motion.div
            layout
            exit={{ scale: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            key={portfolio.id}
          >
            <Portfolio portfolio={portfolio} />
          </motion.div>
        ))}
      </motion.div>
      {visiblePortfolios < data ? (
        <div className="mt-12 text-center">
          <button className="btn btn-small" onClick={() => handleLoadmore()}>
            <span>Load More</span>
          </button>
        </div>
      ) : null}
    </motion.div>
  );
};

export default PortfoliosSection;
