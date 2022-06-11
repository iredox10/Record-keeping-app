import axios from "axios";
import Header from "../components/Header";
import Input from "../components/Input";
import { Button } from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function Transaction() {
  const [transactions, setTransaction] = useState([]); 
  const [loading, setLoading] = useState(true) 
  const { id } = useParams();
  const Navigate = useNavigate()

  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [amountPaid, setAmountPaid] = useState()

  const handleTransc = async (e) =>{
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/api/add-record/'+ id, {productName,price,quantity,amountPaid})
      console.log(res.data,id)
    } catch (err) {
      console.log(err);      
    }
  }
  
  useMemo(() => {
    const fetchTransc = async () => {
      const res = await axios.get(`http://localhost:4000/api/get-records/${id}`);
      setTransaction(res.data);
      console.log(transactions);
      setLoading(false)
    };
    fetchTransc();
  },[id]);

  return (
    <>
      <Header text="transaction page" />
      {loading && <div>please wait....</div> }
      <div className="flex gap-10 w-full justify-between  p-5">
        <table className="md:flex-grow">
          <thead>
            <tr>
              <th>product name</th>
              <th>price</th>
              <th>quantity</th>
              <th>amount paid</th>
              <th>credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(t =>(
            <tr key={t._id}>
              <td>{t.price}</td>
              <td>{t.productName}</td>
            </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={handleTransc}>
          <Input
            labelName="productName"
            labelText="product name"
            inputType="text"
            inputName="productName"
            inputId="productName"
            state={setProductName}
          />
          <Input
            labelName="price"
            labelText="price"
            inputType="price"
            inputName="price"
            inputId="price"
            state={setPrice}
          />
          <Input
            labelName="quantity"
            labelText="quantity"
            inputType="quantity"
            inputName="quantity"
            inputId="quantity"
            state={setQuantity}
          />
          <Input
            labelName="amountPaid"
            labelText="amount paid"
            inputType="text"
            inputName="amountPaid"
            inputId="amountPaid"
            state={setAmountPaid}
          />
          <Button name="add transaction" />
        </form>
      </div>
    </>
  );
}
