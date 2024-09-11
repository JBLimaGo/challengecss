import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    // Array de objeto
    { id: 1, brand: "Honda", color: "Cinza", km: 10000, carNew: false },
    { id: 2, brand: "Parati", color: "Prata", km: "250000", carNew: false },
    { id: 3, brand: "Gol", color: "Preto", km: 0, carNew: true },
  ];

  return (
    <div className="App">
      <h1> Tarefa Seção 4 </h1>

      <div className="car-container">
        {cars.map((car) => (
          <CarDetails
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            carNew={car.carNew}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
