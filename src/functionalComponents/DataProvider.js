import React , {useContext} from 'react'
import { DataContext } from './DataContext';

export const GlobalDataProvider = ({children}) => {
  const context = useContext(DataContext);
  const ladiesProducts = context.products.filter(item => item.gender==="WOMEN");
  const gentsProducts = context.products.filter(item => item.gender==="MEN");

  return (
     <DataContext.Provider
     value ={{ ladiesProducts,
        gentsProducts,
     }}
     >
       {children}
     </DataContext.Provider>
  )
}
