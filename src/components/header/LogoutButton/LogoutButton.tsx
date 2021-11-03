import { LogoutOutlined } from "@mui/icons-material";
import { FormattedMessage } from "react-intl";
import { ButtonContainer } from "./LogoutButton.style";

export default function LogoutButton() {
  return (
    <ButtonContainer variant="outlined" endIcon={<LogoutOutlined />}>
      <FormattedMessage id="buttons.logout" />
    </ButtonContainer>
  );
}
