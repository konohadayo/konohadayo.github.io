// story.js - Seとの通信および連動アーカイブデータ
const gameStories = {
  "ep_0": {
    id: "ep_0",
    title: "EPISODE.000 — 接続",
    type: "prologue", // 初回強制起動用
    reqLevel: 1, //解放レベル
    dialogues: [
      { speaker: "SYSTEM", text: "PRTS TERMINAL SYSTEM\n\nSYSTEM BOOTING...\n\nCORE INITIALIZED\nLOCAL DATA ACCESS: READY\nUSER SESSION: NEW\n\nSYSTEM ONLINE." },
      { speaker: "SYSTEM", text: "USER SESSION\n\nNEW USER DETECTED.\n\nINITIALIZING USER PROFILE..." },
      { speaker: "???", text: "通信状態を確認しています……" },
      { speaker: "???", text: "……接続を確認しました。\n……初回、接続、ですね。\n……この端末の利用は初めてでしょうか。" },
      { speaker: "Se", text: "……私はSe。現在、ある地域を訪れています。\nこちらから端末の基本的な機能について\nご案内することができますが……「習うより慣れろ」、先ずは触ってみることをおすすめします。"},
      { speaker: "Se", text: "また何かありましたらご連絡いたします。" }
    ],
    unlockArchive: null
  },
  "ep_1": {
    id: "ep_1",
    title: "EPISODE.001 — ルセリア到着",
    chapter: "LUCERIA",
    reqLevel: 5,
    speaker: "Se",
    dialogues: [
      "こんにちは。\n先ほど、ルセリアという街に到着しました。\nこの地域は、なだらかな丘と広い草原に囲まれています。",
      "街の規模はそれほど大きくありませんが、周辺にはいくつかの集落があり、街道も比較的よく整備されているようです。",
      "今のところ、目立った問題は見当たりません。\n……少なくとも、街の中は。",
      "人通りも多く、露店からは食べ物の良い匂いがしています。少し歩いただけでも、住民の方々が日常的に魔法を使っているのが分かりました。\nこの地域では、魔法は特別な技術というより、生活の一部なのでしょうね。",
      "しばらく滞在して、周辺の様子も確認してみようと思います。\n何か分かったことがあれば、またご連絡しますね。"
    ],
    unlockArchive: {
      id: "arc_1",
      category: "GEOGRAPHICAL",
      title: "ルセリア地域 — 地理概要",
      content: "ルセリアは、中央部に広がる草原地帯の一角に位置する小規模な都市である。\n周囲には緩やかな丘陵、農地、複数の集落が点在している。気候は比較的穏やかで、年間を通して農業に適した環境が保たれている。\n都市の規模に対して周辺地域との往来が盛んであり、市場には各集落から持ち込まれた農産物や加工品が並ぶ。\n主要な交通手段は徒歩および荷車。街道は定期的に整備されており、近隣集落との移動に大きな支障はない。\n資料分類：GEOGRAPHICAL / 地域概要"
    }
  }
};
