import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Slider from "../components/Slider";
import List from "../components/List";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const fetchloading = async () => {
        setLoading(true);
        try {
          const res = await axios.get(
            "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
            { headers: { Authorization: `Bearer ${user.token}` } }
          );
          setRestaurants(res.data);
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchloading();
    }
  }, [user]);

  console.log(restaurants);
  console.log(user);

  return (
    <>
      <Navbar />
      <div className="flex flex-col px-5">
        <Header name={user.user_name} />
        <Slider restaurants={restaurants} />
        <List restaurants={restaurants} />
      </div>
    </>
  );
};

export default Home;
