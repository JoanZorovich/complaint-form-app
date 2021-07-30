import React, { useState, useEffect } from "react";
import {db, storage} from '../../firebase'
import { toast } from "react-toastify";
import comunas from "../../Api/Comunas";
import "./Form.css";

const Form = (props) => {
  const inicial = {
    nombre: "",
    email: "",
    titulo:"",
    reclamo: "", 
    comuna: "",
    imagenes:null,
  };

  const [data, setData] = useState(inicial);
  const [comuna, setComuna] = useState(comunas);
  const [error, setError] = useState(false);
  const [uploadFile, setUploadFile] = useState(0)



  const handleUpload = (e) => {

    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file===undefined){
      console.log('no se seleccionó imagen')
      return;
    }

    if(file.type==="image/png"||file.type==="image/jpg" || file.type==="image/gif" || file.type==="image/jpeg"){
      
      uploadImage(file)
      setError(false)
     
    
    }else{
      setError(true)
    }
  };

  
  const uploadImage = async (file) => {
    try {
      const imageRef = await storage.ref(`reclamos/${file.name}`)
      const task= imageRef.put(file)
      const imageURL = await imageRef.getDownloadURL()

      task.on('state_changed', snapshot=>{
        let percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
        
        setUploadFile(percentage);
        
      }, errorLoad=>{
        console.log(errorLoad.message)
      },()=>{
        setUploadFile(100)
      })

      setData({
        ...data,
        imagenes:imageURL,
      });
    }catch (error) {
      console.log(error);
    }
  }
  


  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(validateEmail(data.email))
    if(!validateEmail(data.email)){
      return toast("Por favor ingresa una direccion de email valido", { type: "warning", autoClose:5000});
    }
    props.addInfo(data);
    setData({ ...inicial });
  };

  const validateEmail= (str) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(str).toLowerCase());
  }

  const getReclamoById = async (id) => {
    const doc=  await db.collection('info').doc(id).get();
    //console.log(doc.data)
    setData({...doc.data()})
  }

  

  useEffect(() => {
    if (props.idActual === ''){
      setData({ ...inicial });
    }else{
      //console.log(props.idActual)
      getReclamoById(props.idActual);
    }
  },[props.idActual]);

  return (
    <div className="main"> 

      <h2>Reclamos Ciudad de Buenos Aires</h2>
      <div className="container-form">

      <div className="text">
        <p>En este formulario todos los ciudadanos podrán ingresar reclamos sobre determinada comuna de la ciudad de Buenos Aires</p>
      </div>
    
      <form className="form" onSubmit={handleSubmit}>

      <h3>Datos de contacto</h3>
        <div className="contacto">
         
        <div className="nombre">
          <p>Nombre</p>
          <input
            type="text"
            placeholder="Escribe aquí tu nombre"
            name="nombre"
            onChange={handleInputChange}
            value={data.nombre}//refleja el estado alctual
          />
        </div>
        <div>
          <p>Correo electrónico</p>
          <input
            type="text"
            placeholder="Escribe aquí tu correo electrónico"
            name="email"
            onChange={handleInputChange}
            required
            value={data.email}
          />
        </div>
        </div>
        <div>
        <h3>Detalles del reclamo</h3>
          
          <p>Comuna</p>
          <select
            name="comuna"
            onChange={handleInputChange}
            required
           value={data.comuna}
          >
            <option>Selecciona tu comuna</option>
            {comuna.map((e) => (
              <option value={e.name} key={e.id}> {e.name} {`${e.barrios}  `}</option>))}
          </select>
        </div>

        <div className="titulo">
          <p>Título del reclamo</p>
          <input
            type="text"
            placeholder="Nombre que identifica tu reclamo"
            name="titulo"
            onChange={handleInputChange}
            required
            value={data.titulo}
          />
        </div>

        <div>
          <p>Cuentanos el motivo de tu reclamo</p>
          <textarea
            placeholder="Escribe aquí los detalles de tu reclamo"
            name="reclamo"
            onChange={handleInputChange}
            required
            value={data.reclamo}
          ></textarea>
        </div>


        <div>
          <p>Sube una imagen de tu reclamo</p>
          <progress
           value={uploadFile}
           max="100"
          ></progress>

          <input 
           type="file"
           onChange={handleUpload}
           name="imagenes" 
          />

          <img width="200" src={data.imagenes} alt="" />

        {
          error&&
          <div className="alert">
            Solo archivos .png .jpg o .gif
          </div>
        }

        </div>

          <button type="submit">
          {props.idActual === ''? 'Enviar Reclamo': 'Actualizar'}    
            
        </button>
      </form>
      </div>
      </div>
     
  
  );
};

export default Form;
