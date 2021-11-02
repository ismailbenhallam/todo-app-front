import { FormattedMessage } from "react-intl";
import { Button } from "./LogoutButton.style";

export default function LogoutButton() {
  return (
    <Button>
      <FormattedMessage id="buttons.logout" />
    </Button>
  );
}
