import Image from "next/image";
'use client';
import { useState,useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function Home() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imageListRef = ref(storage, "images/")
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Image Uploaded")
      return listAll(imageListRef)
    })
    .then((response) => {
      const promises = response.items.map((item) => getDownloadURL(item));
      return Promise.all(promises);
    })
    .then((urls) => {
      // Update the image URLs to include the newly uploaded image
      setImageUrls(urls);
    });
  };
  
  useEffect(() => {
    listAll(imageListRef)
      .then((response) => {
        const promises = response.items.map((item) => getDownloadURL(item));
        return Promise.all(promises);
      })
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, []);

  return (
    <div className="flex items-center h-auto w-full flex-col">
      <input type="file" onChange={(event) => {
        setImageUpload(event.target.files[0])}}/>
      <button onClick={uploadImage} className="rounded border border-black">Upload Image</button>
      {imageUrls.map((url) => {
        return <img style={{width: "300px", margin: "10px"}} src={url} />;
      })}
    </div>
  );
}
