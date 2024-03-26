import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialMediaLinks = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/company/rgr-tecnologia/"
        target="_blank"
        color={"inherit"}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/rgrtecnologia"
        target="_blank"
        color={"inherit"}
      >
        <InstagramIcon />
      </IconButton>
    </>
  );
};
