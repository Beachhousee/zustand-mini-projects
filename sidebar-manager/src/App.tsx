import { useSidebarStore } from "./store/sidebarStore";
import "./App.css";

const menuItems = ["dashboard", "profile", "settings", "logout"];

function App() {
  const { isOpen, toggleSidebar, activeItem, setActiveItem } = useSidebarStore();

  return (
    <div className="app">
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Close" : "☰"}
        </button>
        <ul className="menu">
          {menuItems.map((item) => (
            <li
              key={item}
              className={activeItem === item ? "active" : ""}
              onClick={() => setActiveItem(item)}
            >
              {isOpen ? item.toUpperCase() : item.charAt(0).toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      <div className="main">
        <h1>{activeItem.toUpperCase()} Page</h1>
        <p>This is the {activeItem} content area.</p>
      </div>
    </div>
  );
}

export default App;
