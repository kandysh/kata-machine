function search(curr: BinaryNode<number> | null, needle: number): boolean {
    // base

    if (!curr)
        return false;


    if (curr.value === needle)
        return true;

    // recurse

    if (needle > curr.value)
        return search(curr.right, needle)

    return search(curr.left, needle)

}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}