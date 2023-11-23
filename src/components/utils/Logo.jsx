import Image from "next/image";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";

const Logo = () => {
  const { data } = useQuery("information", getInformation);

  if (!data) return null;

  return (
      <div className="h-10 w-16">
        <Image
          loader={imageLoader}
          unoptimized={true}
          src={data.logo}
          height={150}
          width={250}
          layout="responsive"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(150, 150)
          )}`}
        />
      </div>
        
  );
};

export default Logo;
