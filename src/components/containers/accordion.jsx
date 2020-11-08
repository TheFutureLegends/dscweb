import React from "react";
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@material-ui/core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { theme } from "../../global-theme.js";

function AccordionContainer({ children, header, ...restProps }) {
	return (
		<Accordion {...restProps}>
			<AccordionSummary
				expandIcon={
					<FontAwesomeIcon
						style={{
							color: theme.colors.dark.fb.__fb_primary_text,
							fontSize: "smaller",
						}}
						icon={faCaretDown}
					/>
				}
				id="panel1a-header"
			>
				<div style={{ paddingTop: "5px" }}>{header}</div>
			</AccordionSummary>
			<AccordionDetails>{children}</AccordionDetails>
		</Accordion>
	);
}

export default AccordionContainer;
