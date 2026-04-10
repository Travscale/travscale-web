import PlaceholderContentTemplate from "@/components/templates/content/placeholder-content-template";
import type { PlaceholderPageContent } from "@/lib/site-content";

type PlaceholderContentPageProps = {
  content: PlaceholderPageContent;
};

export default function PlaceholderContentPage({
  content,
}: PlaceholderContentPageProps) {
  return <PlaceholderContentTemplate content={content} />;
}
