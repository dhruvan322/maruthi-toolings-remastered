import React, { useState } from 'react';
import { MOCK_PRODUCTS_DB } from '../api/mock-data';
import { Product as ProductType } from '../types';
import { CameraIcon } from '../components/icons';
import ProductGalleryModal from '../components/ProductGalleryModal';

interface ProductsProps {
  category: 'All' | 'End Component' | 'Tools/Machines';
  title: string;
}

const ProductCard: React.FC<{ product: ProductType, onCardClick: (product: ProductType) => void }> = ({ product, onCardClick }) => {
  const categoryColor = {
    'End Component': 'bg-green-100 text-green-800',
    'Tools/Machines': 'bg-blue-100 text-blue-800',
  };
  
  const hasGallery = product.gallery && product.gallery.length > 1;

  return (
    <div 
        className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 flex flex-col"
        onClick={() => onCardClick(product)}
        role={hasGallery ? 'button' : undefined}
        aria-label={hasGallery ? `View gallery for ${product.name}` : undefined}
    >
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        {hasGallery && (
            <div className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full backdrop-blur-sm cursor-pointer" title="View gallery">
                <CameraIcon className="h-5 w-5" />
            </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex-1 pr-2">{product.name}</h3>
             <span className={`px-2 py-1 text-xs font-semibold rounded-full h-fit ${categoryColor[product.category]}`}>
                {product.category}
            </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.description}</p>
        <p className="text-xs text-gray-400 mt-auto">Last Updated: {product.updatedAt.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

const Products: React.FC<ProductsProps> = ({ category, title }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const products = category === 'All'
    ? MOCK_PRODUCTS_DB
    : MOCK_PRODUCTS_DB.filter(p => p.category === category);

  const handleOpenGallery = (product: ProductType) => {
    if (product.gallery && product.gallery.length > 0) {
      setSelectedProduct(product);
    }
  };

  const handleCloseGallery = () => {
    setSelectedProduct(null);
  };

  return (
    <>
        <div className="py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-6">
            <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600 mt-2">Explore our range of high-precision products and machinery.</p>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <ProductCard key={product._id || product.name} product={product} onCardClick={handleOpenGallery} />
                ))}
                </div>
        </div>
        </div>
        {selectedProduct && (
            <ProductGalleryModal product={selectedProduct} onClose={handleCloseGallery} />
        )}
    </>
  );
};

export default Products;