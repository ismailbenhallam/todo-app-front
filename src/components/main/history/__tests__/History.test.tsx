import renderer from "react-test-renderer";
import { AllProviders } from "utils/test-utils";
import History from "..";

test("History should match snapshot", () => {
  const tree = renderer
    .create(
      <AllProviders>
        <History />
      </AllProviders>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
