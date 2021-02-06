import React from 'react';
import { Button } from '@material-ui/core';

import Layout from 'src/components/Layout';

export default function Home() {
  return (
    <Layout title="YouTube">
      <Button color="primary" variant="contained">
        Botão
      </Button>
    </Layout>
  );
}
