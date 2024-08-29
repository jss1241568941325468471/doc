function topicConfig(name, code) {
  if (!name || !code) {
    throw new Error("Both name and code are required to generate a topic configuration.");
  }

  return {
    name: name,
    path: `content/${code}`,
    url: "/[full_slug]/",
    schemas: {
      default: {
        path: ".cloudcannon/schemas/topic.md"
      },
      homepage: {
        path: ".cloudcannon/schemas/homepage.md",
        create: {
          path: "[relative_base_path]/{slug}.md",
        },
        _enabled_editors: [
          'visual',
          'content'
        ],
        _inputs: {
          layout: {
            hidden: true
          }
        }
      }
    },
    _enabled_editors: [
      "content",
      "visual"
    ],
    output: true
  }
}

module.exports = {
  topicEn: topicConfig("English", "en"),
  topicFr: topicConfig("French", "fr"),
  topicDe: topicConfig("Deutsch", "de")
}