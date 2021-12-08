import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function NavbarCategories({ onCategory }) {

  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item><NavLink to="/shop?q=kitchen" onClick={() => onCategory('Kitchen')} className="nav-link">Kitchen</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/shop?q=living-room" onClick={() => onCategory('Living Room')} className="nav-link">Living Room</NavLink></ListGroup.Item>
        <ListGroup.Item><NavLink to="/shop?q=bedroom" onClick={() => onCategory('Bedroom')} className="nav-link">Bedroom</NavLink></ListGroup.Item>
      </ListGroup>
    </div>
  );
}
