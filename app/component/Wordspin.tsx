import { SpinningText } from "@/components/motion-primitives/spinning-text";
import Image from "next/image";
export function SpinningTextBasic() {
	return (
		<div className="relative flex items-center justify-center w-[200px] h-[200px]">
			<Image
				src="/logo.png"
				alt="Center Image"
				width={130}
				height={130}
				className="absolute z-10"
			/>
			<SpinningText
				radius={8}
				fontSize={1.2}
				className="font-medium leading-none"
			>
				{`Explore With Himalayan Sky View Tours • `}
			</SpinningText>
		</div>
	);
}
