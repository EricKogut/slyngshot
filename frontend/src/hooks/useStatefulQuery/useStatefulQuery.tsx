import { useAxios } from 'hooks/useAxios';

// TODO: change the type to AmplifyUser (somehow)
export const useStatefulQuery = () => {
  // TODO: fix this to actually get memberships
  const getUserProjects = () => {
    const {
      loading,
      errors,
      data,
      refetch,
    }: {
      loading: boolean;
      errors: any;
      data: any;
      refetch(): void;
    } = useAxios({
      type: 'get',
      endpoint: `projects/all`,
      skip: false,
    });
    return { loading, errors, data, refetch };
  };

  return {
    getUserProjects,
  };
};
