import Link from "next/link";
import { Psychologist } from "../../types";
import { FormattedMessage } from "react-intl";

const TheCard = ({ psychologist }: { psychologist: Psychologist }) => {
  return (
    <Link href={`/psychologists/${psychologist.id}`}>
      <div className="w-full rounded-lg shadow-xl bg-white p-10 flex flex-col border-2 hover:border-primary cursor-pointer">
        <header className=" text-2xl font-extrabold py-4 px-4 text-center">
          {psychologist.name !== "" ? psychologist.name : "Unknown"}
        </header>
        <div>
          <ul className="text-primary text-center font-semibold break-words">
            <li>{psychologist.province}</li>
            <li className="text-left">
              {psychologist.therapeutic_model.split(",").map(
                (item, index) =>
                  index < 3 && (
                    <span
                      className="bg-primary text-white break-all mr-1 px-1"
                      key={item}
                    >
                      {item}
                    </span>
                  )
              )}
              {psychologist.therapeutic_model.split(",").length > 3 && (
                <span>...</span>
              )}
            </li>
            <li className="text-left">
              {psychologist.work_population.split(",").map(
                (item, index) =>
                  index < 3 && (
                    <span
                      className="bg-secondary text-white break-all mr-1 px-1"
                      key={item}
                    >
                      {item}
                    </span>
                  )
              )}
              {psychologist.work_population.split(",").length > 3 && (
                <span>...</span>
              )}
            </li>
            {psychologist.specialization !== "" && (
              <li className="text-left">
                {psychologist.specialization.split(",").map(
                  (item, index) =>
                    index < 3 && (
                      <span
                        className="bg-tertiary text-white break-all mr-1 px-1"
                        key={item}
                      >
                        {item}
                      </span>
                    )
                )}
                {psychologist.specialization.split(",").length > 3 && (
                  <span>...</span>
                )}
              </li>
            )}
          </ul>
        </div>
        <footer className="text-center py-3 text-primary flex justify-center mt-auto block">
          {psychologist.online === "Sí" && (
            <p className="p-2">
              <span className="bg-fourth text-white p-2">
                <FormattedMessage id="offers.online" />
              </span>
            </p>
          )}
        </footer>
      </div>
    </Link>
  );
};

export default TheCard;