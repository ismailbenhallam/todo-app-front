import { Container, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { LOCALES } from "../../../lang/locales";
import { changeLang, langSelector } from "../../../redux/slices";

const LanguageChooser = () => {
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent<string>) => {
    dispatch(changeLang(event.target.value));
  };
  const lang = useSelector(langSelector);

  return (
    <Container>
      <Select onChange={handleChange} defaultValue={lang} color="success">
        {Object.entries(LOCALES).map((entry) => (
          <MenuItem key={entry[1]} value={entry[1]}>
            <FormattedMessage id={entry[0]} />
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

export default LanguageChooser;
