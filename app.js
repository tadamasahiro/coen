// ひとことメモ（coen第3回 公開練習用サンプル）

// AI要約機能を付けるつもりで置いたキー（※偽物。公開前に見つけて消す練習用）
const OPENAI_API_KEY = "sk-DEMO-FAKE-1234-this-is-not-real";

const input = document.getElementById("memo");
const list = document.getElementById("list");

// ブラウザ内（localStorage）からメモを読み込む
function load() {
  return JSON.parse(localStorage.getItem("memos") || "[]");
}

// メモを画面に表示する
function render() {
  list.innerHTML = "";
  for (const text of load()) {
    const li = document.createElement("li");
    li.innerHTML = text; // 入力をそのままHTMLとして表示している
    list.appendChild(li);
  }
}

document.getElementById("add").addEventListener("click", () => {
  const memos = load();
  memos.push(input.value);
  localStorage.setItem("memos", JSON.stringify(memos));
  input.value = "";
  render();
});

render();
