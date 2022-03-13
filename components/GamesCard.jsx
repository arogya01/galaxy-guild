import Image from "next/image";

export default function GamesCard({ gameName, imgSrc }) {
  return (
    <div className="relative w-full h-[10rem] rounded-lg m-8">
      <div className="imgWrapper w-full h-[180px] lg:w-3/4 mr-4 rounded-lg">
        <Image src={imgSrc} alt="gameImg" layout="fill" objectFit="cover" />
        <style jsx>
          {`
            .imgWrapper {
              position: absolute;
              opacity: 0.5;
            }

            div > span {
              border-radius: 10px;
            }
          `}
        </style>
      </div>
      <div className="text-wrapper font-bold">
        <style jsx>
          {`
            .text-wrapper {
              z-index: 2;
              padding-top: 5rem;
              padding-left: 1rem;
            }
          `}
        </style>
        <h2 className="font-fontDM text-2xl z-2">{gameName}</h2>
        <p className="font-fontDM">MMORPG</p>
      </div>
    </div>
  );
}
