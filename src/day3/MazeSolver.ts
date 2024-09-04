const dir = [
        [0, -1],
        [1, 0],
        [0, 1],
        [-1, 0]
];
function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
        // off the map
        if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
                return false;
        }
        // at a wall
        if (maze[curr.x][curr.y] === wall) {
                return false;

        }
        // at the end
        if (curr.x === end.x && curr.y == end.y) {
                return true;
        }
        // already seen
        if (seen[curr.x][curr.y]) {
                return false;
        }

        // recursive case

        // pre
        path.push(curr);
        // recursive

        for (let i = 0; i < dir.length; ++i) {
                const [x, y] = dir[i];
                if (walk(maze, wall, {
                        x: curr.x + x,
                        y: curr.y + y,
                }, end, seen, path)) {
                        return true
                }
        }
        // post
        path.pop();

}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

}
