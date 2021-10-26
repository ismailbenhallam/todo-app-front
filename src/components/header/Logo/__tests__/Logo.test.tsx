import renderer from "react-test-renderer";
import Logo from "..";

test("Logo should match snapshot", () => {
  const tree = renderer.create(<Logo />).toJSON();
  expect(tree).toMatchSnapshot();
});
