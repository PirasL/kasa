import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPageComponent.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <span className="error-code">404</span>
      <span className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="error-link" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
