import { Hono } from "hono";
import fetchApi from "./requests/request";
import fetchCities from "./requests/city";

const app = new Hono();

app.get("/", async (c) => {
	const res = await fetchApi();
	return c.json(res);
});

app.get("/cities/:name", async (c) => {
	const city = c.req.param("name");
	const res = await fetchCities(city);
	return c.json(res);
});

app.notFound((c) => {
	return c.text("404 not found.", 404);
});

export default app;
