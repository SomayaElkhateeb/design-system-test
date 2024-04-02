import { useState } from "react";
import { Button } from "src/app/components/optimized";

function TikTokCard({ partnerImage, partnerName, partnerstatus, userId }) {
  const [status, setStatus] = useState(partnerstatus);
  return (
    <div className="bg-white rounded-lg border-b overflow-hidden flex items-center justify-between">
      <div className="flex items-center py-4 px-5 border-b border-gray-200">
        <img
          className="w-10 h-10 rounded-full mr-3"
          src={partnerImage}
          alt="Partner picture"
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-gray-800">{partnerName}</span>
          <span className="text-xs text-gray-500">{partnerstatus}</span>
          <p className="text-sm text-gray-800">
            <span className="text-gray-500">User ID #</span>
            {userId}
          </p>
        </div>
      </div>
      <div className="p-4">
        <Button onClick={() => setStatus(!status)} variant="secondary">
          {status ? "Disconect" : "Connected"}
        </Button>
      </div>
    </div>
  );
}

export default TikTokCard;
