import { theme } from "../../../../global-theme";

export const main = () => {
  return {
    title: {
      fontFamily: "Source Serif Pro, serif",
      color: "white",
      lineHeight: "60px",
      fontWeight: "500",
      marginTop: "10px",
    },
  };
};

export const separator = {
  backgroundColor: "rgb(230, 243, 255)",
  height: "30px",
  width: "2px",
};

export const footer = {
  width: "100%",
  header: {
    fontSize: "25px",
    color: theme.colors.dark.fb.__fb_primary_text,
    fontFamily: "Raleway, sans-serif",
  },
};
