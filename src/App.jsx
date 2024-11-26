import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tourDetails = await response.json();
      setTours(tourDetails);
      setIsLoading(false);
    }
    catch (error) {
      setIsLoading(false);
      console.log(error)
    }
  }

  useEffect((() => {
    fetchTours();
  }), []);

  const deleteTour = (index) => {
    setTours(tours.filter((tour) =>
      tour.id !== index))
  }

  if (isLoading) {
    return <Loading />
  }

  if (tours.length === 0) {
    return (<main>
      <div className='title'>
        <h2>Tours list is empty</h2>
        <button className='btn btn-info' onClick={() => { fetchTours() }}>Fetch Tours</button>
      </div>
    </main>)
  }

  return (
    <main>
      <section>
        <Tours tours={tours} deleteTour={deleteTour} />
      </section>
    </main>)

};
export default App;
