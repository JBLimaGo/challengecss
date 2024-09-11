import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, km, color, carNew }) => {
  return (
    <div className={styles.card}>
      <h2> Carros!</h2>
      <ul>
        <li>Marca do carro: {brand}</li>
        <li>Km: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {carNew && <p> Este carro e novo</p>}
    </div>
  );
};

export default CarDetails;
