var rollbase = require('./rollbase.js');
var funny = require('./funny.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

//////////////// 遊戲活動
function main(EventN) {
	///確定活動狀態
	if(EventN == 0){
		rply.text = '【重要】 先行測試二 不刪擋公測中 \
				\n\
				\n感謝各位參加 Line文遊-梅里歐斯的冒現者 的先行測試 \
				\n還沒完成教學的測試玩家請盡速找GM進行教學\
				\n\
				\n        GM團祝各位遊玩愉快';
	}else if(EventN == 1){

		 rply.text = '【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇) \
				\n\
				\n 開催時間:3/15 00:00~3/31 23:59\
				\n 故事:\
				\n     這是三年前，路卡曾經為了找到能實現任何願望的「黃金之泉」，所發生的故事\
				\n\
				\n     對路卡而言，那是與「她」第一次相遇的，十分重要的故事\
				\n\
				\n 活動方式:\
				\n     以類似於主線任務的形式進行，輸入 活動 確認劇情關卡進度，之後向GM申請挑戰劇情任務，過關後就能取得特別獎勵！\
				\n\
				\n     一共六個關卡，全部完成的話，總計可以獲得50顆奇蹟石的獎勵！';

	}else if(EventN == null){

		 rply.text = '【活動目錄】目前開催中的活動一覽表 \
				\n\
				\n  0 【重要】 先行測試二 不刪擋公測中\
				\n  1 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n\
				\n 如果想看詳細活動內容，請輸入 [活動 活動編號] ';
	}else{

		 rply.text = '找不到活動編號['+ EventN + ']的活動喔\
				\n\
				\n【活動目錄】目前開催中的活動一覽表 \
				\n\
				\n  0 【重要】 先行測試二 不刪擋公測中\
				\n  1 【活動預告】劇情活動-路卡與梅里歐斯的回憶(前篇)\
				\n\
				\n 如果想看詳細活動內容，請輸入 [活動 活動編號] ';

	}
	
	return rply;
}
////////////////



module.exports = {
	main
};
