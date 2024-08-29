const file_config = require("./.cloudcannon/files/index");

module.exports = {
  _snippets_imports: {
    eleventy_liquid: {
      exclude: [
        "eleventy_liquid_raw"
      ]
    }
  },
  _snippets: {
    ...require("./.cloudcannon/snippets/index")
  },
  collections_config: {
    ...require("./.cloudcannon/collections/topics"),
    data: {
      path: "_data",
      filter: {
        exclude: [
          "snippets.json",
        ]
      },
      schemas: {
        doc: {
          path: ".cloudcannon/schemas/data-doc.json",
          create: {
            path: "[relative_base_path]/{slug}.json"
          }
        }
      }

    }
  },
  file_config,
  collection_groups: [
    {
      heading: "Topics",
      collections: [
        "topicEn",
        "topicFr",
        "topicDe"
      ]
    },
    {
      heading: "Data",
      collections: [
        "data"
      ]
    }
  ],
  collections_config_override: true,
  data_config: {
    locale: true,
    variables: true,
    snippets: true,
    var: true,
  },
  _editables: {
    text: {
      italic: true
    },
    content: {
      bold: true,
      format: "p h2 h3 h4 h5 h6",
      italic: true,
      link: true,
      bulletedlist: true,
      indent: true,
      numberedlist: true,
      outdent: true,
      code: true,
      horizontalrule: true,
      image: true,
      table: true,
      undo: true,
      redo: true,
      snippet: true
    }
  },
  _structures: {
    sidebarsGroup: {
      values: [
        {
          value: {
            label: "",
            items: ""
          }
        }
      ],
    },
    sidebarsItem: {
      values: [
        {
          value: {
            label: "",
            url: "",
            items: ""
          }
        }
      ]
    }
  },
  _inputs: {
    trim_left: {
      hidden: true
    },
    trim_right: {
      hidden: true
    },
    trim_top_left: {
      hidden: true
    },
    trim_top_right: {
      hidden: true
    },
    trim_bottom_left: {
      hidden: true
    },
    trim_bottom_right: {
      hidden: true
    },
    preview: {
      type: "image",
      options: {
        paths: {
          uploads: "../.cloudcannon/previews"
        },
        accepts_mime_types: [
          "image/svg+xml"
        ]
      }
    },
    sidebars: {
      type: "array",
      options: {
        structures: "_structures.sidebarsGroup",
      }
    },
    items: {
      type: "array",
      options: {
        structures: "_structures.sidebarsItem"
      }
    }
  }
}