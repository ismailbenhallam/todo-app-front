import renderer from "react-test-renderer";
import { AllProviders } from "utils/test-utils";
import Home from "../Home";

test("Home should match snapshot", () => {
  const tree = renderer
    .create(
      <AllProviders>
        <Home />
      </AllProviders>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
