import React, { useEffect, useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Form from "./../Form/Form";
import Table from "../Table/Table";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import "./Formcontainer.css";


const Formcontainer = () => {
  const [reclamos, setReclamos] = useState([]);
  const [idActual, setIdActual] = useState("");

  const addInfo = async (data) => {
    try {
      if (idActual === "") {
        await db.collection("info").doc().set(data);
        toast("Reclamo guardado", { type: "success" });
      } else {
        await db.collection("info").doc(idActual).update(data);
        toast("El reclamo ha sido actualizado", { type: "info" });
        setIdActual("");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const editAlert = () => {
    window.confirm(
      "Para editar el formulario por favor ve a Home, haz los cambios deseados y da click en el botón Actualizar")
  }


  const onDelete = async (id) => {
    //console.log(id)
    if (
      window.confirm(
        "¿Estas seguro que quieres eliminar esta solicitud de reclamo?"
      )
    ) {
      //console.log(id)
      await db.collection("info").doc(id).delete();
      toast("Reclamo eliminado", { type: "error", autoClose: 2000 });
    }
  };


  const getdata = () => {
    db.collection("info").onSnapshot((querySnapshot) => { 
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      //console.log(docs)
      setReclamos(docs);
    });
  };

  useEffect(() => {
    getdata();
  }, []);


  return (
    <div>
      <div className="navbar">
        <Link to="/" className="home">Home</Link>
        <Link to="/tabla" className="reclamos">Ver reclamos</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Form {...{addInfo, idActual, reclamos }} />
        </Route>
        <Route exact path="/tabla">

          <div className="titulos-tabla">
          <p>Nombre</p>
            <p>Email</p>
            <p>Comuna</p>
            <p>Título</p>
            <p>Descripción</p>
            <p>Imagenes</p>
            <p>Acciones</p>
          </div>

          {reclamos.map((reclamo) => (
            <Table key={reclamo.id} {...{ onDelete, editAlert, setIdActual, reclamo }} />
          ))}
        </Route>
      </Switch>
    </div>
  );
};

export default Formcontainer;
