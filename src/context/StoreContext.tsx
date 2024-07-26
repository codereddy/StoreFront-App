import React, { createContext, useContext, useState, ReactNode } from 'react';


interface StoreContextType {
  category: string;
  product: string;
  chartView: 'Price' | 'Rating';
  setCategory: (category: string) => void;
  setProduct: (product: string) => void;
  setChartView: (view: 'Price' | 'Rating') => void;
  clearFilters: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [category, setCategory] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [chartView, setChartView] = useState<'Price' | 'Rating'>('Price');

  const clearFilters = () => {
    setCategory('');
    setProduct('');
  };

  return (
    <StoreContext.Provider value={{ category, product, chartView, setCategory, setProduct, setChartView, clearFilters }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
