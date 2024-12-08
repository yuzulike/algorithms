function solution(genres, plays) {
    const genreMap = {};
    const totalPlayCount = {};

    // 1. 장르별로 곡을 그룹화하고 총 재생 횟수 계산
    genres.forEach((genre, index) => {
        genreMap[genre] = genreMap[genre] || [];
        genreMap[genre].push([plays[index], index]);
        totalPlayCount[genre] = (totalPlayCount[genre] || 0) + plays[index];
    });

    // 2. 장르별로 총 재생 횟수를 기준으로 내림차순 정렬
    const sortedGenres = Object.keys(totalPlayCount).sort((a, b) => totalPlayCount[b] - totalPlayCount[a]);

    // 3. 각 장르에서 재생 횟수 순으로 두 곡을 선택
    return sortedGenres.reduce((result, genre) => {
        const songs = genreMap[genre].sort((a, b) => b[0] - a[0]);
        result.push(songs[0][1]);
        if (songs.length > 1) result.push(songs[1][1]);
        return result;
    }, []);
}
