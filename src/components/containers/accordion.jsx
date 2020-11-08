import React from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AccordionContainer({ children, header, ...restProps }) {
	return (
		<Accordion {...restProps}>
			<AccordionSummary
				expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
				id="panel1a-header"
			>
				<div style={{ paddingTop: "5px" }}>{header}</div>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}

export default AccordionContainer;
