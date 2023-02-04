const Circles = ({ value, onClick }) => {
  return (
    <button type="button" className="circles" onClick={onClick}>
      {value}
    </button>
  );
};

export default Circles;
