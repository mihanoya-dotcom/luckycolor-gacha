
const colors = [
 "ブルー","ピンク","ホワイト","グリーン","パープル",
 "オレンジ","ゴールド","シルバー","ターコイズ","ブラック",
 "イエロー","ミント","ネイビー","ラベンダー","ルビー",
 "アクア","スカイ","グレー","ローズ","ベージュ"
];

document.getElementById("btn").addEventListener("click",()=>{
  const result = colors[Math.floor(Math.random()*colors.length)];
  document.getElementById("result").textContent = "今日のラッキーカラーは…「" + result + "」";
});
