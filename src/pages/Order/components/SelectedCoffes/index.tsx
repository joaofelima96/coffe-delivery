import coffe from "../../../../assets/coffes/expresso-tradicional.svg";

export const SelectedCoffes = () => {
  return (
    <div>
      <span>Selected Coffes</span>

      <div>
        <div>
          <img src={coffe} alt="café" />
        </div>
        <div>
          <span>Expresso Tradicional</span>
        </div>
      </div>
    </div>
  );
};
