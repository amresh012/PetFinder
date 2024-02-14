import FaqBox from "./FaqBox";

const Faq = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full bg-slate-950">
      <div className="flex flex-col justify-start items-start w-full px-12 gap-7">
        <h1 className="text-6xl font-bold text-blue-500 pt-12">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="tex-medium text-white  text-xl">
          Have a dought? find here in faq
        </p>
      </div>
      <FaqBox />
    </div>
  );
};

export default Faq;
