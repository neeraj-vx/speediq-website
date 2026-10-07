import { FeaturePage, featureMetadata } from "@/components/site/FeaturePage";
import { FEATURE_BY_SLUG } from "@/content/features";

const content = FEATURE_BY_SLUG["email"];

export const metadata = featureMetadata(content);

export default function Page() {
  return <FeaturePage content={content} />;
}
