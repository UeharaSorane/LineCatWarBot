var rollbase = require('./rollbase.js');
var rply ={type : 'text'}; //type是必需的,但可以更改

let TuesdayBox = [
		'突刺',
		'穿心射擊',
		'刺拳',
		'掃堂腿',
		'風神腿',
		'突襲',
		'當頭棒喝',
		'麻痺箭',
		'劇毒箭',
		'燃燒箭',
		'重劈',
		'猛虎一式',
		'獵龍一式'
		 ];

let WednesdayBox = [
		'冰雹',
		'雷擊',
		'冰獄彈',
		'轟炎彈',
		'魔導劍擊',
		'魔導穿槍',
		'魔導狙擊',
		'魔導彈'
		 ];

let ThursdayBox = [
		'祝福',
		'光盾',
		'狙擊姿態',
		'舉劍',
		'隱藏術',
		'怒吼',
		'咒術筆記',
		'劍聖的教誨(被動)',
		'大賢者的知惠(被動)',
		'箭神的心得(被動)',
		'狂戰士的回憶(被動)',
		'牧師的專業(被動)',
		'不滅意志(被動)'
		 ];

let MondayBox = [];

MondayBox.length = TuesdayBox.length + WednesdayBox.length  + ThursdayBox.length;

MondayBox = TuesdayBox + WednesdayBox + ThursdayBox;

function main() {
	var date = new Date();
	var day = date.getDay();
	
	let temp = rollbase.Dice(100);
		
	if (temp >= 68) rply.text =  '\恭喜，是普通獎勵。';
	if (temp <=67 && temp >= 39) rply.text = '\恭喜，是中等獎勵。';
	if (temp <=38 && temp >= 16) rply.text = '\喔喔！是高等獎勵欸，恭喜！';
	if (temp <=15){
		if(day ==0){
		}else if(day == 1){
			
			rply.text = '太棒了！！！是頂級獎勵！恭喜！\
					\n你獲得了技能書「' + MondayBox[Math.floor((Math.random() * (MondayBox.length)))] + '」';
			
		}else if(day == 2){
			
			rply.text = '太棒了！！！是頂級獎勵！恭喜！\
					\n你獲得了技能書「' + TuesdayBox[Math.floor((Math.random() * (TuesdayBox.length)))] + '」';
			
		}else if(day == 3){
			
			rply.text = '太棒了！！！是頂級獎勵！恭喜！\
					\n你獲得了技能書「' + WednesdayBox[Math.floor((Math.random() * (WednesdayBox.length)))] + '」';
			
		}else if(day == 4){
			
			rply.text = '太棒了！！！是頂級獎勵！恭喜！\
					\n你獲得了技能書「' + ThursdayBox[Math.floor((Math.random() * (ThursdayBox.length)))] + '」';
			
		}
		
		
		
		
	}
	
	
	return rply;
	
}


module.exports = {
	main
};
