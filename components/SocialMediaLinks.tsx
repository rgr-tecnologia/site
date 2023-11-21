import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const SocialMediaLinks = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/company/rgr-tecnologia/"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
    </>
  );
};
