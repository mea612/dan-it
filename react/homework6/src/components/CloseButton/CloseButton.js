import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  btnClose: {
    outline: "none",
    border: "none",
    background: "none",
    color: "#528ec1",
    fontSize: "18px",
    transition: "all .3s",
    padding: 0,
    // position: 'absolute',
    // right: '10px',
    // top: '5px',
    marginLeft: "auto",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },
});

const CloseButton = (props) => {
  const classes = useStyles();
  const { onClick, text, title } = props;
  return (
    <button onClick={onClick} className={classes.btnClose} title={title}>
      {text}
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default CloseButton;
