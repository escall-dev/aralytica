import { type SchemaTypeDefinition } from "sanity";
import { research } from "./research";
import { insight } from "./insight";
import { teamMember } from "./teamMember";
import { seo } from "./seo";
import { blockContent } from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [research, insight, teamMember, seo, blockContent],
};
