export default async function fetchCities(city: string) {
	const response = await fetch(`https://zutool.jp/api/getweatherpoint/${city}`);
	const data = await response.json();
	const formatData = JSON.parse(data.result);
	return formatData;
}
