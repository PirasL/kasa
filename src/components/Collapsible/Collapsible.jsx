import { useState } from "react";
import "./Collapsible.css";
import arrow from "../../assets/images/arrow.png";

export default function Collapsible({ collapsed = true, title, content }) {
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  return (
    <div className="collapse">
      <div
        className="collapse-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <h2>{title}</h2>
        <img
          src={arrow}
          style={isCollapsed ? { transform: "rotate(180deg)" } : {}}
        />
      </div>
      <div
        className={`collapse-content ${isCollapsed ? "collapsed" : "expanded"}`}
        aria-expanded={isCollapsed}
      >
        {content}
      </div>
    </div>
  );
}
