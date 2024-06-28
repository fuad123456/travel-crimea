import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { type ReactElement } from 'react'

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
		</div>
	)
}
