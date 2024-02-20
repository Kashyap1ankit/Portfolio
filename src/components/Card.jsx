import SimpleImageSlider from "react-simple-image-slider";
import Heading from "./Heading";

export default function Card({ title, para, images, techstack }) {
  return (
    <div className="max-w-xl rounded overflow-hidden shadow-lg ">
      <SimpleImageSlider
        width={572}
        height={300}
        images={images}
        showBullets={true}
        autoPlay={true}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{para}</p>

        <div className="grid grid-cols-4 gap-4 mt-7">
          {techstack.map((e) => {
            return (
              <div className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <Heading title={e} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
