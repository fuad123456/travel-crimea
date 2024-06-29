import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type ReactElement } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ruRU } from '@mui/x-date-pickers/locales';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function Main(): ReactElement {
	return (
		<div
			style={{
				backgroundImage: "url('https://hmd.tvil.ru/upload/images/slider/summer/2023/people/1.webp')",
				backgroundSize: "cover",
				backgroundPosition: "center right"
			}}
			className='h-96 p-10'

		>
			<h2 className='text-2xl md:text-4xl lg:text-6xl pt-10 text-white mb-10'>Отели, квартиры и дома посуточно	Бронируй и заезжай</h2>
			<div className='px-4 py-3 bg-slate-100 flex gap-2'>

				<FormControl fullWidth>
					<InputLabel id="test-select-label">Куда поедете?</InputLabel>
					<Select
						style={{ width: "100%" }}
						variant="outlined"
						labelId="test-select-label"
						label={"Label1233333"}
					>
						<MenuItem value={10}>Сочи</MenuItem>
						<MenuItem value={20}>Крым</MenuItem>
						<MenuItem value={30}>Афганистан</MenuItem>
					</Select>
				</FormControl>
				<div className='w-full'>
					<LocalizationProvider dateAdapter={AdapterDayjs} localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
						<DatePicker
							label="Заезд"
							// slotProps={{
							// 	textField: {
							// 		helperText: 'MM/DD/YYYY',
							// 	},
							// }}
						/>
					</LocalizationProvider>
				</div>
				<div className='w-full'>
					<LocalizationProvider dateAdapter={AdapterDayjs} localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}>
						<DatePicker
							label="Выезд"
							// slotProps={{
							// 	textField: {
							// 		helperText: 'MM/DD/YYYY',
							// 	},
							// }}
						/>
					</LocalizationProvider>
				</div>
				<FormControl fullWidth>
					<InputLabel id="test-select-label">Куда поедете?</InputLabel>
					<Select
						style={{ width: "100%" }}
						variant="outlined"
						labelId="test-select-label"
						label={"Label1233333"}
					>
						<MenuItem value={10}>Сочи</MenuItem>
						<MenuItem value={20}>Крым</MenuItem>
						<MenuItem value={30}>Афганистан</MenuItem>
					</Select>
				</FormControl>
				<Button  variant="contained" color='success' className='w-full'>Найти жилье</Button>
			</div>
		</div>
	)
}
