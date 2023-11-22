import Image from "next/image";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { motion } from "framer-motion";
import { loadingScreenLogoAnimation } from "../../lib/motion";

const Logo = () => {
  const { data } = useQuery("information", getInformation);

  console.log(data);

  if (!data) return null;

  return (
      <div className="h-1/4 w-1/4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          animate="magic"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={loadingScreenLogoAnimation}
        >
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={data.firstNameImage}
            height={150}
            width={250}
            layout="responsive"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(150, 150)
            )}`}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          animate="magic"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={loadingScreenLogoAnimation}
        >
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={data.lastNameImage}
            height={150}
            width={250}
            layout="responsive"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(150, 150)
            )}`}
          />
        </motion.div>
      </div>
        
  );
};

export default Logo;
