const Checkout = () => {
  return (
    <div className="h-[100vh] p-20  justify-center items-end bg-[url('/assets/images/backgroud-image.png')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-4xl text-white  mb-5">
        Thanks for supporting us dear customer, meet you at your next order{" "}
      </h1>
      <p>
        <a
          href={"/"}
          className="py-3 px-6 ml-auto m-5 w-fit inline-flex justify-center items-center gap-3 text-[purple] bg-[white] font-semibold rounded-full hover:cursor-pointer hover:opacity-90"
        >
          Go Back Home
        </a>
      </p>
    </div>
  );
};

export default Checkout;
