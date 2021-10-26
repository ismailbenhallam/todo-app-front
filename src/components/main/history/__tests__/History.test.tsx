import renderer from "react-test-renderer";
import History from "..";
import { AllProviders } from "../../../../utils/test-utils";

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
