import cloudinary from 'cloudinary.v2'

export const imageUploader = async (file, folder, height, quality) => {
  try {
    const option = {
      folder: folder,
    };
    if (height) {
      option.height = height;
    }
    if (quality) {
      option.quality = quality;
    }
    option.resource_type = "auto";
    const response = await cloudinary.uploader.upload(file.tempFilePath, option);
    return response;
  } catch (err) {
    console.log(err);
  }
};
