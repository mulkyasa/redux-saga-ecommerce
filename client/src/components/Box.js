import React from "react";
import List from "./List.js";
import Carousel from "./Carousel"

export default function Box(props) {
  return (
    <div className="container">
      <Carousel />
      <List />
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link text-dark" href="/">Previous</a>
          </li>
          <li className="page-item"><a className="page-link text-dark" href="/">1</a></li>
          <li className="page-item disabled">
            <a className="page-link text-dark" href="/">Next</a>
          </li>
        </ul>
      </nav>
      <footer className="mt-5">
      <hr />
        <p className="lead pb-3 small text-muted text-center">
          Made by{" "}
          <a href="https://www.github.com/mulkyasa/" className="text-muted">
            Yasa Mulky Al Afgani
          </a>
        </p>
      </footer>
    </div>
  );
}
