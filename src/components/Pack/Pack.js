const Pack = ({ pack }) => {
  return (
    <div>
      <img src={pack.imgUrl} alt={pack.name} />
      <p>Name: {pack.packName}</p>
    </div>
  );
};
