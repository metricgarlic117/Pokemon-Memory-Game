const Card = ({ image, name, onClick }) => {
  return (
    <button onClick={onClick}>
      <img src={image} alt={name + "/'image"} />
      <div>{name}</div>
    </button>
  );
};

export default Card;
