import React, { useState, useEffect } from "react";
import {getRopa } from "../api/tienda.api";
import Ropa from "../components/Ropa";



function Home() {
const [item, setItems] = useState([]);
  useEffect(() => {
    loadLists();
  }, []);

  async function loadLists() {
    const response = await getRopa();
    setItems(response.data);
  }

  function renderMain() {
    if (item.length === 0) return <h1>No se tienen productos</h1>;
    return item.map((item) => <Ropa prenda={item} key={item.id} />);
  }
  return (
    <div className="container">
      <section className="view-list">
        <div className="render-list">{renderMain()}</div>
      </section>
    </div>
  );
}

export default Home;
