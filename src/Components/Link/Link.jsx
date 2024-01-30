import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="p-2 hover:bg-yellow-400">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.node,
};

export default Link;
