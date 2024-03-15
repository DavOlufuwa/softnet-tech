import { motion as m } from "framer-motion";
import Magnetic from "../magnetic/Magnetic";

const OfferingCard = ({ imgLink, title, content }) => {
  return (
    <div className="">
      <Magnetic>
        <m.div
          className="h-full pt-10 pb-5 px-7 bg-slate-800 rounded-lg transition-all hover:bg-gradient-to-r from-slate-900 to-green-800 hover:duration-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex gap-3 mb-5">
            <div>
              <img src={imgLink} alt={`Icon for ${title}`} className="w-6" />
            </div>
            <p className="text-gray-50 text-lg font-semibold hover:text-green-400 duration-150">
              {title}
            </p>
          </div>
          <hr className="border-gray-700 mb-5"/>
          <div className="text-gray-300 font-light tracking-wide leading-7">{content}</div>
        </m.div>
      </Magnetic>
    </div>
  );
};

export default OfferingCard;
