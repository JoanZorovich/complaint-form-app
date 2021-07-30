import React from "react";
import "./Table.css";

const Table = (props) => {

  return (
    <div className="table">

        <p>{props.reclamo.nombre}</p>
        <p>{props.reclamo.email}</p>
        <p>{props.reclamo.comuna}</p>
        <p>{props.reclamo.titulo}</p>
        <p>{props.reclamo.reclamo}</p>
        <img className="imagen" src={props.reclamo.imagenes} alt="img reclamo"/>
        <i onClick={() => props.onDelete(props.reclamo.id)} className="cerrar">Eliminar reclamo</i>
        <i onClick={() => props.editAlert(props.setIdActual(props.reclamo.id))} className="editar"> Editar </i>
    </div>
  );
};

export default Table;
