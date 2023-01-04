import catPhoto from "./assets/cat1.png";

export default function DonationCardText({ children }) {
  return (
    <div className="container w-[90%] md:w-[616px] grid justify-content-center h-96 py-8">
      <div className="card bg-base-100 shadow-xl ">
        <figure>
          <img
            src={catPhoto}
            alt="A black cat looking straight into the camera. A cat tree is out of focus in the background"
          />
        </figure>
        <div className="card-body">
          <h1 className="text-2xl md:text-5xl font-bold card-title pb-2">
            Donate to Kitty's House
          </h1>
          <p>
            Kitty's House is a non-profit cat rescue and retreat. We foster
            kittens until they reach adoption age. We also have senior cats who
            are eligible to be adopted into their forever home. They still have
            a lot of love to give!
          </p>
          <p>Help us continue our mission and donate to Kitty's House today.</p>

          {children}
        </div>
      </div>
    </div>
  );
}
