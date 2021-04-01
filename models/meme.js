const memes = [
  "https://i.redd.it/hmy7goektqf61.jpg",
  "https://i.imgur.com/WHjBHQf.png",
  "https://i.imgur.com/X3lzixG.jpg",
  "https://i.imgur.com/nHeszCu.jpg",
  "https://i.imgur.com/DD8m3aT.jpg",
  "https://i.imgur.com/1bJlAaV.jpg",
  "https://i.imgur.com/TlMRcLq.jpg",
  "https://i.imgur.com/nzNjKc8.jpg",
  "https://www.probytes.net/wp-content/uploads/2018/01/3.jpg",
];

module.exports = {
    getAll,
    deleteOne,
    create,


}

function getAll() {
    return memes;
}

function deleteOne(idx) {
    return memes.splice(idx, 1);
}

function create(meme) {
    return memes.unshift(meme);
}