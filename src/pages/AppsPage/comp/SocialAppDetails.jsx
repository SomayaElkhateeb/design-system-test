import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getImageUrl } from "src/app/utils";
import { socialMediaContent } from "src/app/utils/constants";
import { BackIcon } from "src/app/utils/icons";
import data from "./data.json";
import { Button } from "src/app/components/optimized";
const SocialAppDetails = () => {
  const { platform } = useParams();
  const [socialPlatform, setSocialPlatform] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSocialPlatformContent = () => {
      const content = data.apps[platform];
      setSocialPlatform(content);
    };
    fetchSocialPlatformContent();
  }, [platform]);

  if (!socialPlatform) {
    return <div>Loading...</div>;
  }

  const {
    name,
    image,
    status,
    posters,
    videoUrl,
    features,
    description,
    backgroundColor,
  } = socialPlatform;
  const statusPadge = status === "available" ? "free" : "installed";

  const [fColor, sColor] = backgroundColor;

  return (
    <div>
      {/*[1] Top Bar */}

      <div className=" flex justify-between px-4 py-3 bg-white">
        <div className="flex items-center">
          <Link to={-1}>
            <BackIcon />
          </Link>
          <h2 className="font-semibold text-lg text-title capitalize">
            {name}
          </h2>
        </div>
        <Button
          text="Install now"
          onClick={() => navigate(`/marketing/${name}/${name}-setup`)}
        />
      </div>

      {/*[2] gradient section */}

      <div
        style={{
          backgroundImage: `linear-gradient(313.9deg, ${fColor} -2.74%, ${sColor} 140.56%)`,
        }}
        className="p-5 flex justify-between h-[180px] max-[992px]:flex-col max-[992px]:h-64 max-[992px]:items-center max-[992px]:mb-32"
      >
        <div className="flex mr-3 max-[992px]:mb-5">
          <div className="size-[120px] min-w-[120px] mr-5 grid place-content-center bg-white rounded-lg">
            <img
              src={getImageUrl(image)}
              alt={name}
              className="w-[90px] object-cover"
            />
          </div>
          <div className=" max-w-[600px] text-white">
            <h2 className="mb-3 font-semibold text-lg text-white capitalize">
              {name}
            </h2>
            <p className="text-sm font-normal  text-white">{description}</p>
            <img
              src={getImageUrl(`padges/${statusPadge}.svg`)}
              alt="status"
              className="h-7 mt-3"
            />
          </div>
        </div>
        <div className="-mr-4">
          <iframe
            width="384"
            height="216"
            src={videoUrl}
            title={name}
            allowFullScreen
          />
        </div>
      </div>
      {/*[3] feature section  */}
      <div className="p-5">
        {/* Description */}
        <div>
          {features?.map((feature, index) => (
            <div key={index} className="my-4 max-w-[600px]">
              <h2 className="text-lg font-bold text-pri-dark">
                {feature.title}
              </h2>
              <p className="mt-2 text-pri-dark">{feature.description}</p>
            </div>
          ))}
        </div>
        {/* Posters */}
        <div className="flex justify-between flex-wrap gap-7">
          {posters ? (
            <>
              {Object.entries(posters).map(([posterKey, posterValue]) => (
                <div
                  key={posterKey}
                  className="bg-gray-200 w-[350px] h-[250px] "
                >
                  <img
                    src={getImageUrl(posterValue)}
                    alt={posterKey}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-200 w-[350px] h-[250px] "
                ></div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SocialAppDetails;
