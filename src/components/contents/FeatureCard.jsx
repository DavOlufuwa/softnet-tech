import { motion as m } from "framer-motion";

const FeatureCard = ({ title, content }) => {
  return (
    <m.div
      className="py-4 px-4 bg-slate-800 rounded-lg transition-all hover:bg-gradient-to-r hover:from-slate-900 hover:to-green-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 , transitionDuration: 1, transitionDelay: 1.5 }}
      whileHover={{ scale: 1.05, transitionDuration: 0.5 }}
    >
      <div className="flex gap-3 mb-3">
        <span className="w-3 h-3 bg-green-500 rounded-full mt-[6px]"></span>{" "}
        <p className="text-gray-50 font-semibold hover:text-green-400 duration-150">
          {title}
        </p>
      </div>
      <div className="text-gray-300 font-light">{content}</div>
    </m.div>
  );
};

export default FeatureCard;
