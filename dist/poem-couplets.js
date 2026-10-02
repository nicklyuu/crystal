const coupletElements=['木','火','土','金','水'];

const coupletLibrary=[
  {
    motif:'水流与归仓',
    images:{木:'新禾',火:'灯市',土:'良田',金:'金穗',水:'清泉'},
    inner:['入眼细思量','在手量深浅','乘风逐大潮'],
    outcome:{surge:'得势满归仓',flow:'引路聚成川',build:'微聚待丰年',turn:'先守再开仓',rest:'宜藏莫逐潮'},
    reading:{surge:'命盘与性格都在替资源积累加力，眼下适合把握一项已经出现的明确机会。',flow:'平衡方向与资源目标同路，已有能力容易沉淀成看得见的结果。',build:'条件正在形成，但真正的丰盛来自持续收束，而不是同时追逐更多入口。',turn:'当前仍可求进，只是要先减少分散投入和情绪化选择。',rest:'眼下更适合保住基本盘，整理时间、金钱与承诺，再等待清楚的机会。'}
  },
  {
    motif:'远帆与山路',
    images:{木:'青梯',火:'明炬',土:'长阶',金:'利剑',水:'云帆'},
    inner:['在胸犹候岸','随步试高峰','出鞘欲凌峰'],
    outcome:{surge:'得势上青云',flow:'借势正扬帆',build:'蓄力亦登峰',turn:'收锋再启程',rest:'守位待东风'},
    reading:{surge:'目标、命盘与行动倾向彼此呼应，适合承担一件真正有难度的事。',flow:'命盘所需力量与事业推进方向相合，现在应把想法变成明确目标。',build:'前进条件已经存在，突破来自连续完成，而不是等待一次完美机会。',turn:'行动力并不缺，眼下更需要收拢锋芒、厘清优先级。',rest:'目前不宜同时开启太多战线，先守住位置、补齐能力，再等风向清楚。'}
  },
  {
    motif:'心湖与月色',
    images:{木:'松影',火:'心灯',土:'静岭',金:'清钟',水:'秋潭'},
    inner:['照心多问影','随息理微澜','临风急渡舟'],
    outcome:{surge:'得时自澄明',flow:'引静照初心',build:'守息水渐平',turn:'停桨听潮声',rest:'闭户养微光'},
    reading:{surge:'命盘与性格都指向清醒的稳定，主动整理生活会很快看见变化。',flow:'命盘的平衡方向有助于安定心绪，越允许自己恢复，判断反而越清楚。',build:'稳定感可以建立，但需要固定的休息、边界和日常节奏。',turn:'当前最该调整的是过度回应和自我催促，先停下来才能看见问题。',rest:'能量正需要回收，不必逼自己立刻想通；先养住睡眠、秩序和微小兴趣。'}
  },
  {
    motif:'双燕与同舟',
    images:{木:'花枝',火:'暖烛',土:'长桥',金:'双环',水:'同舟'},
    inner:['近心怕惊春','同路试深浅','迎风便启门'],
    outcome:{surge:'逢春两翼齐',flow:'借暖可同舟',build:'慢系结更牢',turn:'明界再同舟',rest:'留白待花开'},
    reading:{surge:'你有表达感受的意愿，也有承接关系的力量，真诚靠近容易得到回应。',flow:'命盘所需力量与建立关系的方向相合，坦白会让关系更稳。',build:'你有靠近别人的能力，但关系需要用时间验证可靠。',turn:'若想真正靠近一个人，需要先把期待与边界说清。',rest:'这段时间更适合留出空间观察，不必用浓烈付出来证明关系。'}
  },
  {
    motif:'清音与回声',
    images:{木:'竹笛',火:'清歌',土:'回谷',金:'玉磬',水:'流音'},
    inner:['藏声迟落笔','试音问回声','乘风欲破云'],
    outcome:{surge:'得风响晴空',flow:'乘势有回声',build:'次第传清音',turn:'调弦再放歌',rest:'含光养本音'},
    reading:{surge:'表达欲、判断与外部时机都已具备，适合清楚说出真正立场。',flow:'命盘的平衡方向支持表达与连接，只要真实，外界更容易听见重点。',build:'你并非没有表达力，而要减少反复解释，把内容分出主次。',turn:'当前的问题不是音量不够，而是情绪和重点挤在一起，需要先整理。',rest:'此刻不必急着争取所有人的理解，先弄清自己真正想说的那一句。'}
  },
  {
    motif:'书灯与山径',
    images:{木:'书林',火:'书灯',土:'石径',金:'墨锋',水:'墨海'},
    inner:['入心先问径','逐页探幽深','燃心欲问天'],
    outcome:{surge:'得光照长程',flow:'引泉活旧知',build:'守一终见山',turn:'收卷攻一题',rest:'温书养寸心'},
    reading:{surge:'好奇心、行动力与命盘方向互相支持，适合开启一段集中的学习计划。',flow:'命盘所需力量与学习成长相合，输入若及时转为输出，会形成明显积累。',build:'你有持续学习的条件，关键是减少资料囤积，用阶段成果检验理解。',turn:'当前不是学得不够，而是方向太多；先做深一个问题会更有效。',rest:'现在适合复习、整理与消化，不必急着开启新的庞大主题。'}
  }
];

const coupletInnerNotes=[
  '前句写你先观察、再落子的习惯；谨慎保护了判断，也可能推迟第一步。',
  '前句写你边走边确认的节奏；你适合从连续的小反馈里修正方向。',
  '前句写你见机便起的力量；速度是优势，也需要一个检查代价的停顿。'
];
const coupletEnergyNotes=['你靠独处恢复，决定越重要，越要先替自己隔出安静。','你会在可信的人身边看清自己，适度商量能减少无效内耗。','你容易被环境和回应点亮，但别让外界热度替你决定方向。'];
const coupletDecisionNotes=['你重视逻辑与可靠性，适合给思考设期限，到点便用行动验证。','你会同时照顾现实与感受，下一步要明确哪一项不能妥协。','你在意内心真实与人的感受，表达需求时需要少一点猜测。'];
const coupletChangeNotes=['变化发生时，你习惯先恢复秩序；这次只保住主线，其余允许重排。','你会先观察再调整，记得给观察设一个结束信号。','你擅长顺势转弯，只需在转弯前再次确认目的地。'];
const coupletGoalActions=['先盘点时间、金钱和承诺，只保留能够长期积累的投入。','选定一个最值得推进的目标，把它拆成可以连续完成的阶段。','固定一段不被打扰的恢复时间，同时减少没有必要的回应。','把期待和边界各说清一件，再用一段时间观察行动是否一致。','先说出最重要的一句话，让表达有重点，也给对方回应的空间。','围绕一个问题完成一次输出，用作品、笔记或实践检验理解。'];
const coupletBandLabels={surge:'得势',flow:'顺势',build:'蓄势',turn:'转势',rest:'守势'};
const coupletPaceLabels=['审慎观望','稳步试探','乘势行动'];
const coupletBandMeanings={surge:'命盘方向、性格状态与目标三者相互加力，眼下有条件主动争取。',flow:'命盘的平衡方向与目标基本同路，顺着已有优势推进会比较省力。',build:'方向没有冲突，但力量尚未完全汇合，需要靠持续行动把条件养成。',turn:'目标并非不可实现，只是现有习惯与所需力量有落差，应先调整方法。',rest:'此刻更需要保存心力、整理基础，强行推进反而容易消耗已有积累。'};

function generateCouplet(chart,a){
  const goal=a[8],profile=goalProfiles[goal],pack=coupletLibrary[goal];
  let score=0;
  if(profile.elements[0]===chart.useGod)score+=3;else if(profile.elements.includes(chart.useGod))score+=1;
  if(profile.elements[0]===chart.joyGod)score+=2;else if(profile.elements.includes(chart.joyGod))score+=1;
  if(profile.elements[0]===chart.dayElement)score+=1;
  if(a[7]===[1,2,0,1,2,0][goal])score+=1;
  if(a[5]===1||(a[5]===2&&[1,4].includes(goal))||(a[5]===0&&[2,3].includes(goal)))score+=1;
  const band=score>=7?'surge':score>=5?'flow':score>=3?'build':score>=1?'turn':'rest';
  const dayImage=pack.images[chart.dayElement],useImage=pack.images[chart.useGod];
  const lines=[`${dayImage}${pack.inner[a[1]]}`,`${useImage}${pack.outcome[band]}`];
  return{
    lines,
    guidance:[
      {label:'两句合看',text:`“${lines[0]}”以${dayImage}写你的${coupletPaceLabels[a[1]]}；“${lines[1]}”再用${useImage}承接同一组${pack.motif}意象，回答这份性格如何走向「${goals[goal].name}」。${coupletInnerNotes[a[1]]}`},
      {label:'命盘走势',text:`你是${chart.dayStem}${chart.dayElement}日主，以${chart.useGod}为用、${chart.joyGod}为喜，本签落在“${coupletBandLabels[band]}”。${coupletBandMeanings[band]}${pack.reading[band]}`},
      {label:'此刻可做',text:`${coupletEnergyNotes[a[0]]}${coupletDecisionNotes[a[2]]}${coupletChangeNotes[a[3]]}${coupletGoalActions[goal]}`}
    ],
    band
  };
}
