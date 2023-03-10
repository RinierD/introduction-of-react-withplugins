import PropTypes from "prop-types";
import BtnStyle from "./Button.module.css";

function Button({ text }) {
  return <button className={BtnStyle.button}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
