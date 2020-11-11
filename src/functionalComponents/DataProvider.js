import React , {useContext} from 'react'
import { DataContext } from './DataContext';

export const GlobalDataProvider = ({children}) => {
  const context = useContext(DataContext);
  const products = context.products;
  const ladiesProducts = context.products.filter(item => item.gender==="WOMEN");
  const gentsProducts = context.products.filter(item => item.gender==="MEN");

  return (
     <DataContext.Provider
     value ={{ ladiesProducts,
        gentsProducts,
        products,
     }}
     >
       {children}
     </DataContext.Provider>
  )
}
