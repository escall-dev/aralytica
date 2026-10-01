import type { StructureResolver } from "sanity/structure";
import { BookOpen, Newspaper, Users } from "lucide-react";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Research & Publications")
        .icon(BookOpen)
        .child(
          S.documentList()
            .title("Research Documents")
            .filter('_type == "research"')
            .defaultOrdering([{ field: "publicationDate", direction: "desc" }])
        ),
      S.listItem()
        .title("Insights & Commentary")
        .icon(Newspaper)
        .child(
          S.documentList()
            .title("Insights & Articles")
            .filter('_type == "insight"')
            .defaultOrdering([{ field: "publicationDate", direction: "desc" }])
        ),
      S.listItem()
        .title("Team & Leadership")
        .icon(Users)
        .child(
          S.documentList()
            .title("Team Members")
            .filter('_type == "teamMember"')
            .defaultOrdering([{ field: "displayOrder", direction: "asc" }])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["research", "insight", "teamMember"].includes(
            listItem.getId() || ""
          )
      ),
    ]);
