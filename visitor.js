let globalScope = new Map()
class Visitor {
  visitIdentifierNode (node) {
    const name = node.name
    if (globalScope.get(name)) {
      return globalScope.get(name)
    }
    return name
  }
  visitLiteralNode (node) {
    return node.value
  }
  visitNode (node) {
    switch (node.type) {
      case 'Literal':
        return this.visitLiteralNode(node)
      case 'Identifier':
        return this.visitIdentifierNode(node)
    }
  }
  visitNodes (nodes) {
    for (node of nodes) {
      this.visitNode(node)
    }
  }

  run (nodes) {
    return this.visitNodes(nodes)
  }
}
