interface ProductData {
  name: string;
  sku: string;
  price: string;
  stock: string;
  category: string;
  brand: string;
  image: string;
}

interface MockDatabase {
  [key: string]: ProductData;
}

// Simulación de una base de datos en memoria
const mockDatabase: MockDatabase = {};

export const mockDatabaseService = {
  saveProduct: async (productData: ProductData): Promise<{ success: boolean; productId: string }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const productId = Date.now().toString();
        mockDatabase[productId] = productData;
        console.log('Producto guardado en la base de datos simulada:', mockDatabase);
        resolve({ success: true, productId });
      }, 1000); // Simula un retraso de red de 1 segundo
    });
  },

  getProduct: async (productId: string): Promise<ProductData | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = mockDatabase[productId];
        resolve(product || null);
      }, 500);
    });
  },

  // Puedes agregar más métodos según sea necesario
};
