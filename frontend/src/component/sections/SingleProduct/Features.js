import React from "react";

const Features = ({ data }) => {
  return (
    <section>
      <div className="fluidContainer pt-20">
        <div className="lg:w-3/4">
          <h2 className="mb-6 text-center md:text-left">DESCRIPTION</h2>
          <p className="md:h-auto h-60 overflow-auto">{data}</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
