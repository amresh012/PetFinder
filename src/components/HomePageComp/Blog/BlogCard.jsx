/* eslint-disable react/prop-types */
const TestimonialCard = ({index , name, message ,role , img}) => {
  return <div>
    {
        <div key={index} className="">
        <p>{message}</p>
        <img src={img} alt="" />
          <h6 className="">{name}</h6>
          <span className="text-muted">{role}</span>   
        </div>
    }
  </div>;
};

export default TestimonialCard;
