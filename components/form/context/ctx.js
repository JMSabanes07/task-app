import React, { createContext, useState } from 'react';
import getCUIT from "/scripts/getCuit"

export const FormCtx = createContext()

export const FormCtxComponent = ({children, defaultData}) => {
   const [formData, setFormData] = useState({
      ...defaultData
   })

   const handleInput = (e) => {
      const { id, value, type, checked } = e.target
      setFormData({
         ...formData,
         [id]: value,
      })
      if (type === 'checkbox'){
         setFormData({
            ...formData,
            [id]: checked,
         })
      }
      if (id === 'dni' && value.length === 8) {
         setFormData({
            ...formData,
            [id]: value,
            cuit: getCUIT(value, "M"),
         })
      }else if(id === 'dni' && value.length < 8){
         setFormData({
            ...formData,
            [id]: value,
            cuit: '',
         })
      }
   }

   const handleSelect = (e) => {
      const { id, value } = e.target
      setFormData({
         ...formData,
         [id]: value
      })
   }

   return(
      <FormCtx.Provider value={{
         handleInput,
         handleSelect,
         formData,
      }}>
         {children}
      </FormCtx.Provider>
   )
}