function solution(maps) {
    var answer = 0;
    const row = maps.length; // 맵의 행 길이
    const column = maps[0].length; // 맵의 열 길이
    
        // 이동하는 방향의 배열
    const direction = [
        [0, 1], [1, 0], [0, -1], [-1, 0]   
    ];
    // 큐 초기화
     const queue = [[0, 0, 1]];
        // 방문 여부 체크 
    const visited = Array.from({ length: row }, () => Array(column).fill(false));
    visited[0][0] = true;
    
    while (queue.length > 0) {
        const [x, y, distance] = queue.shift(); // 큐에서 요소를 꺼냄

        // 도착점에 도달한 경우
        if (x === row - 1 && y === column - 1) {
            return distance;
        }

        // 네 방향으로 이동
        for (const [dx, dy] of direction) {
            const nx = x + dx;
            const ny = y + dy;

            // 맵 경계 내에 있고, 이동 가능한 곳(1)이며, 방문하지 않은 곳만 탐색
            if (
                nx >= 0 && nx < row &&
                ny >= 0 && ny < column &&
                maps[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                visited[nx][ny] = true; // 방문 체크
                queue.push([nx, ny, distance + 1]); // 큐에 다음 위치와 거리 추가
            }
        }
    }

    // 도착점에 도달할 수 없는 경우
    return -1;
    
}