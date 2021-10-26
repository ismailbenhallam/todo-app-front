import renderer from "react-test-renderer";
import LogoutButton from "..";

test("LogouButton should match snapshot", () => {
  const tree = renderer.create(<LogoutButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
