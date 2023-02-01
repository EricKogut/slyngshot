import { Container } from '../components/base/Container';
import { DarkModeSwitch } from '../components/base/DarkModeSwitch';
import { DataFlow } from 'components/DataFlow';

const Index = () => {
  return (
    <>
      <DataFlow />
      <Container height='100vh'>
        <DarkModeSwitch />
      </Container>
    </>
  );
};

export default Index;
