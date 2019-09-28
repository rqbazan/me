const { mutateSource } = require('gatsby-remark-twemoji-shortcut')

module.exports = function remark(markdown) {
  const markdownNode = {
    internal: {
      content: markdown.slice()
    }
  }

  mutateSource({ markdownNode })

  return markdownNode.internal.content
}
