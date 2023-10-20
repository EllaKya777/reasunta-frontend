import { useState } from 'react';
import QRCode from 'react-qr-code';

function QrGenerator() {
	const [value, setValue] = useState();
	const [back, setBack] = useState('#FFFFFF');
	const [fore, setFore] = useState('#000000');
	const [size, setSize] = useState(256);

	return (
		<div className="QrGenerator">
			<center>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setValue(e.target.value)}
					placeholder="Value of Qr-code"
				/>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setBack(e.target.value)}
					placeholder="Background color"
				/>
				<br />
				<br />
				<input
					type="text"
					onChange={(e) => setFore(e.target.value)}
					placeholder="Foreground color"
				/>
				<br />
				<br />
				<input
					type="number"
					onChange={(e) => setSize(parseInt(e.target.value ===
						'' ? 0 : e.target.value, 10))}
					placeholder="Size of Qr-code"
				/>
				<br />
				<br />
				<br />
				{value && (
					<QRCode
						title="GeeksForGeeks"
						value={value}
						bgColor={back}
						fgColor={fore}
						size={size === '' ? 0 : size}
					/>
				)}
			</center>
		</div>
	);
}

export default QrGenerator;
