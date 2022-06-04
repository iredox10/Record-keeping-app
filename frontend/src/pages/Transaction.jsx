import axios from "axios";
import Header from "../components/Header";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function Transaction() {
  const [records, setRecords] = useState([]);  
  const { id } = useParams();
  
  useEffect(() => {
    const fetchTransc = async () => {
      const res = await axios.get(`http://localhost:4000/api/get-records/${id}`);
      setRecords(res.data);
      console.log(records);
      console.log('done');
    };
    fetchTransc();
  }, []);

  return (
    <>
      <Header text="transaction page" />
      <div className="flex gap-10 w-full justify-between  p-5">
        <table className="md:flex-grow text-center ">
          <thead>
            <tr>
              <th>product name</th>
              <th>price</th>
              <th>quantity</th>
              <th>amount paid</th>
              <th>credit</th>
            </tr>
          </thead>
        </table>
        <form>
          <Input
            labelName="productName"
            labelText="product name"
            inputType="text"
            inputName="productName"
            inputId="productName"
          />
          <Input
            labelName="price"
            labelText="price"
            inputType="price"
            inputName="price"
            inputId="price"
          />
          <Input
            labelName="quantity"
            labelText="quantity"
            inputType="quantity"
            inputName="quantity"
            inputId="quantity"
          />
          <Input
            labelName="amountPaid"
            labelText="amount paid"
            inputType="text"
            inputName="amountPaid"
            inputId="amountPaid"
          />
          <Button name="add transaction" />
        </form>
      </div>
    </>
  );
}
