import dataProducts from "./MockApi";

const getDataSayuran = (data) => {
  let dataSayuran = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "sayuran") {
      dataSayuran.push(data[i]);
    }
  }
  return dataSayuran;
};

const getDataBuah = (data) => {
  let dataBuah = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].category === "buah") {
      dataBuah.push(data[i]);
    }
  }
  return dataBuah;
};

const getDetailProduct = (id) => {
  return dataProducts.find((product) => product.id === id);
};

const productCarts = [];

const addProductToCarts = (id) => {
  const productToAdd = dataProducts.find((product) => product.id === id);
  productCarts.push(productToAdd);
  return productCarts;
};

// console.log('product cart:' , productCarts);

export default getDetailProduct;
export const dataSayuran = getDataSayuran(dataProducts);
export const dataBuah = getDataBuah(dataProducts);
export { addProductToCarts, productCarts };
