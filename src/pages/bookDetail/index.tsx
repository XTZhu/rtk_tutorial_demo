import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../book/data";

const BookDetail = () => {
  const param = useParams();
  const [bookData, setBookData] = useState<any>({});

  useEffect(() => {
    setBookData(getInvoice(parseInt(param?.bookId || '', 10)));
  }, [param.bookId]);

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {bookData.amount}</h2>
      <p>
        {bookData.name}: {bookData.number}
      </p>
      <p>Due Date: {bookData.due}</p>
    </main>
  );
};

export default BookDetail;
