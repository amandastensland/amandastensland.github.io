import { SectionInterface } from "../../components/Section/Section.interface";

export const sections: Array<SectionInterface> = [
  {
    title: "Section 1",
    itemType: "section",
    subsections: [
      {
        title: "Subsection 1",
        itemType: "subsection_video",
        description: "En kort beskrivning här.",
        video: { url: "#" }
      },
      {
        title: "Subsection 2",
        itemType: "subsection_video",
        description: "En kort beskrivning här.",
        video: { url: "#" }
      }
    ]
  },
  {
    title: "Section 2",
    itemType: "section",
    subsections: [
      {
        title: "Subsection 1",
        itemType: "subsection_text",
        content: [
          { itemType: "type_title", title: "Först steget" },
          { itemType: "type_text", title: "Skapa boken så här.... bla bla..." }
        ]
      }
    ]
  }
];