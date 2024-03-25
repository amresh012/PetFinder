/* eslint-disable no-unused-labels */
import PropTypes from "prop-types";

const ErrorMessage = ({ ErrorText="", alertType = null, color="white" }) => {
  return (
    <p className={`text-${color}`}>
      {ErrorText} {alertType}
    </p>
  );
};
ErrorMessage.propTypes;
{
  ErrorText: PropTypes.any.isRequired;
}
export default ErrorMessage;
