import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useDarkMode } from '../Settings/DarkModeContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const today = dayjs();

export default function Date() {

  // Dark Mode
  const { dark } = useDarkMode();

  const darkModeTheme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
      primary: {
        main: '#c53142',
      },
      text: {
        primary: dark ? '#ffffff' : '#000000',
      },
    },
  });


  return (
    <div
      className={`w-[340px] rounded-3xl border-2 border-solid border-[#C53142] px-[12.47px] py-[23px] ${dark ? 'bg-[#171717] text-white' : 'bg-white'}`}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateCalendar']}>
        <ThemeProvider theme={darkModeTheme}>
          <DateCalendar
            defaultValue={today}
            disableFuture
            sx={{ width: '310px'}}
            referenceDate={dayjs('2022-04-17')}
            views={['year', 'month', 'day']}
            orientation="landscape"
          />
          </ThemeProvider>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
