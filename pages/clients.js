import { Input, InputGroup, Form, Select, Radio } from "/components/form/form"

const Clients = () => {
   
   return(
      <main className="clients-page">
         <section className="add-client">
            <Form>
               {/* nombre */}
               <Input data={{
                  label: "Nombre",
                  id: "name",
                  className: "input-txt",
                  type: "text",
                  placeholder: "Ingresa el nombre del cliente",
               }}/>
               <InputGroup>
                  {/* tipo doc */}
                  <Select data={{
                     label: "Tipo de Documento",
                     id: "tipoDocumento",
                     className: "input-txt",
                     data:[
                        {
                           id: "1",
                           opcion: "opcion 1"
                        },
                        {
                           id: "2",
                           opcion: "opcion 2"
                        },
                        {
                           id: "3",
                           opcion: "opcion 3"
                        },
                     ]
                  }}/>
                  {/* numero */}
                  <Input data={{
                     label: "Número",
                     id: "numero",
                     className: "input-txt",
                     type: "text",
                     placeholder: "Numero",
                     maxLength: "11"
                  }}/>
               </InputGroup>
               {/* direccion */}
               <Input data={{
                  label: "Dirección",
                  id: "adress",
                  className: "input-txt",
                  type: "text",
                  placeholder: "Ingresa la dirección del cliente",
               }} />
               {/* ciudad */}
               <Select data={{
                  label: "Ciudad",
                  id: "ciudad",
                  className: "input-txt",
                  data: [
                     {
                        id: "1",
                        opcion: "opcion 1"
                     },
                     {
                        id: "2",
                        opcion: "opcion 2"
                     },
                     {
                        id: "3",
                        opcion: "opcion 3"
                     },
                  ]
               }} />
               <InputGroup>
                  {/* celular */}
                  <Input data={{
                     label: "Celular",
                     id: "celular",
                     className: "input-txt",
                     type: "tel",
                     placeholder: "Ingresa el numero de celular",
                  }} />
                  {/* fijo */}
                  <Input data={{
                     label: "Fijo",
                     id: "fijo",
                     className: "input-txt",
                     type: "tel",
                     placeholder: "Ingresa el numero fijo",
                  }} />
               </InputGroup>
               {/* email */}
               <Input data={{
                  label: "Email",
                  id: "email",
                  className: "input-txt",
                  type: "email",
                  placeholder: "Ingresa el email del cliente",
               }} />
               {/* web */}
               <Input data={{
                  label: "Pagina web",
                  id: "web",
                  className: "input-txt",
                  type: "text",
                  placeholder: "Ingrese la pagina web"
               }} />
               <InputGroup>
                  {/* cond fiscal */}
                  <Select data={{
                     label: "Condición Fiscal",
                     id: "condicion",
                     className: "input-txt",
                     data: [
                        {
                           id: "1",
                           opcion: "opcion 1"
                        },
                        {
                           id: "2",
                           opcion: "opcion 2"
                        },
                        {
                           id: "3",
                           opcion: "opcion 3"
                        },
                     ]
                  }}/>
                  {/* vendedor */}
                  <Select data={{
                     label: "Vendedor",
                     id: "vendedor",
                     className: "input-txt",
                     data: [
                        {
                           id: "1",
                           opcion: "opcion 1"
                        },
                        {
                           id: "2",
                           opcion: "opcion 2"
                        },
                        {
                           id: "3",
                           opcion: "opcion 3"
                        },
                     ]
                  }}/>
               </InputGroup>
               <InputGroup>
                  {/* form pago */}
                  <Select data={{
                     label: "Forma de pago",
                     id: "formaPago",
                     className: "input-txt",
                     data: [
                        {
                           id: "1",
                           opcion: "opcion 1"
                        },
                        {
                           id: "2",
                           opcion: "opcion 2"
                        },
                        {
                           id: "3",
                           opcion: "opcion 3"
                        },
                     ]
                  }} />
                  
               </InputGroup>
               {/* bool cc */}
               <Input data={{
                  label: "Habilitar Cuenta Corriente",
                  id: "habilitaCC",
                  className: "input-checkbox",
                  type: "checkbox",
                  checked: false
               }} />
               {/* limite fact */}
               <Input data={{
                  label: "Límite de facturación",
                  id: "limiteFacturacion",
                  className: "input-txt",
                  type: "text",
                  placeholder: "Ingresa el límite de facturación",
               }} />
               {/* transporte */}
               <Select data={{
                  label: "Transporte",
                  id: "transporte",
                  className: "input-txt",
                  data: [
                     {
                        id: "1",
                        opcion: "opcion 1"
                     },
                     {
                        id: "2",
                        opcion: "opcion 2"
                     },
                     {
                        id: "3",
                        opcion: "opcion 3"
                     },
                  ]
               }} />
               {/* empresa */}
               <Input data={{
                  label: "Empresa",
                  id: "empresa",
                  className: "input-txt",
                  type: "text",
                  value: 'p3566',
                  placeholder: "empresa",
                  disabled: true
               }} />
               {/* sucursal */}
               <Select data={{
                  label: "Sucursal",
                  id: "sucursal",
                  className: "input-txt",
                  data: [
                     {
                        id: "1",
                        opcion: "opcion 1"
                     },
                     {
                        id: "2",
                        opcion: "opcion 2"
                     },
                     {
                        id: "3",
                        opcion: "opcion 3"
                     },
                  ]
               }} />
            </Form>
         </section>
         <section className="list-clients">

         </section>
      </main>
   )
}

export default Clients