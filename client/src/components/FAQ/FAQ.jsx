import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { connect } from "react-redux";
import FormattedText from "../../hooks/FormattedText";

const FAQ = ({ values, translation }) => {
  return (
    <div className="section-lg">
      <div className="container">
        <div className={`row col-spacing-50 ${translation === 'Hebrew' ? 'd-flex justify-content-end' : ''}`}>
          <div className="col-12 col-lg-6">
            {values.length ? (
              <Accordion>
                {values.map((item, key) => (
                  <AccordionItem key={key}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {
                          <FormattedText
                            objectName={item}
                            extension="Question"
                          />
                        }
                        ?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        <FormattedText objectName={item} extension="Answer" />
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ pages }) => ({
  translation: pages.translation,
});

export default connect(mapStateToProps)(FAQ);
