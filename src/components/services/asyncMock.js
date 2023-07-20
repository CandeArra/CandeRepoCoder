const productos = [
    {
      title: "Buzo Negro estampado",
      id: 1,
      limit: 5,
      description: "Camiseta de fútbol de alta calidad",
      img: "../../assets/buzo1.jpg",
      price: 300,
      category: "buzos",
    },
    {
      title: "Remera estampada blanca",
      id: 2,
      stock: 8,
      description: "Zapatillas de running para entrenamiento",
      img: "../../assets/remera2.jpg",
      price: 200,
      category: "remeras",
    },
    {
      title: "Pantalon cargo basic",
      id: 3,
      stock: 3,
      description: "Shorts transpirables para baloncesto",
      img: "../../assets/cargo.jpg",
      price: 150,
      category: "pantalon",
    },
    {
      title: 'Buzo "Butterfly"'
      ,
      id: 4,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/buzo2.jpg",
      price: 150,
      category: "buzos",
    },
    {
      title: "Buzo moonlight ",
      id: 5,
      limit: 5,
      description: "Camiseta de fútbol de alta calidad",
      img: "../../assets/buzo3.jpg",
      price: 50,
      category: "buzos",
    },
    {
      title: "Remera negra estampada",
      id: 6,
      stock: 8,
      description: "Zapatillas de running para entrenamiento",
      img: "../../assets/remera1.jpg",
      price: 700,
      category: "remeras",
    },
    {
      title: "Remera blanca",
      id: 7,
      stock: 3,
      description: "Shorts transpirables para baloncesto",
      img: "../../assets/remera4.jpg",
      price: 250,
      category: "remeras",
    },
    {
      title: "Jean Cargo Beige",
      id: 8,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/jean2.jpg",
      price: 350,
      category: "pantalones",
    },
    {
      title: "Jean cargo",
      id: 8,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/jean.jpg",
      price: 350,
      category: "pantalones",
    },
    {
      title: "Pantalon negro cargo",
      id: 8,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/pantalonnegro.jpg",
      price: 350,
      category: "pantalones",
    },
    {
      title: "Buzo blanco estampado ",
      id: 8,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/buzoblanco.jpg",
      price: 350,
      category: "buzos",
    },
    {
      title: 'Remera "Butterfly"',
      id: 8,
      stock: 2,
      description: "Pelota de tenis oficial",
      img: "../../assets/remera3.jpg",
      price: 350,
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