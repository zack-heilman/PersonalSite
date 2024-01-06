import Image from "next/image";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { motion } from "framer-motion";
import funnies from "../../lib/funnies";

const Logo = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  const randomJoke = funnies[Math.floor(Math.random() * funnies.length)];

  return (
      <div className="h-1/3 w-1/3">
          <Image
            loader={imageLoader}
            unoptimized={true}
            src={data.loadingDeskGif}
            height={173}
            width={374}
            layout="responsive"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(150, 150)
            )}`}
          />
          {randomJoke}
      </div>
        
  );
};

export default Logo;
