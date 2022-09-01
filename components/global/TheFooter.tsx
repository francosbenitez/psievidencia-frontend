import React from "react";
import { FormattedMessage } from "react-intl";
import TheModal from "./TheModal";
import TheSuggestions from "./TheSuggestions";
import SuggestionsBtn from "./SuggestionsBtn";

const HomeFooter = () => {
  return (
    <footer className="bottom-0 w-full mx-auto py-5 md:py-16 footer">
      <div className="container w-11/12 mx-auto">
        <div className="relative text-center m-auto flex">
          <div className="w-1/2 flex">
            <span className="text-left text-sm md:text-md">
              <FormattedMessage id="footer.to.be.part" />{" "}
              <a
                className="underline"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSccyO5jICweFShGTLEEiCOYLYySlEUacI0_4IDCY10AdYqIpA/viewform"
              >
                <FormattedMessage id="footer.google.forms" />
              </a>
            </span>
          </div>
          <TheModal
            button={<SuggestionsBtn />}
            title={"Sugerencias"}
            content={<TheSuggestions />}
          />
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
