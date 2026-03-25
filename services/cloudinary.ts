// placeholder service for Cloudinary upload
// In production you would call your own server-side endpoint to
// sign the upload request. This file simply exports a helper
// that pushes a blob to a Cloudinary unsigned preset.

export const uploadToCloudinary = async (file: File): Promise<string> => {
  const url = `https://api.cloudinary.com/v1_1/${process.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
  const form = new FormData();
  form.append('file', file);
  form.append('upload_preset', process.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'unsigned');

  const res = await fetch(url, { method: 'POST', body: form });
  const data = await res.json();
  return data.secure_url;
};
