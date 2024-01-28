import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import funnies from "../../lib/funnies";

const Logo = () => {
  const { data } = useQuery("information", getInformation);

 
  
  const [loadingText, setLoadingText] = useState('Loading...');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingText(funnies[Math.floor(Math.random() * funnies.length)]);
    }, 2250);
    return () => clearInterval(timer);
  }, []);
 
  if (!data) return null;
  
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
          <div className="pt-4">
            {loadingText}
          </div>
      </div>
        
  );
};

export default Logo;
