/* eslint-disable no-unused-labels */
import PropTypes from 'prop-types'

const ErrorMessage = ({ ErrorText, alertType=null }) => {
    return <p className="FieldError">{ErrorText}{" "}{ alertType}</p>;
};
ErrorMessage.propTypes;
{
  ErrorText: PropTypes.any.isRequired;
}
export default ErrorMessage;
