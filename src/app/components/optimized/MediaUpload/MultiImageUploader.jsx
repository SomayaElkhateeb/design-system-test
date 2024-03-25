import { nanoid } from "nanoid";
import { useState } from "react";
import { ImageUploader } from "..";

const MultiImageUploader = () => {
  const [uploaders, setUploaders] = useState([{ id: nanoid() }]); // Initial state with one uploader

  const handleImageUpload = (uploaderId) => {
    if (uploaders[uploaders.length - 1].id === uploaderId) {
      setUploaders([...uploaders, { id: nanoid() }]);
    }
  };

  const handleImageDelete = (uploaderId) => {
    const filteredUploaders = uploaders.filter(
      (uploader) => uploader.id !== uploaderId
    );
    setUploaders(filteredUploaders);
  };

  return (
    <div className="flex gap-4">
      {uploaders.map((uploader) => (
        <ImageUploader
          key={uploader.id}
          onImageUpload={() => handleImageUpload(uploader.id)}
          onImageDelete={() => handleImageDelete(uploader.id)}
        />
      ))}
    </div>
  );
};
export default MultiImageUploader;
