function superbowlWin(records) {
  // let win = records.find(o => o.result === "W");
  let win = records.find(function(o) {
    return o.result === "W"
  });
  return win ? win.year : undefined;
}