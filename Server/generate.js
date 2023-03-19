function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
exports.createGroup = (data) => {
  let matches = [];
  for (let i = 0; i < data.length; ++i) {
    let A = [];
    let B = [];
    let len = data[i][1].length;
    for (let j = 0; j < len; j += 2) {
      A.push(`${data[i][1][j]}`);
      if (j + 1 < len) B.push(`${data[i][1][j + 1]}`);
    }
    let temp = [];
    for (let i = 0, k = 1; i < A.length; ++i) {
      for (let j = 0; j < B.length; ++j) {
        // temp.push({ [`Match-${k++}`]: `${[A[i]]} with ${[B[j]]}` });
        temp.push(`Match-${k++}: ${[A[i]]} with ${[B[j]]}`);
      }
    }
    matches.push([[data[i][0]], temp]);
  }
  return matches;
};
