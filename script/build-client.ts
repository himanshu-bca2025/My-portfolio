import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

// Build only client for static deployment (Vercel/Netlify)
async function buildClient() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();
  
  console.log("✓ Client build complete!");
}

buildClient().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});

