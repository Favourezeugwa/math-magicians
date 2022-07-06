import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Navigation from '../Components/Navigation';

it('Test navigation renders correctly', () => {
  const tree = renderer
    .create(<BrowserRouter><Navigation /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
