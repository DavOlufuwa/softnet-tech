import { motion as m } from "framer-motion";
import OfferingCard from "../components/contents/OfferingCard";
import { offerlist } from "../components/contents/offerlist";
import Preloader from "../components/preloader/Preloader";

const Offerings = () => {
  return (
    <>
      <Preloader loaderText="Our Services" />
      <div>
        <m.div
          className="bg-gray-900 text-white absolute h-max w-full z-3 top-0 left-0 bottom-0 right-0 px-5 pb-12 sm:px-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.75 } }}
        >
          <div className="casing mt-24 sm:mt-32">
            <m.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 2.75, duration: 0.75 }}
              className="text-6xl font-bold md:text-6xl lg:leading-tight"
            >
              Our Services
            </m.h2>
          </div>
          <m.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {offerlist.map((o) => (
              <OfferingCard key={o.id} {...o} />
            ))}
          </m.div>
        </m.div>
      </div>
    </>
  );
};

export default Offerings;
