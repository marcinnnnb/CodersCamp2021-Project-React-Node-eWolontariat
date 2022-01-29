import Zadanie from "./Pet";

const Results = ({ zadania }) => {
  return (
    <div className="search">
         {zadania.map((zadanie) => {
            return (
            <Zadanie
              key={zadanie.id}
              id={zadanie.id}
              title={zadanie.title}
              categories={zadanie.categories}
              amount={zadanie.amount}
              image={zadanie.image} 
              action_description={zadanie.action_description}
              action_short_description={zadanie.action_short_description}
              />
              );
            }
          )}
        </div>
      );
    };

export default Results;