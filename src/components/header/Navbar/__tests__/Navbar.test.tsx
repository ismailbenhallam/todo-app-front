import renderer from "react-test-renderer";
import Navbar from "../";

test("Navbar should match snapshot", () => {
  const tree = renderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});
