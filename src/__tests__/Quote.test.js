import renderer from 'react-test-renderer';
import Quote from '../Components/Quote';

it('Test quote component renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
