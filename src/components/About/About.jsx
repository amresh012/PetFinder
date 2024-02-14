import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div id="about" className="bg-gray-950 h-auto  grid place-items-center relative ">
      <h1 className=" text-6xl lg:text-8xl font-extrabold text-blue-500 top-[50%] z-[10] mt-12  lg:absolute lg:opacity-20">
        About PetAdopt.
      </h1>
      <div className="">
        <h1 className="text-8xl text-white p-10">
          We are{" "}
          <span className="text-blue-500 font-bold underline">PetAdopt</span>
        </h1>
      </div>
      <div className="flex items-center gap-12  justify-center p-12">
        <div className="About-image ">
          <img src="/public/portrait-couple-with-small-pet.jpg" alt="" />
        </div>
        <div className="content flex flex-col gap-7 ">
          <p className="text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
            facere voluptas commodi consequuntur, molestiae quasi ad nulla
            tempore consequatur veritatis ducimus hic illo odit repudiandae
            sapiente animi labore officiis repellat! Libero, similique quod unde
            amet fuga neque quas sed ipsum, alias architecto officia nemo itaque
            illum voluptates voluptate, explicabo fugiat repellendus ullam
            praesentium fugit et error. Dicta itaque a reprehenderit? Obcaecati
            nihil, quod magnam voluptatum modi amet mollitia, voluptate sint
            placeat saepe iusto veritatis optio, sequi quidem voluptatem fuga
            illum aliquid fugiat. Optio quia dignissimos quasi voluptatibus
            quas. Maiores, nihil. A, eaque animi! Laudantium ex cumque
            consequatur delectus. Ut, ullam quis assumenda reprehenderit, modi
            inventore, similique ratione in quia vel facere ipsam accusamus cum
            excepturi optio debitis itaque dolor? Adipisci. Iste cum similique
            tempora inventore nemo? Eligendi corporis similique labore modi
            quidem laudantium expedita tenetur sint vitae non, eius, veniam
            recusandae velit voluptas distinctio ipsum beatae illum facere enim
            id? Aliquid, aut. Illum suscipit vero amet aperiam autem dignissimos
            rerum sunt architecto a ratione fugiat laudantium cupiditate, totam
          </p>
          <div
            className="button border-2 flex items-center justify-around gap-4 hover:bg-blue-500 cursor-pointer shadow-2xl shadow-black
           hover:text-white border-blue-500 w-fit px-4 py-2 text-white"
          >
            <button>Know More</button>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
