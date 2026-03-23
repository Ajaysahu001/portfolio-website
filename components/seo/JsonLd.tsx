interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a JSON-LD <script> tag for structured data.
 * Accepts a single schema object or an array (graph).
 */
export default function JsonLd({ schema }: JsonLdProps) {
  const data = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : schema;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
