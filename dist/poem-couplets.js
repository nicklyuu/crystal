const coupletLibrary=[
  {motif:'水流与归仓',inner:[['心藏细水常思远','静看千帆辨去留'],['手理千丝知取舍','一篙一桨量深浅'],['胸乘长风敢逐潮','眼随潮起便扬帆']],outcome:{flow:['命引清泉成阔泽','时来百谷渐归仓'],build:['且聚微澜待满川','守住良田自有收'],turn:['先固长堤再放舟','莫逐浮潮失本泉']},reading:{flow:'后句接住了前句的谨慎或冲劲：命盘的平衡方向与资源积累较为同路，已有的能力容易沉淀成结果。',build:'后句没有许诺骤然而来的丰盛，而是把重点放在聚水成川；你具备积累条件，成效取决于能否持续收束资源。',turn:'后句把“先固堤”放在“再行舟”之前；当前并非不能求财，而是要先减少分散投入和情绪化选择。'}},
  {motif:'远帆与山路',inner:[['胸有云帆犹候岸','心量远岭迟抬步'],['步量山径稳攀峰','舟循星斗试新航'],['剑气初鸣催远行','长风入袖欲凌峰']],outcome:{flow:['命借东风正举帆','时开云路可登峰'],build:['守定星标终渡潮','循阶蓄力亦登峰'],turn:['先收急浪再开帆','莫教锋芒误险峰']},reading:{flow:'后句给前句的志向添了风势：命盘所需的平衡力量与事业推进方向相合，适合把想法变成明确目标。',build:'后句强调认准星标、逐阶蓄力；你有前进条件，但真正的突破来自连续完成，而非等待一次完美机会。',turn:'后句先收急浪、再谈扬帆；行动力并不缺，眼下更需要厘清优先级，免得速度替代了方向。'}},
  {motif:'心湖与月色',inner:[['心似秋潭多照影','静听松月问初心'],['一石一泉安寸心','缓理微澜寻旧岸'],['风起心湖急渡舟','欲破层云先举灯']],outcome:{flow:['命添静月自澄明','时有清泉润石心'],build:['守住微光夜自平','待息长风水自明'],turn:['先停急桨听潮声','莫催浊水映天光']},reading:{flow:'后句让月光落回水面：命盘的平衡方向有助于安定心绪，你越允许自己恢复，判断反而越清楚。',build:'后句写的不是立刻风平浪静，而是守住一束微光；你的稳定感可以建立，但需要固定的休息、边界和日常节奏。',turn:'后句劝你先停桨，而不是更用力地划；当前最该调整的是过度回应和自我催促，安静下来才看得见真正的问题。'}},
  {motif:'双燕与同舟',inner:[['心藏双燕怕惊春','欲近花枝先问风'],['半桥灯影待同行','同舟缓桨试深浅'],['愿将心火照归人','一见春风便启门']],outcome:{flow:['命引和风两翼齐','时逢暖水可同舟'],build:['留得从容花自开','慢系同心结更牢'],turn:['先明边界再同舟','莫将孤勇作深情']},reading:{flow:'后句让两翼遇上和风：命盘所需力量与建立关系的方向相合，真诚表达更容易得到稳定回应。',build:'后句把从容放在盛开之前；你有靠近别人的能力，但关系需要用时间验证可靠，而不是靠浓度证明深度。',turn:'后句先谈边界，再谈同舟；眼下若想靠近一个人，需要先把真实需求说清，别用过度付出来换取理解。'}},
  {motif:'清音与回声',inner:[['心有清词藏未发','满纸云烟迟落笔'],['一声一字试回音','慢理弦音寻正调'],['胸中长啸欲穿云','清歌出口便乘风']],outcome:{flow:['命借长风送远音','时开晴宇有回声'],build:['守住真声自有人','且把清音次第传'],turn:['先调心弦再放歌','莫让急声遮本音']},reading:{flow:'后句让声音乘上长风：命盘的平衡方向支持表达与连接，只要说得真实，外界更容易听见重点。',build:'后句强调守住自己的声音；你并非没有表达力，而要减少反复解释，先把最重要的一句话说清。',turn:'后句提醒先调弦再放歌；当下的问题不是音量不够，而是情绪和重点挤在一起，需要先整理再开口。'}},
  {motif:'书灯与山径',inner:[['心向书山先问径','灯下千思迟落笔'],['一页一阶通远山','手循石径渐知深'],['新知如火催开卷','眼逐星河欲问天']],outcome:{flow:['命添书火照长程','时引清泉活旧知'],build:['守住一灯终见山','勤将碎玉琢成章'],turn:['先收万卷攻一题','莫逐群峰忘脚下']},reading:{flow:'后句为书灯添了光：命盘所需力量与学习成长相合，输入若及时转成作品或实践，会形成明显积累。',build:'后句把许多碎玉琢成一章；你有持续学习的条件，关键是减少资料囤积，用阶段性输出检验理解。',turn:'后句让视线从群峰回到脚下；当前并非学得不够，而是方向太多，先做深一个问题会比继续扩张更有效。'}}
];

const coupletInnerNotes=[
  '前句保留了你先观察、再落子的习惯。它既是谨慎，也是容易迟迟不开局的原因。',
  '前句写的是边走边确认的节奏。你不依赖一次选对，更适合用连续的小反馈修正方向。',
  '前句带着明显的起势感。你能在机会出现时迅速投入，也需要在速度起来之前确认代价。'
];
const coupletEnergyNotes=['你靠独处恢复，所以决定越重要，越要先替自己隔出安静。','你会在可信的人身边看清自己，适度商量能减少无效内耗。','你容易被环境和回应点亮，但别让外界热度替你决定方向。'];
const coupletDecisionNotes=['你重视逻辑与可靠性，适合给思考设期限，到点便用行动验证。','你会同时照顾现实与感受，下一步要明确哪一项不能妥协。','你在意内心真实与人的感受，表达需求时需要少一点猜测。'];
const coupletChangeNotes=['变化发生时，你习惯先恢复秩序；这次只保住主线，其余允许重排。','你会先观察再调整，记得给观察设一个结束信号。','你擅长顺势转弯，只需在转弯前再次确认目的地。'];
const coupletGoalActions=['先盘点时间、金钱和承诺，只保留能够长期积累的投入。','选定一个最值得推进的目标，把它拆成可以连续完成的阶段。','固定一段不被打扰的恢复时间，同时减少没有必要的回应。','把期待和边界各说清一件，再用一段时间观察行动是否一致。','先说出最重要的一句话，让表达有重点，也给对方回应的空间。','围绕一个问题完成一次输出，用作品、笔记或实践检验理解。'];

function coupletHash(text){let h=2166136261;for(const ch of text){h^=ch.codePointAt(0);h=Math.imul(h,16777619)}return h>>>0}
function generateCouplet(chart,a,birth){
  const goal=a[8],profile=goalProfiles[goal],seed=`${birth.date}|${birth.time}|${a.join('')}|${chart.pillars.join('')}`,variant=coupletHash(`${seed}|couplet`)%2;
  let score=0;if(profile.elements[0]===chart.useGod)score+=3;else if(profile.elements.includes(chart.useGod))score+=1;if(profile.elements[0]===chart.joyGod)score+=2;else if(profile.elements.includes(chart.joyGod))score+=1;if(profile.elements[0]===chart.dayElement)score+=1;
  const futureMatch=[1,2,0,1,2,0][goal];if(a[7]===futureMatch)score+=1;if(a[5]===1||(a[5]===2&&[1,4].includes(goal))||(a[5]===0&&[2,3].includes(goal)))score+=1;
  const band=score>=4?'flow':score>=2?'build':'turn',pack=coupletLibrary[goal],lines=[pack.inner[a[1]][variant],pack.outcome[band][variant]],bandLabel={flow:'顺势',build:'蓄势',turn:'转势'}[band];
  return{lines,guidance:[`这两句以${pack.motif}为同一条线。${coupletInnerNotes[a[1]]}${pack.reading[band]}`,`${coupletEnergyNotes[a[0]]}${coupletDecisionNotes[a[2]]}${coupletChangeNotes[a[3]]}`,`此签判断为“${bandLabel}”：${chart.dayStem}${chart.dayElement}日主，以${chart.useGod}为用、${chart.joyGod}为喜。这里说的不是结果注定，而是你目前实现「${goals[goal].name}」时更合适的用力方式。${coupletGoalActions[goal]}`],band};
}
