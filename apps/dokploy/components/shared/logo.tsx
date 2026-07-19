import { cn } from "@/lib/utils";

interface Props {
	className?: string;
	logoUrl?: string;
}

export const Logo = ({ className = "size-14", logoUrl }: Props) => {
	if (logoUrl) {
		return (
			// biome-ignore lint/performance/noImgElement: this is for dynamic logo loading
			<img
				src={logoUrl}
				alt="Organization Logo"
				className={cn(className, "object-contain rounded-sm")}
			/>
		);
	}

	return (
		// biome-ignore lint/performance/noImgElement: static branding logo
		<img
			src="/images/unahur-iso.png"
			alt="Universidad Nacional de Hurlingham"
			className={cn(className, "object-contain")}
		/>
	);
};
