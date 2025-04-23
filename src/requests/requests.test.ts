import { test, expect } from "vitest";
import app from "../index";

test("GET / is ok", async () => {
	const res = await app.request("/");
	expect(res.status).toBe(200);
});

test("GET /hoge notfound", async () => {
	const res = await app.request("/hoge");
	expect(res.status).toBe(404);
});
