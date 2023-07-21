const productos = [
    {
      title: "Buzo Negro estampado",
      id: 1,
      limit: 5,
      description: "Buzo de ultimo momento negro",
      img: "../../assets/buzo1.jpg",
      price: 15500,
      category: "buzos",
    },
    {
      title: "Remera estampada blanca",
      id: 2,
      stock: 8,
      description: "Remera oversize basic",
      img: "../../assets/remera2.jpg",
      price: 8700,
      category: "remeras",
    },
    {
      title: "Pantalon cargo basic",
      id: 3,
      stock: 3,
      description: "Cargo azul granjero",
      img: "../../assets/cargo.jpg",
      price: 12400,
      category: "pantalon",
    },
    {
      title: 'Buzo "Butterfly"'
      ,
      id: 4,
      stock: 2,
      description: "Buzo gris estampado",
      img: "../../assets/buzo2.jpg",
      price: 14500,
      category: "buzos",
    },
    {
      title: "Buzo moonlight ",
      id: 5,
      limit: 5,
      description: "Buzos variados oversize",
      img: "../../assets/buzo3.jpg",
      price: 16000,
      category: "buzos",
    },
    {
      title: "Remera negra estampada",
      id: 6,
      stock: 8,
      description: "Remera butterfly",
      img: "../../assets/remera1.jpg",
      price: 9500,
      category: "remeras",
    },
    {
      title: "Remera blanca",
      id: 7,
      stock: 3,
      description: "Remera Sample",
      img: "../../assets/remera4.jpg",
      price: 9000,
      category: "remeras",
    },
    {
      title: "Jean Cargo",
      id: 8,
      stock: 2,
      description: "Pantalon cargo blanco",
      img: "../../assets/jean2.jpg",
      price: 15000,
      category: "pantalones",
    },
    {
      title: "Jean cargo",
      id: 8,
      stock: 2,
      description: "Jean cargo latest",
      img: "../../assets/jean.jpg",
      price: 12500,
      category: "pantalones",
    },
    {
      title: "Pantalon negro cargo",
      id: 8,
      stock: 2,
      description: "Cargo black",
      img: "../../assets/pantalonnegro.jpg",
      price: 12000,
      category: "pantalones",
    },
    {
      title: "Buzo blanco estampado ",
      id: 8,
      stock: 2,
      description: "Hoodie blanco",
      img: "../../assets/buzoblanco.jpg",
      price: 14000,
      category: "buzos",
    },
    {
      title: 'Remera "Butterfly"',
      id: 8,
      stock: 2,
      description: "Remera oversize",
      img: "../../assets/remera3.jpg",
      price: 8000,
      category: "remeras",
    },
  ];
  
  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
      }, 2000);
    });
  }
  
  export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }
  
  export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
      const categoryRequested = productos.filter((item) => {
        /* .... */
        //return (item.category.toLowerCase() === categoryURL.toLowerCase())
        return item.category.toLowerCase() === categoryURL.toLowerCase();
      });
  
      setTimeout(() => {
        resolve(categoryRequested);
      }, 2000);
    });
  }
  
  export default getData;