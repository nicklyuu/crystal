const beadData = [
  ['紫水晶','水晶','火','紫色','#9e81be','沉静思考','通透紫色，带自然色带',0],
  ['薰衣草紫晶','水晶','火','浅紫色','#b6a0cf','舒缓节奏','柔和浅紫，清透轻盈',0,'brightness(1.16) saturate(.72)'],
  ['紫黄晶','水晶','土','紫金色','#b89573','平衡取舍','紫色与金黄色自然过渡',0,'hue-rotate(24deg) saturate(.8)'],
  ['粉晶','水晶','火','粉色','#d9a6ad','温柔表达','柔雾粉色，半透明质感',1],
  ['草莓晶','水晶','火','莓粉色','#c7838c','连接与善意','淡粉色，细密红色包裹体',13],
  ['白水晶','水晶','金','透明色','#d4dfdc','清晰与留白','清透无色，内部可见冰裂纹',2],
  ['发晶','水晶','金','金透明色','#cfb271','目标感','透明晶体内呈针状包裹体',8,'saturate(.78)'],
  ['黄水晶','水晶','土','黄色','#d4b15d','自信与主动','浅黄到蜜金，通透明亮',8],
  ['茶晶','水晶','土','茶棕色','#837568','沉稳与秩序','烟茶色透明晶体',9],
  ['幽灵水晶','水晶','木','绿透明色','#789886','层次与成长','透明晶体内呈山景状包裹体',7,'saturate(.65)'],
  ['黑曜石','火山玻璃','水','黑色','#30343b','边界与安定','深黑玻璃光泽',3],
  ['雪花黑曜石','火山玻璃','水','黑白色','#55585c','冷静判断','黑色底中有灰白斑点',3,'brightness(1.25) contrast(.75)'],
  ['金曜石','火山玻璃','土','黑金色','#6b5b3c','稳定行动','黑色底上带金色光带',5,'brightness(.65) saturate(.55)'],
  ['红玛瑙','玛瑙玉髓','火','红色','#b65d49','行动与勇气','深红至橙红，细腻色带',4],
  ['南红玛瑙','玛瑙玉髓','火','柿红色','#c55c45','笃定与热忱','温润柿红，颜色浓郁',4,'brightness(1.08) saturate(.82)'],
  ['盐源玛瑙','玛瑙玉髓','土','多彩色','#a68178','包容与变化','粉、紫、黄等低饱和色交织',14,'saturate(.55)'],
  ['蓝纹玛瑙','玛瑙玉髓','水','浅蓝色','#9fbfca','温和沟通','浅蓝与白色细纹相间',6,'brightness(1.08) saturate(.6)'],
  ['蓝玉髓','玛瑙玉髓','水','雾蓝色','#7caebc','从容表达','均匀雾蓝，柔和通透',6,'saturate(.78)'],
  ['白玉髓','玛瑙玉髓','金','乳白色','#d7d6ce','简洁从容','乳白半透明，质感细腻',11,'saturate(.35)'],
  ['樱花玛瑙','玛瑙玉髓','火','樱粉色','#d3a2a4','柔韧与浪漫','透明底中有花朵状包裹体',13,'brightness(1.12) saturate(.6)'],
  ['虎眼石','石英岩','土','金棕色','#b08b4c','坚定与专注','金棕色，流动猫眼光带',5],
  ['鹰眼石','石英岩','水','蓝黑色','#4b6671','观察与洞察','蓝灰色猫眼光带',5,'hue-rotate(155deg) saturate(.7)'],
  ['红虎眼','石英岩','火','红棕色','#8f5040','执行与坚持','红棕色猫眼光带',5,'hue-rotate(315deg) saturate(.85)'],
  ['东陵玉','石英岩','木','绿色','#69a287','生长与开放','柔和绿色，细小闪光颗粒',7],
  ['海蓝宝','水晶','水','海蓝色','#9bcbd5','平和沟通','浅海蓝色，通透柔润',6],
  ['托帕石','水晶','水','冰蓝色','#a8cfdb','清醒表达','冰蓝色透明晶体',6,'brightness(1.14) saturate(.72)'],
  ['萤石','水晶','木','紫绿色','#8da898','好奇与创造','紫绿交织，透明色带',14],
  ['月光石','长石','金','乳白色','#c1d1db','觉察与柔和','乳白底色，带蓝色晕彩',11],
  ['拉长石','长石','水','灰蓝色','#71838b','想象与转换','灰色底上呈蓝绿晕彩',11,'brightness(.72) saturate(1.15)'],
  ['太阳石','长石','火','橙金色','#c58c57','活力与乐观','橙金色底，带细密闪光',8,'hue-rotate(340deg) saturate(.85)'],
  ['青金石','矿石','水','深蓝色','#445c9a','真实表达','深蓝底色，带金色星点',10],
  ['方钠石','矿石','水','蓝白色','#516b9b','理性沟通','蓝色底中有白色纹理',10,'brightness(1.08) saturate(.7)'],
  ['孔雀石','矿石','木','深绿色','#3f805e','更新与成长','浓绿色同心条纹',7,'brightness(.75) saturate(1.35)'],
  ['绿松石','矿石','木','蓝绿色','#6aa8a0','坦率与自由','蓝绿色底，常见深色纹理',7,'hue-rotate(35deg) saturate(.85)'],
  ['白松石','矿石','金','白灰色','#d1d5cd','简洁与从容','白色底，灰色网状纹理',15],
  ['石榴石','矿石','火','酒红色','#823c50','热忱与坚持','深酒红色，光下透红',12],
  ['橄榄石','矿石','木','黄绿色','#91a85e','轻快与更新','清透黄绿色晶体',7,'hue-rotate(330deg) saturate(.85)'],
  ['天河石','长石','木','湖蓝色','#79aaa6','真实与松弛','湖蓝色底，常有白色纹理',6,'hue-rotate(42deg) saturate(.7)'],
  ['和田白玉','玉石','金','脂白色','#ddd9ca','温润与克制','温润乳白，油脂光泽',11,'saturate(.25) brightness(1.05)'],
  ['和田碧玉','玉石','木','深绿色','#567862','稳定与包容','沉静碧绿，质地细腻',7,'brightness(.7) saturate(.65)'],
  ['翡翠','玉石','木','翠绿色','#4f9a6b','生机与自信','翠绿至白绿，通透温润',7,'brightness(.9) saturate(1.2)'],
  ['岫玉','玉石','木','浅绿色','#9fb69e','柔和与适应','淡绿或黄绿色，柔润通透',7,'brightness(1.18) saturate(.45)'],
  ['独山玉','玉石','土','多彩色','#978c79','包容与平衡','绿、白、紫等颜色共生',14,'saturate(.45) brightness(.95)'],
  ['淡水珍珠','有机珠材','金','珍珠白','#e2ded2','优雅与圆融','珍珠光泽，每颗形态略有差异',11,'saturate(.2) brightness(1.12)'],
  ['白贝母','有机珠材','金','虹彩白','#e4e0d8','细腻与轻盈','乳白底带虹彩光泽',11,'saturate(.4) brightness(1.18)'],
  ['小叶紫檀','木质珠材','木','紫棕色','#65433b','沉着与专注','深紫棕木纹，色泽温厚',9,'hue-rotate(325deg) saturate(.7) brightness(.72)'],
  ['沉香木','木质珠材','木','深棕色','#55483e','安静与收敛','深浅交错的天然木纹',9,'saturate(.5) brightness(.66)'],
  ['星月菩提','植物籽实','土','米白色','#d7caae','耐心与日常','米白底上有细小深色星点',15,'sepia(.32) saturate(.55)']
];

const crystals = beadData.map((x,id)=>({
  id,name:x[0],category:x[1],element:x[2],color:x[3],hex:x[4],meaning:x[5],texture:x[6],visual:x[7],filter:x[8]||'none'
}));

const questions = [
  ['在忙碌的一天结束后，你更想……',['一个人安静待着，慢慢恢复能量','找熟悉的人聊聊天，分享今天']],
  ['面对一个新机会，你通常会……',['先收集信息，想清楚再行动','先迈出一步，在尝试中寻找答案']],
  ['做重要决定时，你更在意……',['是否符合逻辑，结果是否可靠','自己的感受，以及对人的影响']],
  ['面对突然改变的计划，你会……',['希望尽快重新安排，找回节奏','顺势调整，说不定有新的发现']],
  ['在人际关系里，你更希望……',['保留自己的空间和边界','建立更深的理解与连接']],
  ['此刻，你最想提醒自己的是……',['放慢一点，给自己一些余地','勇敢一点，把想法变成行动']],
  ['你更容易被哪种风格吸引？',['安静克制，低饱和的配色','鲜明有趣，有一抹亮色']],
  ['接下来的一段时间，你希望……',['专注内在，建立稳定的日常','向外探索，迎接新的可能']]
];

const byName = name => crystals.find(c=>c.name===name);
const state = {
  view:'quiz', q:0, answers:Array(8).fill(null),
  birth:{date:'',time:'12:00',unknown:false,wrist:16,size:8}, chart:null,
  pureRecipe:[{id:0,n:20}], mixedRecipe:[{id:0,n:16},{id:11,n:2},{id:27,n:2}],
  result:false, libraryFilter:'全部', search:''
};
try{
  const saved=JSON.parse(sessionStorage.getItem('jingyu-result'));
  if(saved?.result) Object.assign(state,saved);
}catch{}
const $ = s => document.querySelector(s);
const sprite = new Image();
sprite.src = 'assets/beads.png';

function beadStyle(id){
  const c=crystals[id];
  return `background-position:${c.visual%4*100/3}% ${Math.floor(c.visual/4)*100/3}%;filter:${c.filter}`;
}
function bead(id){ return `<span class="bead" style="${beadStyle(id)}"></span>`; }
function legend(recipe){
  return recipe.map(r=>`<span><i style="background:${crystals[r.id].hex}"></i>${crystals[r.id].name} ${r.n} 颗</span>`).join('');
}

function renderQuiz(){
  const q=questions[state.q];
  $('#panel').innerHTML=`<div class="panel-head"><span>性格探索</span><span>${String(state.q+1).padStart(2,'0')} / 08 · 约 2 分钟</span></div>
  <div class="progress"><div style="width:${(state.q+1)/8*100}%"></div></div>
  <p class="question-kicker">${['能量来源','行动方式','决策偏好','生活节奏','人际边界','当下心愿','审美偏好','未来期待'][state.q]}</p>
  <h2>${q[0]}</h2><p class="muted">没有标准答案，选择更接近此刻的自己。</p>
  <div class="answers">${q[1].map((a,i)=>`<button class="answer ${state.answers[state.q]===i?'selected':''}" data-answer="${i}" aria-pressed="${state.answers[state.q]===i}"><i>${i?'B':'A'}</i><span>${a}</span></button>`).join('')}</div>
  <div class="actions"><button class="secondary" id="prev" ${state.q===0?'disabled':''}>上一题</button><button class="primary" id="next" ${state.answers[state.q]===null?'disabled':''}>${state.q===7?'继续填写出生信息':'下一题'}</button></div>
  <p class="fine">你的选择与出生信息仅在当前页面计算，不上传服务器。</p>`;
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{state.answers[state.q]=+b.dataset.answer;state.result=false;renderQuiz()});
  $('#prev').onclick=()=>{state.q--;renderQuiz()};
  $('#next').onclick=()=>state.q<7?(state.q++,renderQuiz()):show('birth');
}

function show(view, push=true){
  if(view==='result'&&!state.result){
    if(state.answers.includes(null)){state.q=state.answers.indexOf(null);view='quiz'}else view='birth';
  }
  state.view=view;
  const isResult=view==='result';
  $('#appShell').hidden=isResult;
  $('#resultPage').hidden=!isResult;
  document.body.classList.toggle('result-mode',isResult);
  document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  if(view==='quiz')renderQuiz();
  else if(view==='birth')renderBirth();
  else renderResult();
  if(push) history.pushState({view},'',isResult?'#result':'#'+view);
  window.scrollTo({top:0,behavior:'instant'});
}

function renderBirth(){
  $('#panel').innerHTML=`<p class="question-kicker">02 / 东方命盘</p><h2>记录你与世界相遇的时刻。</h2>
  <p class="muted">以公历、北京时间（UTC+8）排盘。暂不校正真太阳时；海外出生请先换算北京时间。</p>
  <form id="birthForm"><label for="date">出生日期 · 公历</label><input required id="date" type="date" min="1901-01-01" max="${new Date().toISOString().slice(0,10)}" value="${state.birth.date}">
  <label for="time">出生时间 · 北京时间</label><input id="time" type="time" value="${state.birth.time}" ${state.birth.unknown?'disabled':''}>
  <label class="check"><input id="unknown" type="checkbox" ${state.birth.unknown?'checked':''}> 不确定时辰（仅分析前三柱）</label>
  <div class="row"><div><label for="wrist">手围 · cm</label><input id="wrist" type="number" min="12" max="23" step="0.5" required value="${state.birth.wrist}"></div><div><label for="size">珠径 · mm</label><select id="size">${[6,8,10,12].map(s=>`<option ${s===state.birth.size?'selected':''}>${s}</option>`).join('')}</select></div></div>
  <p class="fine">数量按手围 + 0.5 cm 松量估算。实物尺寸还需根据珠孔、弹力线与佩戴松紧调整。</p><p id="formError" class="error" role="alert"></p>
  <div class="actions"><button type="button" class="secondary" id="backQuiz">返回问卷</button><button class="primary" type="submit">生成两款专属手串</button></div></form>`;
  $('#unknown').onchange=e=>$('#time').disabled=e.target.checked;
  $('#backQuiz').onclick=()=>{saveBirth();show('quiz')};
  $('#birthForm').onsubmit=e=>{e.preventDefault();saveBirth();if(state.answers.includes(null)){$('#formError').textContent='请先完成全部 8 道性格问题。';return}try{generate();show('result')}catch(err){$('#formError').textContent='排盘暂未完成，请检查出生日期和时间后重试。'}};
}

function saveBirth(){
  state.birth={date:$('#date').value,time:$('#time').value||'12:00',unknown:$('#unknown').checked,wrist:+$('#wrist').value,size:+$('#size').value};
}

function choosePrimary(a){
  const score={
    '紫水晶':(a[0]===0?2:0)+(a[5]===0?2:0)+(a[7]===0?1:0),
    '海蓝宝':(a[0]===1?1:0)+(a[2]===1?2:0)+(a[6]===0?1:0),
    '虎眼石':(a[1]===0?2:0)+(a[2]===0?2:0)+(a[3]===0?1:0),
    '红玛瑙':(a[1]===1?2:0)+(a[5]===1?2:0)+(a[7]===1?1:0),
    '粉晶':(a[2]===1?2:0)+(a[4]===1?2:0)+(a[6]===0?1:0),
    '茶晶':(a[3]===0?2:0)+(a[4]===0?1:0)+(a[7]===0?2:0),
    '东陵玉':(a[3]===1?2:0)+(a[7]===1?2:0)+(a[6]===0?1:0),
    '石榴石':(a[5]===1?2:0)+(a[6]===1?2:0)+(a[4]===1?1:0)
  };
  const name=Object.entries(score).sort((x,y)=>y[1]-x[1])[0][0];
  return byName(name);
}

function chooseAccents(primary,least){
  const palettes={
    '紫水晶':{木:['萤石','东陵玉'],火:['薰衣草紫晶','草莓晶'],土:['茶晶','紫黄晶'],金:['月光石','白水晶'],水:['拉长石','海蓝宝']},
    '海蓝宝':{木:['天河石','东陵玉'],火:['薰衣草紫晶','粉晶'],土:['茶晶','白松石'],金:['月光石','白水晶'],水:['蓝玉髓','拉长石']},
    '虎眼石':{木:['沉香木','和田碧玉'],火:['红虎眼','红玛瑙'],土:['茶晶','黄水晶'],金:['白松石','白水晶'],水:['鹰眼石','黑曜石']},
    '红玛瑙':{木:['小叶紫檀','东陵玉'],火:['南红玛瑙','石榴石'],土:['虎眼石','黄水晶'],金:['白玉髓','白水晶'],水:['黑曜石','茶晶']},
    '粉晶':{木:['岫玉','东陵玉'],火:['草莓晶','樱花玛瑙'],土:['白松石','淡水珍珠'],金:['月光石','白水晶'],水:['海蓝宝','拉长石']},
    '茶晶':{木:['沉香木','和田碧玉'],火:['红虎眼','石榴石'],土:['虎眼石','星月菩提'],金:['白松石','白水晶'],水:['黑曜石','鹰眼石']},
    '东陵玉':{木:['翡翠','岫玉'],火:['草莓晶','南红玛瑙'],土:['黄水晶','星月菩提'],金:['白玉髓','月光石'],水:['天河石','海蓝宝']},
    '石榴石':{木:['小叶紫檀','和田碧玉'],火:['红玛瑙','草莓晶'],土:['茶晶','虎眼石'],金:['白水晶','白松石'],水:['黑曜石','拉长石']}
  };
  const names=palettes[primary.name][least];
  return names.map(byName).filter(c=>c&&c.id!==primary.id).slice(0,2);
}

function generate(){
  const b=state.birth,[y,m,d]=b.date.split('-').map(Number),[h,mi]=b.time.split(':').map(Number);
  const ec=Solar.fromYmdHms(y,m,d,b.unknown?12:h,mi,0).getLunar().getEightChar();
  ec.setSect(2);
  const pillars=[ec.getYear(),ec.getMonth(),ec.getDay(),b.unknown?'—':ec.getTime()];
  const wx=[ec.getYearWuXing(),ec.getMonthWuXing(),ec.getDayWuXing(),b.unknown?'':ec.getTimeWuXing()];
  const counts=Object.fromEntries(['木','火','土','金','水'].map(x=>[x,wx.join('').split(x).length-1]));
  const least=Object.keys(counts).sort((a,z)=>counts[a]-counts[z])[0];
  const primary=choosePrimary(state.answers),accents=chooseAccents(primary,least);
  const total=Math.max(12,Math.round((b.wrist*10+5)/b.size));
  const accentTotal=Math.max(2,Math.floor(total*.2));
  const a1=Math.ceil(accentTotal/2),a2=accentTotal-a1;
  state.chart={pillars,counts,least};
  state.pureRecipe=[{id:primary.id,n:total}];
  state.mixedRecipe=[{id:primary.id,n:total-accentTotal},{id:accents[0].id,n:a1},...(a2?[{id:accents[1].id,n:a2}]:[])];
  state.result=true;
  sessionStorage.setItem('jingyu-result',JSON.stringify(state));
}

function renderResult(){
  const a=state.answers,c=state.chart,primary=crystals[state.pureRecipe[0].id];
  const traits=[a[0]?'从交流中充电':'享受独处',a[1]?'敢于尝试':'审慎思考',a[4]?'重视连接':'重视边界'];
  $('#resultSummary').textContent=`性格主石为${primary.name}。同一颗主石，用统一的纯色版与克制的配色版呈现。`;
  $('#resultTraits').innerHTML=traits.map(t=>`<span>${t}</span>`).join('');
  $('#pureLegend').innerHTML=legend(state.pureRecipe);
  $('#mixedLegend').innerHTML=legend(state.mixedRecipe);
  $('#pureReason').textContent=`整串使用 ${state.pureRecipe[0].n} 颗${primary.name}，颜色与光泽最统一，适合偏爱简洁、日常好搭配的佩戴方式。`;
  const accentNames=state.mixedRecipe.slice(1).map(r=>crystals[r.id].name).join('、');
  const pct=Math.round(state.mixedRecipe[0].n/state.mixedRecipe.reduce((n,r)=>n+r.n,0)*100);
  $('#mixedReason').textContent=`以${primary.name}占 ${pct}% 作为绝对主色，${accentNames}仅作对称点缀。保留推理结果，也让颜色更完整、不零碎。`;
  $('#pillars').innerHTML=c.pillars.map((p,i)=>`<div class="pillar"><small>${['年柱','月柱','日柱','时柱'][i]}</small><b>${p}</b></div>`).join('');
  $('#chartNote').innerHTML=`表层五行：${Object.entries(c.counts).map(([k,v])=>`${k} ${v}`).join(' · ')}<br>节气定年月柱，日柱以午夜换日。仅计天干与地支本气，不含藏干、旺衰或喜用神分析${state.birth.unknown?'；时辰未知，未纳入时柱':''}。`;
  const reasons=[
    [primary,`问卷中的能量、决策和当下目标共同指向「${primary.meaning}」，所以它成为两款方案的主石。`],
    [crystals[state.mixedRecipe[1].id],`四柱表层五行中「${c.least}」数量较少，因此在配色版中加入少量${crystals[state.mixedRecipe[1].id].name}作文化与配色参考。`],
    [crystals[state.mixedRecipe[2].id],`第三种珠材只占很小比例，用来衔接明暗和材质层次，并与主色保持同一冷暖倾向。`]
  ];
  $('#reasons').innerHTML=reasons.map(([x,t],i)=>`<div class="reason">${bead(x.id)}<div><h3>${x.name} <strong>${i?'点缀':'主石'}</strong></h3><p>${t}</p></div></div>`).join('');
  drawBracelet($('#pureBracelet'),state.pureRecipe);
  drawBracelet($('#mixedBracelet'),state.mixedRecipe);
  document.querySelectorAll('[data-download]').forEach(b=>b.onclick=()=>downloadDesign(b.dataset.download));
}

function balancedSequence(recipe){
  const total=recipe.reduce((n,r)=>n+r.n,0),seq=Array(total).fill(recipe[0].id);
  const accents=[];
  recipe.slice(1).forEach(r=>{for(let i=0;i<r.n;i++)accents.push(r.id)});
  accents.forEach((id,i)=>{seq[Math.floor(i*total/accents.length)%total]=id});
  return seq;
}

function drawBead(ctx,id,x,y,size){
  const c=crystals[id],sw=sprite.naturalWidth/4,sh=sprite.naturalHeight/4;
  ctx.save();ctx.shadowColor='#0008';ctx.shadowBlur=14;ctx.shadowOffsetY=9;ctx.filter=c.filter;
  ctx.drawImage(sprite,c.visual%4*sw,Math.floor(c.visual/4)*sh,sw,sh,x-size/2,y-size/2,size,size);ctx.restore();
}

function drawBracelet(canvas,recipe){
  if(!canvas||!sprite.complete||!sprite.naturalWidth)return;
  const ctx=canvas.getContext('2d'),ids=balancedSequence(recipe),n=ids.length,radius=295,size=Math.min(130,2*Math.PI*radius/n*1.2);
  ctx.clearRect(0,0,900,900);
  ids.forEach((id,i)=>{const a=-Math.PI/2+i/n*Math.PI*2;drawBead(ctx,id,450+Math.cos(a)*radius,450+Math.sin(a)*radius,size)});
}

function updatePreview(){
  const recipe=state.result?state.mixedRecipe:[{id:0,n:16},{id:27,n:2},{id:11,n:2}];
  $('#designName').textContent=state.result?'配色版 · 克制点缀':'静谧 · 微光';
  $('#beadSpec').textContent=`${recipe.reduce((n,r)=>n+r.n,0)} 颗 / ${state.birth.size} mm`;
  $('#legend').innerHTML=legend(recipe);
  $('#previewNote').textContent=state.result?'主色约 80%，其余珠材对称点缀。':'示例搭配。完成探索后，为你生成两款方案。';
  drawBracelet($('#bracelet'),recipe);
}

function downloadDesign(type){
  if(!sprite.naturalWidth){alert('珠材图片还未加载，请稍后再试。');return}
  const source=type==='pure'?$('#pureBracelet'):$('#mixedBracelet'),recipe=type==='pure'?state.pureRecipe:state.mixedRecipe;
  const c=document.createElement('canvas');c.width=1200;c.height=1450;const ctx=c.getContext('2d');
  ctx.fillStyle='#172425';ctx.fillRect(0,0,c.width,c.height);ctx.drawImage(source,100,120,1000,1000);
  ctx.textAlign='center';ctx.fillStyle='#d8ba80';ctx.font='34px serif';ctx.fillText(`晶遇 · ${type==='pure'?'纯色版':'配色版'}`,600,95);
  ctx.fillStyle='#f1efe7';ctx.font='25px sans-serif';ctx.fillText(recipe.map(r=>`${crystals[r.id].name} ${r.n}颗`).join('  ·  '),600,1215);
  ctx.font='22px sans-serif';ctx.fillText(`${recipe.reduce((n,r)=>n+r.n,0)} 颗 · ${state.birth.size} mm · 手围 ${state.birth.wrist} cm`,600,1270);
  ctx.fillStyle='#a2b0ab';ctx.font='19px sans-serif';ctx.fillText('AI 材质示意 · 文化寓意与个人审美参考',600,1350);
  const a=document.createElement('a');a.download=`晶遇-${type==='pure'?'纯色版':'配色版'}.png`;a.href=c.toDataURL('image/png');a.click();
}

function library(filter=state.libraryFilter,query=state.search){
  state.libraryFilter=filter;state.search=query;
  const choices=['全部','水晶','玛瑙玉髓','玉石','矿石','有机珠材','木质珠材'];
  $('#filters').innerHTML=choices.map(f=>`<button data-filter="${f}" class="${filter===f?'active':''}">${f}</button>`).join('');
  const list=crystals.filter(c=>(filter==='全部'||c.category===filter)&&(c.name.includes(query)||c.color.includes(query)||c.meaning.includes(query)));
  $('#libraryCount').textContent=list.length;
  $('#catalog').innerHTML=list.length?list.map(c=>`<button class="crystal-card" data-id="${c.id}">${bead(c.id)}<h3>${c.name}</h3><p>${c.category} · ${c.element} · ${c.color}</p><small>${c.meaning}</small></button>`).join(''):'<p class="empty">没有找到匹配的珠材，换个关键词试试。</p>';
  document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>library(b.dataset.filter,state.search));
  document.querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>openDetail(+b.dataset.id));
}

function openDetail(id){
  const c=crystals[id];
  $('#detailBody').innerHTML=`${bead(c.id)}<p class="eyebrow">BEAD NO. ${String(c.id+1).padStart(2,'0')}</p><h2>${c.name}</h2><p>${c.texture}</p><p>类别：${c.category}<br>颜色：${c.color} · 五行配色：${c.element}<br>设计寓意：${c.meaning}<br>常用珠径：6 / 8 / 10 / 12 mm</p><p>可作为主石或点缀珠材。寓意用于个人审美表达，不代表珠材具有改变性格或运势的功效。</p>`;
  $('#detail').showModal();
}

function openLibrary(){
  if(!$('#resultPage').hidden) show('birth');
  $('#library').hidden=false;library();$('#library').scrollIntoView({behavior:'smooth'});
}

sprite.onload=()=>{$('#artStatus').hidden=true;updatePreview();if(state.result)renderResult()};
sprite.onerror=()=>{$('#artStatus').textContent='珠材示意图暂不可用，请刷新重试'};
$('#libraryTop').onclick=openLibrary;
$('#resultLibrary').onclick=openLibrary;
$('#closeLibrary').onclick=()=>{$('#library').hidden=true;window.scrollTo({top:0,behavior:'smooth'})};
$('#crystalSearch').oninput=e=>library(state.libraryFilter,e.target.value.trim());
$('#closeDetail').onclick=()=>$('#detail').close();
$('#resultBack').onclick=()=>show('birth');
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>show(b.dataset.view));
window.onpopstate=()=>show(location.hash==='#result'?'result':location.hash==='#birth'?'birth':'quiz',false);
if(location.hash==='#result'&&state.result) show('result',false);
else{if(location.hash==='#result')history.replaceState({view:'quiz'},'','#quiz');renderQuiz();updatePreview()}

if(document.modelContext?.registerTool){
  try{Promise.resolve(document.modelContext.registerTool({
    name:'read_crystal_recipes',description:'读取当前纯色版与配色版手串方案，不改变页面。',
    inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},
    execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw Error('参数必须为空对象');return {completed:state.result,pure:state.pureRecipe.map(r=>({name:crystals[r.id].name,count:r.n})),mixed:state.mixedRecipe.map(r=>({name:crystals[r.id].name,count:r.n})),diameter:state.birth.size}}
  })).catch(()=>{})}catch{}
}
