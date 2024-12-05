const walk = (curr: BinaryNode<number> | null, path: number[]): number[] => {
    // base
    if (!curr)
        return path;

    // recurse
    walk(curr.left, path)
    walk(curr.right, path)
    path.push(curr.value)

    return path;
}
export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, [])
}