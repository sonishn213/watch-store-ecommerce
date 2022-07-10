import Forms from "../component/sections/Checkout/Forms";
import Summary from "../component/sections/Checkout/Summary";
const Checkout = () => {
  return (
    <main className="bg-gray-light">
      <div className="grid md:grid-cols-3 fluidContainer gap-4 pt-10 px-4  max-w-6xl mx-auto pb-10">
        <section className="md:col-span-2 bg-white rounded-r-md">
          <Forms />
        </section>
        <section className="bg-white rounded-md">
          <Summary />
        </section>
      </div>
    </main>
  );
};

export default Checkout;
