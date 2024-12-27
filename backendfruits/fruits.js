const fruits = [
    { fruitId: 1, 
        fruitName: "Apel", 
        fruitType: "IMPORT", 
        stock: 10 },
    { fruitId: 2, 
        fruitName: "Kurma", 
        fruitType: "IMPORT", 
        stock: 20 },
    { fruitId: 3, 
        fruitName: "apel", 
        fruitType: "IMPORT", 
        stock: 50 },
    { fruitId: 4, 
        fruitName: "Manggis", 
        fruitType: "LOCAL", 
        stock: 100 },
    { fruitId: 5, 
        fruitName: "Jeruk Bali", 
        fruitType: "LOCAL", 
        stock: 10 },
    { fruitId: 5, 
        fruitName: "KURMA", 
        fruitType: "IMPORT", 
        stock: 20 },
    { fruitId: 5, 
        fruitName: "Salak", 
        fruitType: "LOCAL", 
        stock: 150 },
  ];

//   1. Buah apa saja yang dimiliki Andi? (fruitName)
//   2. Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah
//   (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di
//   masing-masing wadah?
//   3. Berapa total stock buah yang ada di masing-masing wadah?
//   4. Apakah ada komentar terkait kasus di atas?
  

  function andiFruits (fruitsData) {
    const namaFruit = [...new Set(fruitsData.map(f => f.fruitName.toLowerCase()))];
    console.log("Buah yang dimiliki Andi?", namaFruit);

    const wadahType  = fruitsData.reduce((acc, fruit) => {
        const type = fruit.fruitType;
        if(!acc[type]) acc[type] = new Set();
        acc[type].add(fruit.fruitName.toLowerCase());
        return acc;

    }, {});

    console.log ("Jumlah wadah?", Object.keys(wadahType).length);
    console.log("Isi masing-masing wadah?", wadahType);

    const totalStock = fruitsData.reduce((total, fruit) => {
        const type = fruit.fruitType;
        total[type] = (total[type] || 0) + fruit.stock;
        return total;
    }, {});

    console.log ("Total stock pada masing-masing wadah?", totalStock);

  }

  andiFruits(fruits)

  
