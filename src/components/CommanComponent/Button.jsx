/* eslint-disable react/prop-types */

const Button = ({text,className ,icon,onClick}) => {
  return (
    <button
      className={className}
      // data-aos="fade-up"
      // data-aos-duration="1000"
      // data-aos-once="true"
      onClick={onClick}>
      {text}
      {icon}
    </button>
  );
}

export default Button