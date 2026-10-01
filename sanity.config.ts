import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";
import { dataset, projectId } from "./sanity/env";

export default defineConfig({
  basePath: "/studio",
  name: "aralytica_studio",
  title: "ARALytica Studio",

  // Fallback to a placeholder during local/build phase if env is not yet configured
  projectId: projectId || "placeholder",
  dataset: dataset || "production",

  plugins: [
    structureTool({
      structure,
    }),
  ],

  schema,
});
