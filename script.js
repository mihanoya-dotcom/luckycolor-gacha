
const colors = ["赤","青","緑","紫","金","銀","白","黒"];
const messages = [
 "心が澄む日です。",
 "笑顔がチャンスを連れてくる。",
 "小さな勇気が未来を変える。",
 "受け取るより与える日。",
 "1つ手放すと1つ入る。",
 "直感に従ってOK。",
 "焦らず、深呼吸。",
 "丁寧に過ごすと道が拓ける。",
 "あなたの言葉が誰かの灯りになる。",
 "今日は無理しない日。",
 "静けさが必要な時間。",
 "姿勢を正すと流れが整う。",
 "優しさが鍵。",
 "今日のあなたは魅力的。",
 "変わる準備が整っている。",
 "風が味方してくれる日。",
 "心のノイズを消してみて。",
 "言葉選びが未来を連れてくる。",
 "ひとり時間で回復する日。",
 "目線を上げて。"
];

document.getElementById("gachaBtn").addEventListener("click", ()=>{
  const color = colors[Math.floor(Math.random()*colors.length)];
  const message = messages[Math.floor(Math.random()*messages.length)];
  document.getElementById("colorText").innerText = "今日のラッキーカラー：" + color;
  document.getElementById("messageText").innerText = "💬 " + message;
  document.getElementById("popup").classList.remove("hidden");
});

document.getElementById("closeBtn").addEventListener("click", ()=>{
  document.getElementById("popup").classList.add("hidden");
});
