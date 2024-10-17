import { MantineProvider } from '@mantine/core';
import { RouterProvider } from 'react-router-dom';
import router from './Routes';

const Provider = () => (
  <MantineProvider
  >
    <RouterProvider router={router} />
  </MantineProvider>
);

export default Provider;
