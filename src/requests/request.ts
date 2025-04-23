export default async function fetchApi() {
	const response = await fetch("https://zutool.jp/api/getweatherstatus/13113");
	const data = await response.json();
	return data;
}
