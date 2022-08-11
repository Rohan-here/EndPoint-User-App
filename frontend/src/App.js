import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Card from "./components/Card/Card";
const App = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:5000/api/fetch",
    };
    setLoading(true);
    const { data } = await axios(config);

    setUser(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {loading && <Loader />}
      {!loading && user.map((ele) => <Card key={ele.id} data={ele} />)}
    </div>
  );
};

export default App;
