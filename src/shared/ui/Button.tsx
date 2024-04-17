import React, { FunctionComponent } from 'react'
import { Button, createTheme, ThemeProvider } from '@mui/material'


declare module '@mui/material/styles' {
    interface Palette {
      red: Palette['primary'];
    }
  
    interface PaletteOptions {
      red?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color options to include an ochre option
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      red: true;
    }
  }

const theme = createTheme({
    palette: {
      red: {
        main: '#aa2e25',
        light: '#f44336',
        dark: '#f6685e',
        contrastText: '#FFFFFF',
      },
    },
  });


export const CustomButton: FunctionComponent<{text: string,
                                              disabled: boolean,
                                              type?: "submit" | "button" | "reset" | undefined,
                                              form?: string
                                              onClick: () => void }> = ({text, disabled, type, form, onClick}) => {

    return (
        <ThemeProvider theme={theme}>
            <Button type={type} form={form} variant='contained' color="red" onClick={onClick} disabled={disabled}>{text}</Button>
        </ThemeProvider>
    )
}
    