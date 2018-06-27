export const PAGE_CLICKED = "PAGE_CLICKED";

export function clickPage(page) {
	return {
		type: PAGE_CLICKED,
		payload: page
	};
}
