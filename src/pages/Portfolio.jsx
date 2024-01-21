import Head from "next/head";
import React from "react";
import Layout from "@/components/layout";
import AnimatedText from "@/components/animatedText";

import FileList from "@/components/FileNames";

// const Photos = () => {
//   const [photoList, setPhotoList] = useState([]);

//   useEffect(() => {
//     const fetchPhotos = async () => {
//       try {
//         const folderPath = "./photos"; // Path to the photos folder
//         const filenames = fs.readdirSync(folderPath);
//         setPhotoList(filenames);
//       } catch (error) {
//         console.error("Error reading photos folder:", error);
//       }
//     };

//     fetchPhotos();
//   }, []);

//   return (
//     <div>
//       <h1>Photos</h1>
//       {photoList.map((filename, index) => (
//         <Image
//           key={index}
//           src={`/photos/${filename}`} // Assuming photos folder is in the public directory
//           alt={`Photo ${index + 1}`}
//         />
//       ))}
//     </div>
//   );
// };

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Basanta || Portfolio</title>
        <meta
          name="description"
          content="basanta Shrestha from Kamana Sewa Bikas Bank"
        />
      </Head>

      <main className="w-full mt-0 h-screen flex flex-col items-center justify-evenly">
        <Layout className="pt-2 ">
          <AnimatedText text="Imagination Trumps Knowledge!" />
          {/* <div className="flex items-center justify-center"> */}
          <div className=" ">
            <FileList />
            {/* </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Portfolio;
