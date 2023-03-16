import { useContext } from "react";
import { UserDataContext } from "../../Context/userData";
import { HABITS_URL } from "../../Constants/urls";
import axios from "axios";
import { BoardContainer, DayWeekContainer, Days } from "./styled";
import dump from "../../assets/images/dump.png";

export default function BoardHabits({
  name,
  days,
  index,
  visibility,
  setVisibility,
}) {
  const { config } = useContext(UserDataContext);
  const daysWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

  function deleteHabits() {
    if (window.confirm("Deseja realmente apagar o hábito?") === true) {
      axios
        .delete(`${HABITS_URL}/${index}`, config)
        .then((resp) => {
          setVisibility((visibility += 1));
        })
        .catch((error) => {
          alert(error.response.data.message);
        });
    }
  }

  return (
    <BoardContainer>
      <img onClick={deleteHabits} src={dump} alt="Imagem Lixeira" />

      <h2>{name}</h2>

      <DayWeekContainer>
        {daysWeek.map((day, i) => (
          <Days key={i} index={i} days={days}>
            {day}
          </Days>
        ))}
      </DayWeekContainer>
    </BoardContainer>
  );
}