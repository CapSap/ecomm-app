const Pack = ({ pack }) => {
  return (
    <div>
      <img alt={pack.name} />
      <p>Name: {pack.name}</p>
    </div>
  );
};

export default Pack;
