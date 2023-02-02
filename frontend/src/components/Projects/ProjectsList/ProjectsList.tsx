import { useStatefulQuery } from 'hooks/useStatefulQuery/useStatefulQuery';

import { Container, HStack, Spinner } from '@chakra-ui/react';
import { BaseCard } from 'components/BaseCard';

export const ProjectsList = () => {
  const { getUserProjects } = useStatefulQuery();
  const { loading, data: projects, errors } = getUserProjects();
  console.log(projects);
  if (loading) {
    return <Spinner />;
  }

  return (
    <Container
      color='black'
      _dark={{
        bg: 'gray.900',
        color: 'white',
      }}
      rounded={'2xl'}
      py={5}
      maxW={'container.lg'}
      mb={5}
      mt={6}
    >
      <HStack>
        {projects.map((project: any, index: Number) => {
          return (
            <BaseCard
              image={
                'https://c4.wallpaperflare.com/wallpaper/87/999/705/apple-music-gradient-wallpaper-preview.jpg'
              }
              linkToText={'View your project'}
              statusType={'default'}
              status={'NEW'}
              title={project.projectName}
              linkTo={''}
              loading={loading}
            />
          );
        })}
      </HStack>
    </Container>
  );
};

export default ProjectsList;
