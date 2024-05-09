"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

import { formStyles } from "../../styles/FormStyles";

interface IGalleryProps {
  selectedImages: string[];
  errorImages: string;
  handleSelectedImages: (image: string) => void;
  handleSubmit: () => void;
  handleCancel: () => void;
}

const Gallery: React.FC<IGalleryProps> = ({
  selectedImages,
  errorImages,
  handleSelectedImages,
  handleSubmit,
  handleCancel,
}) => {
  const [offset, setOffset] = useState<number>(10);
  const [availableImages, setAvailableImages] = useState<string[]>(
    enlaces.slice(0, 10)
  );

  const getImages = () => {
    const images = enlaces.slice(offset, offset + 10);
    setAvailableImages((prev) => [...prev, ...images]);
    setOffset(offset + 10);
  };

  return (
    <>
      <h2 className="text-2xl font-medium text-secondary">Select images</h2>

      <div className="z-20 sticky top-0 flex flex-col gap-4 items-center p-4 w-full bg-body">
        <div className="flex gap-8">
          <button
            type="button"
            title="Cancel"
            onClick={handleCancel}
            className={formStyles.buttonSP + " min-w-32"}
          >
            Cancel
          </button>
          <button
            type="button"
            title="Add images"
            onClick={handleSubmit}
            className={formStyles.buttonSP + " min-w-32"}
          >
            Add images
          </button>
        </div>

        {errorImages && (
          <p className={"flex items-center gap-1 text-red-600"}>
            {" "}
            <MdErrorOutline />
            {errorImages}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-12">
        <div className="flex flex-wrap justify-center gap-12 p-4">
          {availableImages.map((image) => (
            <div
              key={image}
              onClick={() => handleSelectedImages(image)}
              className="relative flex items-center justify-center h-80 cursor-pointer hover:scale-105 duration-150"
            >
              <div
                className={
                  selectedImages.includes(image)
                    ? "absolute flex justify-center items-center h-full w-full bg-secondary opacity-60"
                    : "hidden"
                }
              >
                <IoMdCheckmark className="z-10 text-5xl text-primary" />
              </div>
              <Image
                src={image}
                alt=""
                height={960}
                width={1170}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          title="More images"
          onClick={getImages}
          className={formStyles.buttonSP + " m-auto w-max"}
        >
          More images
        </button>
      </div>
    </>
  );
};

export default Gallery;

const enlaces = [
  "https://iili.io/J8zaYpn.webp",
  "https://iili.io/J8za7kX.webp",
  "https://iili.io/J8za57t.webp",
  "https://iili.io/J8zacIs.webp",
  "https://iili.io/J8za0Qf.webp",
  "https://iili.io/J8zaEB4.webp",
  "https://iili.io/J8zalhG.webp",
  "https://iili.io/J8zaM42.webp",
  "https://iili.io/J8zaGEl.webp",
  "https://iili.io/J8zaXY7.webp",
  "https://iili.io/J8zaW2S.webp",
  "https://iili.io/J8zajpe.webp",
  "https://iili.io/J8zag3B.png",
  "https://iili.io/J8zaNTu.webp",
  "https://iili.io/J8zaOhb.webp",
  "https://iili.io/J8zavCx.webp",
  "https://iili.io/J8zaeQj.webp",
  "https://iili.io/J8zaS4V.webp",
  "https://iili.io/J8za8EQ.webp",
  "https://iili.io/J8za4v1.webp",
  "https://iili.io/J8zarYP.webp",
  "https://iili.io/J8zaiTg.webp",
  "https://iili.io/J8za6yF.webp",
  "https://iili.io/J8zasja.webp",
  "https://iili.io/J8zaLZJ.webp",
  "https://iili.io/J8zaZCv.webp",
  "https://iili.io/J8zatGR.webp",
  "https://iili.io/J8zaD4p.webp",
  "https://iili.io/J8zapaI.webp",
  "https://iili.io/J8zam3N.webp",
  "https://iili.io/J8zayvt.webp",
  "https://iili.io/J8zc9yX.webp",
  "https://iili.io/J8zcJun.webp",
  "https://iili.io/J8zcdjs.webp",
  "https://iili.io/J8zc2ZG.webp",
  "https://iili.io/J8zcFnf.webp",
  "https://iili.io/J8zcf6l.webp",
  "https://iili.io/J8zcKG4.webp",
  "https://iili.io/J8zcBF2.webp",
  "https://iili.io/J8zcCaS.webp",
  "https://iili.io/J8zcn87.webp",
  "https://iili.io/J8zcx99.webp",
  "https://iili.io/J8zcIwu.webp",
  "https://iili.io/J8zczue.webp",
  "https://iili.io/J8zcAnj.webp",
  "https://iili.io/J8zcRMx.webp",
  "https://iili.io/J8zcTZb.webp",
  "https://iili.io/J8zcacB.webp",
  "https://iili.io/J8zcYFV.webp",
  "https://iili.io/J8zc091.webp",
  "https://iili.io/J8zcc8P.webp",
  "https://iili.io/J8zcEwg.webp",
  "https://iili.io/J8zc1AF.webp",
  "https://iili.io/J8zcGta.webp",
  "https://iili.io/J8zcVoJ.webp",
  "https://iili.io/J8zcWMv.webp",
  "https://iili.io/J8zcXPR.webp",
  "https://iili.io/J8zcwcN.webp",
  "https://iili.io/J8zcjFp.webp",
  "https://iili.io/J8zce9t.webp",
  "https://iili.io/J8zcNSI.webp",
  "https://iili.io/J8zcvNn.webp",
  "https://iili.io/J8zckAX.webp",
  "https://iili.io/J8zc8ts.webp",
  "https://iili.io/J8zcgVf.webp",
  "https://iili.io/J8zcUoG.webp",
  "https://iili.io/J8zc6Kl.webp",
  "https://iili.io/J8zcrP4.webp",
  "https://iili.io/J8zcQR9.webp",
  "https://iili.io/J8zcLH7.webp",
  "https://iili.io/J8zctDu.webp",
  "https://iili.io/J8zcZNe.webp",
  "https://iili.io/J8zcmVj.webp",
  "https://iili.io/J8zcbob.webp",
  "https://iili.io/J8zcpix.webp",
  "https://iili.io/J8zlHlV.webp",
  "https://iili.io/J8zl9KQ.webp",
  "https://iili.io/J8zlJUB.webp",
  "https://iili.io/J8zl2HP.webp",
  "https://iili.io/J8zl3R1.webp",
  "https://iili.io/J8zlFOF.webp",
  "https://iili.io/J8zlKDg.webp",
  "https://iili.io/J8zlqxa.webp",
  "https://iili.io/J8zlCiv.webp",
  "https://iili.io/J8zlBWJ.webp",
  "https://iili.io/J8zlxlp.webp",
  "https://iili.io/J8zlofR.webp",
  "https://iili.io/J8zlTJI.webp",
  "https://iili.io/J8zlzUN.webp",
  "https://iili.io/J8zluRt.webp",
  "https://iili.io/J8zlAOX.webp",
  "https://iili.io/J8zlRbn.webp",
  "https://iili.io/J8zl7xs.webp",
  "https://iili.io/J8zlYWG.webp",
  "https://iili.io/J8zlasf.webp",
  "https://iili.io/J8zl00l.webp",
  "https://iili.io/J8zllf4.webp",
  "https://iili.io/J8zlGJS.webp",
  "https://iili.io/J8zl1g2.webp",
  "https://iili.io/J8zlM57.webp",
  "https://iili.io/J8zlVe9.webp",
  "https://iili.io/J8zlWbe.webp",
  "https://iili.io/J8zljWb.webp",
  "https://iili.io/J8zlhzu.webp",
  "https://iili.io/J8zlwsj.webp",
  "https://iili.io/J8zlOqx.webp",
  "https://iili.io/J8zlkgV.webp",
  "https://iili.io/J8zle0Q.webp",
  "https://iili.io/J8zlS5P.webp",
  "https://iili.io/J8zl8dB.webp",
  "https://iili.io/J8zlgmF.webp",
  "https://iili.io/J8zlUe1.webp",
  "https://iili.io/J8zl6Xa.webp",
  "https://iili.io/J8zl4zg.webp",
  "https://iili.io/J8zlsqv.webp",
  "https://iili.io/J8zlPLJ.webp",
  "https://iili.io/J8zlQgp.webp",
  "https://iili.io/J8zlL1R.webp",
  "https://iili.io/J8zlD7I.webp",
  "https://iili.io/J8zltdN.webp",
  "https://iili.io/J8zlbet.webp",
  "https://iili.io/J8zlmmX.webp",
];
