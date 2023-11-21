import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialMediaLinks = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/company/rgr-tecnologia/"
        target="_blank"
        color={
          "inherit" /* TODO: Change to "primary" when the theme is ready */
        }
      >
        <LinkedInIcon
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "1.5rem",
            },
          }}
        />
      </IconButton>
      <IconButton
        color={
          "inherit" /* TODO: Change to "primary" when the theme is ready */
        }
      >
        <InstagramIcon
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "1.5rem",
            },
          }}
        />
      </IconButton>
    </>
  );
};
