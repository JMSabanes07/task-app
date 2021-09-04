import React, { useContext } from 'react';
import { FormCtx, FormCtxComponent } from "./context/ctx"

export const Form = ({children}) => {
   return(
      <FormCtxComponent>
         <form className="form">
            {children}
         </form>
      </FormCtxComponent>
   )
}

export const InputGroup = ({ children }) => {

   const handleChildren = () => {
      return '1fr '.repeat(children.length)
   }

   return (
      <div className="input-group" style={{ gridTemplateColumns: handleChildren()}}>
         {children}
      </div>
   )
}

export const Input = (props) => {
   const { formData, handleInput } = useContext(FormCtx)
   const { label, id, className, type, value, placeholder, checked, disabled, maxLength } = props.data

   return (
      <div className="container">
         <label className="label" htmlFor={id}>
            <span>{label}</span>
         </label>
         <input 
            className={className} 
            id={id} 
            type={type} 
            value={formData[id] || value} 
            placeholder={placeholder}
            maxLength={maxLength}
            disabled={disabled}
            checked={formData[id] || checked}
            onChange={handleInput}
         />
      </div>
   )
}

export const Select = (props) => {
   const { formData, handleSelect } = useContext(FormCtx)
   const { label, id, className, data, disabled } = props.data

   return (
      <div className="container">
         <label className="label" htmlFor={id}>
            <span>{label}</span>
         </label>
         <select 
            id={id} 
            className={className}
            disabled={disabled}
            onChange={handleSelect}
         >
            {data.map((e) => {
               return(
                  <option key={e.id} value={e.id}>{e.opcion}</option>
               )
            })}
         </select>
      </div>
   )
}