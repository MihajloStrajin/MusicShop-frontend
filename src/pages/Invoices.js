import react, { useEffect, useState } from "react";
import axios from "axios";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const response = axios
      .get("http://localhost:5000/api/invoice")
      .then((data) => {
        console.log(data.data);
        setInvoices(data.data);
      });
  }, []);

  return (
    <div>
      {invoices.map((i) => {
        return (
          <div key={i.dateTime}>
            <p>Amount: {i.amount}</p>
            <p>DateTime: {i.dateTime}</p>
            <p>User: {i.user.name}</p>
            <p>-------------</p>
          </div>
        );
      })}
    </div>
  );
};

export default Invoices;
