export const mockFetch = data =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve(data),
	})
