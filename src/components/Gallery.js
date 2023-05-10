import axios from "axios";
import { async } from "q";
import { useEffect, useState } from "react";

function Gallery() {
  const [gallery, setGallery] = useState();

  useEffect(() => {
    console.log("useeffect");

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://picsum.photos/v2/list?page=2&limit=10`
        )

        const images = response.data;
        console.log(response);
        console.log(images);
        setGallery({ images });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {/* {gallery &&
        gallery.map((item) => {
          return <img className="m-2" src={item.url} alt={item.author}></img>;
        })} */}
       
    </>
  );
}

export default Gallery;
