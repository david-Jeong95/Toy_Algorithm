let dfs = function (node){
    let values = [node.value]; //자식노드의 첫번째를 먼저 찾아내는 dfs
    node.children.forEach((n) => {
        values = values.concat(dfs(n));
    })
    return values
};

let Node =function (value){
    this.value = value;
    this.children = [];
}

Node.prototype.addChild = function (child){
    this.children.push(child);
    return child;
}