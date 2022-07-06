import renderer from 'react-test-renderer';
import Calculator from '../Components/Calculator';

it('Test Calculator renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
