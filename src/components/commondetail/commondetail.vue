<template>
  <div id="commondetail">
    <div class="container">
      <div class="titleBlock" v-if="titleDatas[detailname]">
        <img src="./../../assets/images/recruit/clearbg.png" class="mobileshow mobilebg">
        <div class="blockName">{{titleDatas[detailname]['cn']}}<br><span>{{titleDatas[detailname]['en']}}</span></div>
      </div>
      <div class="searchBar pcshow" v-if="detailname == 'news'">
        <label>
          <input class="serchInput" v-model="searchContent">
          <div class="icon-search" v-if="searchContent == ''">文章搜索</div>
        </label>
      </div>
      <div class="wrapper">
        <div class="row">
          <div class="col-xs-12 col-sm-9 col-sm-push-3 newsright">
            <div class="detailContent" v-if="detailname == 'news'">
              <div class="newsDate">2018年11月22日</div>
              <div class="newsTitle">汕头市潮阳区委常委李绪明调研白求恩潮阳医养项目</div>
              <div class="newsDetail">
                <p>2018年10月17日上午，汕头市潮阳区委常委李绪明带队赴慈元堂旗下白求恩潮阳医养项目调研，区政府办公室、区卫计局、区国土局、区住建局、区公安局、区供电局、棉北街道等相关部门的领导陪同调研。</p>
                <img src="./../../assets/images/news/news002.jpg">
                <p>李绪明常委一行视察了白求恩潮阳医院（一期）的施工现场，随后在临建园区会议室召开调研会议，听取慈元堂吴菂副总裁对白求恩潮阳医养项目总体规划的汇报，包括白求恩潮阳医院的规划建设内容及工程建设进度。会上，吴菂副总裁向区领导反映了项目开展进程中亟待解决的问题，希望区领导能够加强协调和支持力度，共同推进项目及周边配套设施的顺利建设。</p>
                <p>会后，吴菂副总裁接受潮阳电视台采访，向媒体介绍白求恩潮阳医养项目的建设情况：白求恩医院作为整个医养项目的核心，项目建设节节推进，目前工程桩建设已全部完成，门诊楼和医技楼有望明年春节前封底。</p>
              </div>
            </div>
            <div class="detailContent" v-if="detailname == 'summary'">
              <div class="newsDetail" v-if="detailid == 'jj'">
                <div class="newsTitle">医院简介</div>
                <p>白求恩潮阳医院由广东慈元堂健康产业发展有限公司（以下简称“慈元堂”）全资子公司——汕头市白求恩医疗养老管理有限公司投资建设，位于广东省汕头市潮阳区棉北街道宝峰岩下。本项目规划总用地面积约4.2万平方米,总建筑面积约10.28万平方米，投资10亿。白求恩潮阳医院项目被列为广东省和汕头市重点项目工程，已于2017年顺利动工，预计2019年建成，2020年上半年试业。</p>
                <p>白求恩潮阳医院规划定位为“精品综合医院”，按照三级综合医院基本标准设计，前期先建设600张床位（含ICU、产房、牙床、病床等），其中包括百级手术室、病理科、消毒供应中心、医学影像科等。医院建成后将与我司二期相继建成的专科诊疗/专科医院（如神经科诊疗中心、康复医学中心、胃肠诊疗中心、骨科创伤中心、心血管病诊疗中心等）构成现代化“医院城”。</p>
                <p>白求恩潮阳医院地处汕头市潮阳区，距离汕头市区十五分钟车程、潮阳城区约五分钟车程，毗邻324国道、汕湛高速出口，辐射整个粤东地区及福建部分省市，交通便利，辐射范围广。医院因地制宜，把潮汕文化作为核心融入建筑和景观设计之中，结合现有地形地貌，以山水宜居、颐养天年为主题，能满足医疗、康复养生各方面需求。从精神文化领域结合各种宗教文化对病患体现人文主义关怀，体现精神与文化内涵，是中华民族传统文化与潮汕传统文化的完美结合。</p>
                <p>未来白求恩潮阳医院将成为“医院城”的中心，为各基层医疗卫生机构提供必要的技术支持，并以此弥补专科诊疗中心单独建设所存在的学科技术不足的问题。各专科诊疗中心则以“卫星医院”方式设置在白求恩潮阳医院的周边，各自独立成型、独立运营。所有大型医疗设备将设置在“精品综合医院”，专科性诊疗设备可根据不同需求配置在各中心。“医院城”整体运营管理理念将按照“综合医院与各中心在行政运营管理系统上相对独立，医疗业务流程和关系保持在同一系统中”进行设计安排，最终形成一个国内一流、国际知名的医疗机构群，为养生养老社区提供强有力的医疗、保健、健康一体化的支撑，实现为汕头市乃至粤东地区、全国各地的患者提供优质的医疗健康服务的终极目标。</p>
                <p>目前，慈元堂已与广州中医药大学达成战略合作关系，将在中医药科技创新、人才培养、医疗服务、康养产业、文化建设等领域开展深入合作。白求恩潮阳医院已与北京清华长庚医院、日本龟田综合医院、台湾高雄荣民总医院、吉林大学附属白求恩第一医院、白求恩第二医院、吉林大学中日联谊医院、吉林大学口腔医院、南方医科大学南方医院、广东省人民医院、中山大学附属第六医院、汕头市中心医院取得合作意向，并依托以上医院专家库与中国人口老龄化与经济社会发展研究中心等国内外专家资源和平台，战略统筹管理本项目的日常运营与发展规划。</p>
                <p>白求恩潮阳医院是慈元堂医养结合、健康管理的重点龙头项目。医院建成后，将秉承“慈心仁术、惠民归元、余庆于堂”的宗旨，以“自强不息、至善共存、健康中国”为价值导向，围绕“养老园区”和社会公众健康管理及高水平医疗保障的规划目标不断完善学科建设，为促进潮阳区乃至汕头市医疗与养老机构的补充与发展起到良好的社会影响和示范效应。</p>
              </div>
              <div class="newsDetail" v-if="detailid == 'sjll'">
                <div class="newsTitle">医院设计理念</div>
                <p>一、承接慈元堂企业文化</p>
                <p>1.秉承“笃学感恩”的核心理念。白求恩潮阳医院注重对前沿及未来医疗健康服务趋势、技术及理念的研究和学习，推动产学研同步发展，依托集团全方位全周期健康服务链条，以感恩社会、回馈社会为指向，建立先进、全面、接地气的医疗健康服务体系，为民众提供平民化的医疗健康服务。<br>2.回归“慈心仁术”的救治宗旨。白求恩潮阳医院以“慈爱之心”创立，坚持以“病人为中心”，以病人的利益为优先；坚持通过高效先进的诊疗手段和富有人文关怀的全程服务，回归悬壶济世的本质，为病患提供高质量、低花费的医疗服务。<br>3.坚持“惠民归元”的办医初衷。白求恩潮阳医院期望通过开展医疗健康服务，回馈社会、造福民众，助力社会与民众保有身心活力，塑造健壮的心志与体魄。<br>4.寄托“余庆于堂”的幸福愿景。白求恩潮阳医院期望行救患扶伤“善举”，集众人之力，与社会共享健康和幸福，让民众、社会乃至国家都能惠及善举的功德。</p>
                <p>二、白求恩潮阳医院的定位</p>
                <p>（一）非营利性民办医疗健康服务机构。<br>（二）根据“治未病-调慢病-治已病”的总体思路，通过营造健康、有温度、接地气的医疗健康服务，接入“医”“养”“药”“游”等健康产业链条，从长远规划、建设综合型医疗服务机构。<br>（三）办医理念：人本医疗 病患优先 照护健康<br>（四）宗       旨：慈心仁术 惠民归元 余庆于堂<br>（五）经营方针：节约 回馈 专业 永续</p>
                <p>三、做法</p>
                <p>（一）服务质量方面</p>
                <p>1.对标国际医疗质量相关认证标准，以国际先进医疗质量评估体系（IQIP）、JCI医疗服务标准等推动医疗体系的建立与完善。<br>2.建设特色专科，满足地区民众的高发病症诊治需求，体现地域文化特色。<br>3.建立服务评价机制。通过开展民众调查和病患回访调查，改善服务流程和质量，培养民众的信任感。</p>
                <p>（二）服务措施方面：</p>
                <p>1.“以病人为中心”：医院服务的对象是“病人”，而不是“病”，即要以整体的“人”的观点来提供医疗服务，开展对病人的“照护”。因此在配备先进的医疗专家阵容和诊疗设备外，在服务模式上可规划：</p>
                <p>（1）医疗团队整合化，建立专科医疗联合团队。<br>（2）医护流程标准化，为每个医疗联合团队建立详细的诊疗指南和医护标准操作规范。<br>（3）空间布局整合化，让患者就近完成就诊；对于部分专科通过集中和分区的设置，方便会诊及资源共享。<br>（4）服务团队整合化，除医护人员外，从心理治疗、营养治疗、临床药剂等方面全方位介入病人的诊疗与关怀。<br>（5）诊疗服务持续化，从病人首诊到诊断期、治疗期再到随访期，实行终身追踪，持续关怀。</p>
                <p>2.“以主治医师为中心”：集中关键工作，协同配套工作。通过为每一位主治医师建立全方位的医疗照护团队，对医疗照护及相关工作进行合理的分工界定，把其中最需要和或仅能由主治医师完成的关键工作交给医师亲自执行，由其他协同人员完成其他配套支持工作。</p>
                <p>（三）医院管理方面</p>
                <p>1.设立扶助基金，帮助贫困病人<br>可在医院内部设立扶助基金，对无力支付医药费用的贫困病人，可通过评估其家庭积极状况，从基金中给予适度补助。<br>2.改善医护人员薪酬，严禁收受红包行为<br>根据医师技能、奉献与劳务付出，提升医师薪资，保障合理收入。对违规收受红包的医护人员，一律开除，从严管理。<br>3.合理评估诊疗方案，杜绝过度诊疗</p>
                <p>根据患者的实际情况确定合理的诊疗方式方案，在保证诊治效果的基础上，规避不必要的检查、手术和药物治疗，减轻患者的经济与心理负担，提升患者对于医师和医院的信任感，实现患者与医院、医师之间的良性循环。</p>
              </div>
            </div>
            <div class="detailContent" v-if="detailname == 'recruit'">
              <div class="newsDetail" v-if="detailid == 'hs'">
                <div class="newsTitle">白求恩潮阳医院护师招聘启事</div>
                  <p>招聘医护人员首先是要求自愿遵循本医院的办院理念的志同道合者。医院以“高薪养廉”的思路对各类人员进行招聘，保证医护人员的待遇方案要优于本地情况。绩效考核不以经济指标为准，而是以病人的长期返回就诊、诊疗质量及病人的满意度为指标。</p>
                  <p>一、招收对象</p>
                  <p>优先考虑具备以下条件的：<br>全日制大专及以上，持有职业护士资格证，要求护理师或以上职称，年龄在35周岁以下，有三甲综合医院工作经历；<br>具备相应临床学科专业护理技术；<br>具备良好沟通能力及行政管理能力；<br>具备良好的团队合作精神。</p>
                  <p>二、报名方式</p>
                  <p>1．网上报名。有意者请下载并填写简历模板,通过电子邮件以附件形式投递至我院护理部邮箱具体邮箱 邮件主题及附件名称请注明“姓名/学历/年龄/培训护士”。<br>2．资格审查。医院对报名人员进行资格审查，合格者将通知面试。未能进入面试者，个人简历资料恕不退还。<br>联系电话：具体电话
                  <p>
                  <p>三、员工福利</p>
                  <p>为解决医务人员日常生活需求，白求恩潮阳医院规划建设生活服务区，配套商业、餐饮、娱乐、运动等生活服务项目，保障医务人员工作与生活需求，提升广大医务人员幸福指数与归属感，推动全身心投入医疗工作，以服务广大病患。配套细则如下：</p>
                  <p>（一）住房配套<br>对于入职医务人员，医院根据不同的个人情况安排配套宿舍，含单人房、多人宿舍及家庭房。<br>（二）生活配套<br> 在生活区内，配套涵盖商业街、美食街、健身中心及电影院等生活文娱活动，让一线医务人员更好的调节身心，放松心情。<br>（三）教育配套<br>对于已育医务人员，生活区配有家属子女托管中心、幼儿园，并帮助员工解决升学问题，保证下一代接受良好的教育。</p>
              </div>
              <div class="newsDetail" v-if="detailid == 'ys'">
                <div class="newsTitle">白求恩潮阳医院护师招聘启事</div>
                  <p>招聘医护人员首先是要求自愿遵循本医院的办院理念的志同道合者。医院以“高薪养廉”的思路对各类人员进行招聘，保证医护人员的待遇方案要优于本地情况。绩效考核不以经济指标为准，而是以病人的长期返回就诊、诊疗质量及病人的满意度为指标。</p>
                  <p>一、招收对象</p>
                  <p>优先考虑具备以下条件的：<br>全日制本科及以上，持有执业医师资格证，要求副高或以上职称，年龄在45周岁以下，有三甲综合性医院工作经历；<br>医疗专业技术熟练；<br>具备良好沟通能力及行政管理能力；<br>具备良好的团队合作精神。</p>
                  <p>二、报名方式</p>
                  <p>1．网上报名。有意者请下载并填写简历模板,通过电子邮件以附件形式投递至我院护理部邮箱具体邮箱 邮件主题及附件名称请注明“姓名/学历/年龄/培训护士”。<br>2．资格审查。医院对报名人员进行资格审查，合格者将通知面试。未能进入面试者，个人简历资料恕不退还。<br>联系电话：具体电话
                  <p>
                  <p>三、员工福利</p>
                  <p>为解决医务人员日常生活需求，白求恩潮阳医院规划建设生活服务区，配套商业、餐饮、娱乐、运动等生活服务项目，保障医务人员工作与生活需求，提升广大医务人员幸福指数与归属感，推动全身心投入医疗工作，以服务广大病患。配套细则如下：</p>
                  <p>（一）住房配套<br>对于入职医务人员，医院根据不同的个人情况安排配套宿舍，含单人房、多人宿舍及家庭房。<br>（二）生活配套<br> 在生活区内，配套涵盖商业街、美食街、健身中心及电影院等生活文娱活动，让一线医务人员更好的调节身心，放松心情。<br>（三）教育配套<br>对于已育医务人员，生活区配有家属子女托管中心、幼儿园，并帮助员工解决升学问题，保证下一代接受良好的教育。</p>
              </div>
              <div class="newsDetail" v-if="detailid == 'yj'">
                <div class="newsTitle">白求恩潮阳医技科室专业人员招聘启事</div>
                  <p>招聘医护人员首先是要求自愿遵循本医院的办院理念的志同道合者。医院以“高薪养廉”的思路对各类人员进行招聘，保证医护人员的待遇方案要优于本地情况。绩效考核不以经济指标为准，而是以病人的长期返回就诊、诊疗质量及病人的满意度为指标。</p>
                  <p>一、招收对象</p>
                  <p>优先考虑具备以下条件的：<br>全日制大专及以上，持有相关专业执业资格证，要求中级及以上职称，年龄在45周岁以下，有三甲综合医院工作经历；<br>具备相应学科专业技术；<br>具备良好沟通能力及行政管理能力；<br>具备良好的团队合作精神。</p>
                  <p>二、报名方式</p>
                  <p>1．网上报名。有意者请下载并填写简历模板,通过电子邮件以附件形式投递至我院护理部邮箱具体邮箱 邮件主题及附件名称请注明“姓名/学历/年龄/培训护士”。<br>2．资格审查。医院对报名人员进行资格审查，合格者将通知面试。未能进入面试者，个人简历资料恕不退还。<br>联系电话：具体电话
                  <p>
                  <p>三、员工福利</p>
                  <p>为解决医务人员日常生活需求，白求恩潮阳医院规划建设生活服务区，配套商业、餐饮、娱乐、运动等生活服务项目，保障医务人员工作与生活需求，提升广大医务人员幸福指数与归属感，推动全身心投入医疗工作，以服务广大病患。配套细则如下：</p>
                  <p>（一）住房配套<br>对于入职医务人员，医院根据不同的个人情况安排配套宿舍，含单人房、多人宿舍及家庭房。<br>（二）生活配套<br> 在生活区内，配套涵盖商业街、美食街、健身中心及电影院等生活文娱活动，让一线医务人员更好的调节身心，放松心情。<br>（三）教育配套<br>对于已育医务人员，生活区配有家属子女托管中心、幼儿园，并帮助员工解决升学问题，保证下一代接受良好的教育。</p>
              </div>
            </div>
            <div class="detailContent" v-if="detailname == 'contact'">
              <div class="newsDetail">
                <p>地址：广东省汕头市潮阳区棉北街道棉田居委宝峰岩下白求恩潮阳医院临建园区</p>
                <p>电话：0754-82132339</p>
              </div>
            </div>
            <div class="detailContent" v-if="detailname == 'notice'">
              <div class="newsDetail" v-if="detailid == 'dsj'">
                <div class="newsTitle">大事记</div>
                <p>白求恩潮阳医院由广东慈元堂健康产业发展有限公司（以下简称“慈元堂”）全资子公司——汕头市白求恩医疗养老管理有限公司投资建设，位于广东省汕头市潮阳区棉北街道宝峰岩下。本项目规划总用地面积约4.2万平方米,总建筑面积约10.28万平方米，投资10亿。白求恩潮阳医院项目被列为广东省和汕头市重点项目工程，已于2017年顺利动工，预计2019年建成，2020年上半年试业。</p>
                <p>白求恩潮阳医院规划定位为“精品综合医院”，按照三级综合医院基本标准设计，前期先建设600张床位（含ICU、产房、牙床、病床等），其中包括百级手术室、病理科、消毒供应中心、医学影像科等。医院建成后将与我司二期相继建成的专科诊疗/专科医院（如神经科诊疗中心、康复医学中心、胃肠诊疗中心、骨科创伤中心、心血管病诊疗中心等）构成现代化“医院城”。</p>
                <p>白求恩潮阳医院地处汕头市潮阳区，距离汕头市区十五分钟车程、潮阳城区约五分钟车程，毗邻324国道、汕湛高速出口，辐射整个粤东地区及福建部分省市，交通便利，辐射范围广。医院因地制宜，把潮汕文化作为核心融入建筑和景观设计之中，结合现有地形地貌，以山水宜居、颐养天年为主题，能满足医疗、康复养生各方面需求。从精神文化领域结合各种宗教文化对病患体现人文主义关怀，体现精神与文化内涵，是中华民族传统文化与潮汕传统文化的完美结合。</p>
                <p>未来白求恩潮阳医院将成为“医院城”的中心，为各基层医疗卫生机构提供必要的技术支持，并以此弥补专科诊疗中心单独建设所存在的学科技术不足的问题。各专科诊疗中心则以“卫星医院”方式设置在白求恩潮阳医院的周边，各自独立成型、独立运营。所有大型医疗设备将设置在“精品综合医院”，专科性诊疗设备可根据不同需求配置在各中心。“医院城”整体运营管理理念将按照“综合医院与各中心在行政运营管理系统上相对独立，医疗业务流程和关系保持在同一系统中”进行设计安排，最终形成一个国内一流、国际知名的医疗机构群，为养生养老社区提供强有力的医疗、保健、健康一体化的支撑，实现为汕头市乃至粤东地区、全国各地的患者提供优质的医疗健康服务的终极目标。</p>
                <p>目前，慈元堂已与广州中医药大学达成战略合作关系，将在中医药科技创新、人才培养、医疗服务、康养产业、文化建设等领域开展深入合作。白求恩潮阳医院已与北京清华长庚医院、日本龟田综合医院、台湾高雄荣民总医院、吉林大学附属白求恩第一医院、白求恩第二医院、吉林大学中日联谊医院、吉林大学口腔医院、南方医科大学南方医院、广东省人民医院、中山大学附属第六医院、汕头市中心医院取得合作意向，并依托以上医院专家库与中国人口老龄化与经济社会发展研究中心等国内外专家资源和平台，战略统筹管理本项目的日常运营与发展规划。</p>
                <p>白求恩潮阳医院是慈元堂医养结合、健康管理的重点龙头项目。医院建成后，将秉承“慈心仁术、惠民归元、余庆于堂”的宗旨，以“自强不息、至善共存、健康中国”为价值导向，围绕“养老园区”和社会公众健康管理及高水平医疗保障的规划目标不断完善学科建设，为促进潮阳区乃至汕头市医疗与养老机构的补充与发展起到良好的社会影响和示范效应。</p>
              </div>
              <div class="newsDetail" v-if="detailid == 'jz'">
                <div class="newsTitle">项目进展</div>
                <p>一、承接慈元堂企业文化</p>
                <p>1.秉承“笃学感恩”的核心理念。白求恩潮阳医院注重对前沿及未来医疗健康服务趋势、技术及理念的研究和学习，推动产学研同步发展，依托集团全方位全周期健康服务链条，以感恩社会、回馈社会为指向，建立先进、全面、接地气的医疗健康服务体系，为民众提供平民化的医疗健康服务。<br>2.回归“慈心仁术”的救治宗旨。白求恩潮阳医院以“慈爱之心”创立，坚持以“病人为中心”，以病人的利益为优先；坚持通过高效先进的诊疗手段和富有人文关怀的全程服务，回归悬壶济世的本质，为病患提供高质量、低花费的医疗服务。<br>3.坚持“惠民归元”的办医初衷。白求恩潮阳医院期望通过开展医疗健康服务，回馈社会、造福民众，助力社会与民众保有身心活力，塑造健壮的心志与体魄。<br>4.寄托“余庆于堂”的幸福愿景。白求恩潮阳医院期望行救患扶伤“善举”，集众人之力，与社会共享健康和幸福，让民众、社会乃至国家都能惠及善举的功德。</p>
                <p>二、白求恩潮阳医院的定位</p>
                <p>（一）非营利性民办医疗健康服务机构。<br>（二）根据“治未病-调慢病-治已病”的总体思路，通过营造健康、有温度、接地气的医疗健康服务，接入“医”“养”“药”“游”等健康产业链条，从长远规划、建设综合型医疗服务机构。<br>（三）办医理念：人本医疗 病患优先 照护健康<br>（四）宗       旨：慈心仁术 惠民归元 余庆于堂<br>（五）经营方针：节约 回馈 专业 永续</p>
                <p>三、做法</p>
                <p>（一）服务质量方面</p>
                <p>1.对标国际医疗质量相关认证标准，以国际先进医疗质量评估体系（IQIP）、JCI医疗服务标准等推动医疗体系的建立与完善。<br>2.建设特色专科，满足地区民众的高发病症诊治需求，体现地域文化特色。<br>3.建立服务评价机制。通过开展民众调查和病患回访调查，改善服务流程和质量，培养民众的信任感。</p>
                <p>（二）服务措施方面：</p>
                <p>1.“以病人为中心”：医院服务的对象是“病人”，而不是“病”，即要以整体的“人”的观点来提供医疗服务，开展对病人的“照护”。因此在配备先进的医疗专家阵容和诊疗设备外，在服务模式上可规划：</p>
                <p>（1）医疗团队整合化，建立专科医疗联合团队。<br>（2）医护流程标准化，为每个医疗联合团队建立详细的诊疗指南和医护标准操作规范。<br>（3）空间布局整合化，让患者就近完成就诊；对于部分专科通过集中和分区的设置，方便会诊及资源共享。<br>（4）服务团队整合化，除医护人员外，从心理治疗、营养治疗、临床药剂等方面全方位介入病人的诊疗与关怀。<br>（5）诊疗服务持续化，从病人首诊到诊断期、治疗期再到随访期，实行终身追踪，持续关怀。</p>
                <p>2.“以主治医师为中心”：集中关键工作，协同配套工作。通过为每一位主治医师建立全方位的医疗照护团队，对医疗照护及相关工作进行合理的分工界定，把其中最需要和或仅能由主治医师完成的关键工作交给医师亲自执行，由其他协同人员完成其他配套支持工作。</p>
                <p>（三）医院管理方面</p>
                <p>1.设立扶助基金，帮助贫困病人<br>可在医院内部设立扶助基金，对无力支付医药费用的贫困病人，可通过评估其家庭积极状况，从基金中给予适度补助。<br>2.改善医护人员薪酬，严禁收受红包行为<br>根据医师技能、奉献与劳务付出，提升医师薪资，保障合理收入。对违规收受红包的医护人员，一律开除，从严管理。<br>3.合理评估诊疗方案，杜绝过度诊疗</p>
                <p>根据患者的实际情况确定合理的诊疗方式方案，在保证诊治效果的基础上，规避不必要的检查、手术和药物治疗，减轻患者的经济与心理负担，提升患者对于医师和医院的信任感，实现患者与医院、医师之间的良性循环。</p>
              </div>
            </div>
            <div class="detailContent" v-if="detailname == 'enterprises'">
              <div class="newsDetail" v-if="detailid == 'gl'">
                <div class="newsTitle">关联企业</div>
              </div>
              <div class="newsDetail" v-if="detailid == 'dy'">
                <div class="newsTitle">对外合作</div>
              </div>
            </div>
            <div class="nearbynews row" v-if="detailname == 'news'">
              <div class="col-xs-12 col-sm-6">
                <a href="javascript:;">上一个<br><span>白求恩潮阳医养项目门诊楼和医技楼有望明年春节前封顶</span></a>
              </div>
              <div class="col-xs-12 col-sm-6">
                <a href="javascript:;">下一个<br><span>【南方网】白求恩潮阳医院捐赠300箱药品支援潮阳灾区</span></a>
              </div>
            </div>
            <div class="pcshow" v-if="detailname == 'news'">
              <related></related>
            </div>
          </div>
          <div class="col-xs-12 col-sm-3 col-sm-pull-9 newsleft">
            <commonnav :datas="typedatas[detailname]" :nname="detailname"></commonnav>
            <newsblock></newsblock>
            <contact></contact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import commonnav from './../littleBlocks/commonnav'
import newsblock from './../littleBlocks/newsCenter'
import contact from './../littleBlocks/contact'
import related from './../littleBlocks/related'
import typesData from './../../assets/datas/newstypes.json'
import newsData from './../../assets/datas/news.json'
export default {
  name: 'commondetail',
  data () {
    return {
      searchContent: '',
      titleDatas: {
        'news': {
          'cn': '新闻中心',
          'en': 'newsRoom'
        },
        'summary': {
          'cn': '医院概况',
          'en': 'Hospital Overview'
        },
        'notice': {
          'cn': '医院公告',
          'en': 'Hospital Notice'
        },
        'enterprises': {
          'cn': '合作伙伴',
          'en': 'Associated Enterprises'
        },
        'recruit': {
          'cn': '招纳贤才',
          'en': 'Recruitment'
        },
        'contact': {
          'cn': '联系我们',
          'en': 'Contact Us'
        }
      },
      typedatas: typesData,
      listdatas: {
        'news': newsData
      },
      detailname: '',
      detailid: ''
    }
  },
  methods: {
    getPath () {
      this.detailname = this.$route.query.name
      this.detailid = this.$route.query.id
    }
  },
  components: {
    'commonnav': commonnav,
    'newsblock': newsblock,
    'contact': contact,
    'related': related
  },
  created () {
    this.detailname = this.$route.query.name
    this.detailid = this.$route.query.id
  },
  watch: {
    '$route': 'getPath'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#commondetail {
  background-image: url(./../../assets/images/recruit/bg.png);background-size: 100%;padding: 4rem 0;color: #000;
}
#commondetail .titleBlock {position: relative;}
#commondetail .searchBar {margin-bottom: 2rem;}
#commondetail label {display: block;position: relative;font-weight: normal;}
#commondetail .serchInput {display: block;width: 100%;padding: 0 2rem;height: 3rem;font-size: 1.2rem;border-radius: 1.5rem;text-align: center;}
#commondetail .icon-search {position: absolute;font-size: 1.2rem;top: 50%;left: 50%;transform: translate(-50%,-50%);}
#commondetail .serchInput:focus+.icon-search {display: none;}
#commondetail .mobilebg {display: block;width: 100%;}
#commondetail .blockName {font-size: 2rem;line-height: 100%;padding: 3rem;}
#commondetail .blockName span {font-size: 1.2rem;color: #444;}
#commondetail .newsright {background-color: #fff;margin-bottom: 1rem;padding-bottom: 4rem;padding-top: 1rem;}
#commondetail a{text-decoration: none;}
#commondetail .nearbynews {padding: 0 2rem;}
#commondetail .nearbynews div {padding: 1rem 0;}
#commondetail .nearbynews a {color: #000;}
#commondetail .nearbynews a span {color: #0066cc;display: block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
#commondetail .detailContent {padding: 2rem 1rem 2rem;}
#commondetail .detailContent .newsDate {font-size: 1.1rem;}
#commondetail .detailContent .newsTitle {font-size: 1.5rem;font-weight: bold;margin-bottom: 1rem;}
#commondetail .detailContent .newsDetail p {text-indent: 2rem;font-size: 1rem;text-align: left;padding: 1rem 0;}
#commondetail .detailContent .newsDetail img {width: 100%;display: block;padding: 1rem 0;}
@media screen and (max-width:767px) {
  #commondetail .container {padding: 0 !important;}
  #commondetail {padding: 0;}
  #commondetail .blockName {position: absolute;left:50%;top: 50%;transform: translate(-50%,-50%);}
  #commondetail .row {margin: 0 !important;}
  #commondetail *[class|=col] {padding-left: 0 !important;padding-right: 0 !important;}
  #commondetail .newsleft {padding: 0 1rem !important;}
  #commondetail .newsright {padding-bottom: 2rem !important;}
}
</style>
