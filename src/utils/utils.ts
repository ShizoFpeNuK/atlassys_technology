export const globalImageTypes =
	".jpeg,.png,.jpg,.avif,.gif,.svg,.webp,.icon,.tiff,.jfif,.heic,.heif";

const imageTypes = [
	"jpeg",
	"png",
	"jpg",
	"avif",
	"gif",
	"svg",
	"webp",
	"icon",
	"tiff",
	"jfif",
	"heic",
	"heif",
];

export const checkIsImage = (fileName: string) => {
	if (imageTypes.some((type) => fileName?.endsWith(type))) return true;
	return false;
};
