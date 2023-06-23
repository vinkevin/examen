function Ropa({ prenda }) {
  return (
    <div className="list">
      <div className="contenido">
      <img src={"/image/" +prenda.img} alt="" />
        <h3>precio:{prenda.precio}</h3>
        <h4>cantidad:{prenda.cantidad}</h4>
        <p>{prenda.descripcion}</p>
      </div>
    </div>
  );
}

export default Ropa;
