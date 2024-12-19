import { app } from "./app";
import { env } from "./env";

app
	.listen({
		host: "0.0.0.0", // Avoid problems with apps that are consuming our API
		port: env.PORT,
	})
	.then(() => {
		console.log("🚀 Server is running on port 3333");
	});
