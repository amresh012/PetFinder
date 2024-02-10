const About = () => {
  return (
    <div className="bg-gray-950 h-auto grid place-items-center relative">
      <h1 className=" text-3xl lg:text-8xl font-extrabold text-blue-500 top-[50%] z-[10] mt-12  lg:absolute lg:opacity-20">
        About PetAdopt.
      </h1>
      <h1 className="text-6xl hidden lg:block lg:text-[6rem] font-bold text-blue-500 m-12 underline underline-offset-2">
        Who we are?
      </h1>
      <div className="flex flex-col lg:flex-row  justify-center items-center  ">
        <div className="img flex items-center w-full lg:w-[60vw] ml-3 justify-center overflow-hidden "></div>
        <div className="para w-md lg:w-full p-12  flex flex-col items-center justify-center ">
          <p className=" text-white text-center mr-3  leading-10 font-thin">
            Your Trusted Companion in Pet Adoption Are you ready to embark on a
            heartwarming journey of companionship? Look no further! PetFinder is
            your ultimate destination for finding the perfect furry friend to
            join your family. Whether you&apos;re a seasoned pet owner or a
            first-time adopter, we&apos;re here to guide you every step of the
            way. At PetFinder, we understand the profound joy and fulfillment
            that comes from welcoming a pet into your life. That&apos;s why
            we&apos;ve created a user-friendly platform that connects you with
            adorable pets in need of loving homes, right in your local area. Our
            mission is simple: to facilitate meaningful connections between pets
            in shelters and compassionate individuals like you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
