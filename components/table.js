import React, { useRef } from "react"
import Image from "next/image"

const Table = ({ data, handleDelete, handleEdit }) => {

   return(
      <table className="index-main-table">
         <thead>
            <tr>
               <th style={{ width: '10%', paddingLeft: '1rem' }}>#</th>
               <th style={{ width: '75%' }}>Tareas</th>
               <th style={{ width: '15%', textAlign: 'center' }}>Acciones</th>
            </tr>
         </thead>
         <tbody>
            {
               data.map(({ id, task }) => {
                  return (
                     <>
                        <tr key={id} className="body-row">
                           <td>#{id}</td>
                           <td>{task}</td>
                           <td>
                              <div className="btn-container">
                                 <button className="table-btn">
                                    <Image data-key={id} data-task={task} onClick={handleEdit} src="/pencil.png" layout="fill" alt="Edit button" />
                                 </button>
                                 <button className="table-btn">
                                    <Image data-key={id} onClick={handleDelete} src="/delete.png" layout="fill" alt="Delete button" />
                                 </button>
                              </div>
                           </td>
                        </tr>
                     </>
                  )
               })
            }
         </tbody>
      </table>
   )
}

export default Table

