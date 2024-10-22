'use client';

import React, { useState } from 'react';
import CustomWidget from '../components/CustomWidget/CustomWidget';
import { mockDatabaseService } from '../../services/mockDatabaseService';

const DevPage = () => {
  const [productInfo, setProductInfo] = useState({
    name: '',
    sku: '',
    price: '',
    stock: ''
  });

  const [productClassification, setProductClassification] = useState({
    category: '',
    brand: ''
  });

  const [productImage, setProductImage] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');

  const handleProductInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  const handleProductClassificationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductClassification({ ...productClassification, [e.target.name]: e.target.value });
  };

  const handleProductImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductImage(e.target.value);
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      const productData = {
        ...productInfo,
        ...productClassification,
        image: productImage
      };
      const result = await mockDatabaseService.saveProduct(productData);
      if (result.success) {
        setSaveStatus('success');
        console.log('Producto guardado con ID:', result.productId);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      setSaveStatus('error');
    }
  };

  const handleDiscard = () => {
    setProductInfo({ name: '', sku: '', price: '', stock: '' });
    setProductClassification({ category: '', brand: '' });
    setProductImage('');
    setSaveStatus('idle');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Desarrollo de Producto</h1>
      <div className="space-y-6">
        <CustomWidget title="Información de Producto" content={
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={productInfo.name}
              onChange={handleProductInfoChange}
              placeholder="Nombre del producto"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="sku"
              value={productInfo.sku}
              onChange={handleProductInfoChange}
              placeholder="SKU"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              value={productInfo.price}
              onChange={handleProductInfoChange}
              placeholder="Precio"
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              name="stock"
              value={productInfo.stock}
              onChange={handleProductInfoChange}
              placeholder="Stock"
              className="w-full p-2 border rounded"
            />
          </div>
        } />
        <CustomWidget title="Clasificación del Producto" content={
          <div className="space-y-4">
            <select
              name="category"
              value={productClassification.category}
              onChange={handleProductClassificationChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Seleccione una categoría</option>
              <option value="electronics">Electrónicos</option>
              <option value="clothing">Ropa</option>
              <option value="food">Alimentos</option>
            </select>
            <select
              name="brand"
              value={productClassification.brand}
              onChange={handleProductClassificationChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Seleccione una marca</option>
              <option value="brand1">Marca 1</option>
              <option value="brand2">Marca 2</option>
              <option value="brand3">Marca 3</option>
            </select>
          </div>
        } />
        <CustomWidget title="Imagen del Producto" content={
          <div className="space-y-4">
            <input
              type="text"
              value={productImage}
              onChange={handleProductImageChange}
              placeholder="URL de la imagen"
              className="w-full p-2 border rounded"
            />
            {productImage && (
              <img src={productImage} alt="Vista previa" className="max-w-full h-auto" />
            )}
          </div>
        } />
      </div>
      <div className="mt-6 flex justify-end space-x-4">
        <button 
          onClick={handleDiscard} 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded"
          disabled={saveStatus === 'saving'}
        >
          Descartar
        </button>
        <button 
          onClick={handleSave} 
          className={`px-4 py-2 rounded ${
            saveStatus === 'saving' 
              ? 'bg-blue-300 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white`}
          disabled={saveStatus === 'saving'}
        >
          {saveStatus === 'saving' ? 'Guardando...' : 'Guardar'}
        </button>
      </div>
      {saveStatus === 'success' && (
        <p className="mt-4 text-green-600">Producto guardado exitosamente.</p>
      )}
      {saveStatus === 'error' && (
        <p className="mt-4 text-red-600">Error al guardar el producto. Por favor, intente nuevamente.</p>
      )}
    </div>
  );
};

export default DevPage;
