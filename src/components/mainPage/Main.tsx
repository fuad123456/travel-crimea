import { Box, Button, Container, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import { type ReactElement } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ruRU } from '@mui/x-date-pickers/locales';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import { useMediaQuery } from '@mui/material';
export default function Main(): ReactElement {
	const isSmallScreen = useMediaQuery('(max-width:600px)');
	return (
		<>
			<div
				style={{
					backgroundImage: "url('https://hmd.tvil.ru/upload/images/slider/summer/2023/people/1.webp')",
					backgroundSize: "cover",
					backgroundPosition: "center right"
				}}
				className='h-96 pt-2 sm:pt-4 md:pt-10'

			>
				<Container>
				<h2 className='text-xl md:text-4xl lg:text-6xl pt-2 sm:pt-4 md:pt-10 text-white mb-4 md:mb-6 lg:mb-10'>Отели, квартиры и дома посуточно	Бронируй и заезжай</h2>
				<div className='px-4 py-3 bg-slate-100 flex flex-col sm:flex-row gap-2'>

					<FormControl fullWidth className=''>
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
						<LocalizationProvider
							dateAdapter={AdapterDayjs}
							localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}

						>
							<DatePicker
								className='w-full'
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
								className='w-full'
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
					<Button variant="contained" color='success' className='w-full'>Найти жилье</Button>
				</div>
				</Container>
			</div>
			<div className='mt-14'>
				<Container>
					<div  className='mb-8'>
						<Typography variant='h4'> Почему ТВИЛ </Typography>
					</div>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							'& > :not(style)': {
								m: 1,
								width: "100%",
								height: "100%",
								paddingLeft: isSmallScreen ? 4 : 8,
								paddingRight: isSmallScreen ? 4 : 8,
								paddingTop: 6,
								paddingBottom: 6,
							},
						}}
					>
						<Paper elevation={10} className='w-full'>
							<div className="flex gap-4 mb-8">
								<div >
									<LoopOutlinedIcon fontSize='large' color='info'/>
								</div>
								<div>
									<Typography variant='h5'>
										Отмена брони в любой момент
									</Typography>
									<p>Вы можете отменить бронирование в любой момент для повторного бронирования в соответствии с Политикой лояльности.</p>
								</div>
							</div>
							<div className="flex gap-4 mb-8">
								<div >
									<VerifiedUserOutlinedIcon fontSize='large' color='info'/>
								</div>
								<div>
									<Typography variant='h5'>
										Через ТВИЛ за 15 лет забронировали более 20 миллионов ночей
									</Typography>
									<p>О ТВИЛ пишут и показывают 1 канал, Форбс, Коммерсант, РБК и другие известные издания.</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div >
									<PercentOutlinedIcon fontSize='large' color='info'/>
								</div>
								<div>
									<Typography variant='h5'>
										На ТВИЛ более 500 000 вариантов жилья в 1 200 городах по всей России и Абхазии
									</Typography>
									<p>За время работы ТВИЛ стал одним из лидеров среди сервисов бронирования отелей и квартир.</p>
								</div>
							</div>
						</Paper>
					</Box>
				</Container>
			</div>
		</>
	)
}
