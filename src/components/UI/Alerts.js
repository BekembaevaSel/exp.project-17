import * as React from 'react';
import { Alert } from '@mui/material';
import { Stack } from '@mui/material';

export default function Alerts() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">Данные успешно сохранены!</Alert>
      </Stack>
    );
  }