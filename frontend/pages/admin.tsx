'use client'

import { Button, Typography, styled } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
export default function Home() {
 
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Planilhas
      </Typography>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
      Planilha de vendas
      <VisuallyHiddenInput type="file" />
    </Button>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
      Planilha de estoque
      <VisuallyHiddenInput type="file" />
    </Button>
    </div>
  )
}
