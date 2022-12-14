import { Link, NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "./data";

const BookList = () => {
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/bookList/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default BookList;
