import { createPack } from "../../services/db";

const Admin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    let formObj = {};

    for (let key of form.keys()) {
      formObj[key] = form.get(key);
    }

    formObj = {
      ...formObj,
      fav: formObj.fav ? true : false,
      price: parseFloat(formObj.price),
      quantity: parseFloat(formObj.quantity),
      size: parseFloat(formObj.size),
    };

    console.log(formObj);

    await createPack(formObj);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>create / put some packs onto the database.</h2>
      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" />
      <label htmlFor="packName">Pack Name</label>
      <input type="text" id="packName" name="packName" />
      <label htmlFor="colour">Colour</label>
      <input type="text" name="colour" id="colour" />
      <label htmlFor="price">Price</label>
      <input type="text" name="price" id="price" />
      <label htmlFor="priceCurrency">Currency</label>
      <input type="text" name="priceCurrency" id="priceCurrency" />
      <label htmlFor="fav">Favourite?</label>
      <input type="checkbox" name="fav" id="fav" />
      <label htmlFor="imgUrl">Img URL</label>
      <input type="text" name="imgUrl" id="imgUrl" />
      <label htmlFor="quantity">Qty</label>
      <input type="text" name="quantity" id="quantity" />
      <label htmlFor="size">Size</label>
      <input type="text" name="size" id="size" />
      <label htmlFor="description">Description</label>
      <textarea type="text" name="description" id="description" />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Admin;
