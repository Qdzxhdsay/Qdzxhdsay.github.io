let questHeadlineTxt = document.getElementById("main-quest-headline");
let questTextTxt = document.getElementById("main-quest-text");
let questVariantOneTxt = document.getElementById("variant-one");
let questVariantTwoTxt = document.getElementById("variant-two");

let questHeadline = document.getElementById("main-quest-headline").textContent;

let buttonSword = document.getElementById("sword-button");
let buttonToxin = document.getElementById("toxin-button");
let buttonReboot = document.getElementById("reboot-button");

let swordScore = 0;
let toxinScore = 0;


buttonReboot.onclick = function () {
    location.reload();
};


//toxinbutton

buttonToxin.onclick = function () {
   if(toxinScore===0&&swordScore===0){
       questHeadlineTxt.textContent="Обитатели Hook'a";
       questTextTxt.innerText=
           'Антёха - стажер, токсино' +
           'рожденный , помогу вам выйти в ноль, лидер партии "Есть один нюанс".\n\n' +
           'Жека - босс , большой папочка хука, повелитель снеков и вообще какого хуя я у тебя на первом месте в рейтинге токсичности?\n\n' +
           'Андрей - граммарнизи (aga eto oshipka specialno ahahahaha), любитель ломать программы и судьбы, почитал бы С#, психологию и много чего еще если бы не нужно было их знать.\n\n'+
           'Паша - просто хороший человек и разработчик - отличительной особенностью является пониженная токсичность и понимание проблем стажеров(чаще всего завозит пощадыыыыыы).\n\n'+
           'Кирилл - о, этот тип пропитан токсинами, любит харасит стажеров, общаюсь с ним в биохазард защите. Иногда можно узнать что-то полезное.\n\n'+
           'Юля - единственная тян на этой сосичной вечеринке, отличитильной особенностью является латентная токсиность и агрессия, особенно любит добивать стажеров, получает особое удовольствие от масссовых харасментов кого-либо.';
       questVariantOneTxt.innerText="- История о нападении на Пашу , твой выбор меч";
       questVariantTwoTxt.innerText="- История о вписке у Антёхи, скорее жми на токсин";

       toxinScore+=1.5;

       console.log("toxinScore:" + toxinScore);
       console.log("swordScore:" + swordScore);
   }

   else if(swordScore===1.5 && toxinScore===0||swordScore===1.5 && toxinScore===1.5){
       questHeadlineTxt.textContent="Битва за переменные";
       questTextTxt.innerText='Очередной день в проектном офисе. Антёха пришел и как всегда спрашивал какую-то хуйню, все как обычно фейспалмили , рофлили , выделяли токсины. И тут в воздухе раздался голос Андрея,элита граммарнази произнес:«ну что Антеха, в чем разница между объявлением переменной и присвоением значения переменной».\n' +
           'Антёха гордо ответил ну ээээ , меее , крч , объявление переменной это когда мы пишем var/let/ затем имя переменной и потом ее значение, а присвоение это когда мы берем уже существующую переменную и присваиваем ей новое значение.\n' +
           'Ммм, ну дак и хули ты тупишь - иди делай - Сказал Андрей.\n' +
           'Антёха молча пошел доделывать свой говнокод, но на душе было приятно, битва не была проиграна.\n';
       questVariantOneTxt.innerText="- Если хочешь перейти к хитрому вопросу от жеки жми на меч.";
       questVariantTwoTxt.innerText="- Если хочешь плюнуть токсином , ты знаешь что делать";

       toxinScore+=1;

       console.log("toxinScore:" + toxinScore);
       console.log("swordScore:" + swordScore);
   }

   else if(toxinScore===1.5&&swordScore===0){
       questHeadlineTxt.textContent="Туса у Антёхи";
       questTextTxt.innerText='Середина недели-среда, упорно решили затусить. Поехали за продуктами . Жека с Маликой очень хотели готовить пиццу, Антёха сразу сказал что идея хуйня и надо взять что-нибудь готовое.';
       questVariantOneTxt.innerText="- Решили готовить сами, жми токсин.";
       questVariantTwoTxt.innerText="- Купили готовый хавчег, твой выбор меч.";

       toxinScore+=1;

       console.log("toxinScore:" + toxinScore);
       console.log("swordScore:" + swordScore);
   }

   else if(swordScore===0&&toxinScore===2.5){
       questHeadlineTxt.textContent="YOU DIED";
       questTextTxt.innerText='Походу кто-то опять тусил с настоящими друзьями...';
       questVariantOneTxt.innerText="";
       questVariantTwoTxt.innerText="";

       buttonSword.classList.add("hide");
       buttonToxin.classList.add("hide");
       buttonReboot.classList.add("visible");

       console.log("toxinScore:" + toxinScore);
       console.log("swordScore:" + swordScore);
   }

   else if(swordScore===1&&toxinScore===2.5){
       questHeadlineTxt.textContent="Туса у Антёхи";
       questTextTxt.innerText='Соре, но тут при любом раскладе Антёха терпила, поэтому туса переходит в более тихий формат разговоров. Но зато ты выбрал токсин.';
       questVariantOneTxt.innerText="";
       questVariantTwoTxt.innerText="";

       toxinScore+=1;

       console.log("toxinScore:" + toxinScore);
       console.log("swordScore:" + swordScore);
   }
};


//swordbutton

buttonSword.onclick = function () {
    if(swordScore===0&&toxinScore===0||swordScore===0&&toxinScore===1.5){
        questHeadlineTxt.textContent="Коварный Юлиус";
        questTextTxt.innerText='Был самый обычный зимний день, мы двинули в макдак - да, да там где бургеры как подошва, жрать невозможно, так вот нажрались картону по акции 5 за 150р, топаем в офис , кто-то травит Антёху, кто-то , что-то рассказывает , всем весело , и тут случилось невообразимое...\n' +
            'Юля устроила диверсию и швырнула в Пашу...\n';
        questVariantOneTxt.innerText="- Хитрая юля швырнула пакет, ставь меч если думаешь так.";
        questVariantTwoTxt.innerText="- Ковариус швырнула снежок, твой выбор - токсин";

        swordScore+=1.5;

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }

    else if(swordScore===1.5&&toxinScore===0||swordScore===1.5&&toxinScore===1.5){
        questHeadlineTxt.textContent="WASTED";
        questTextTxt.innerText='Хуевенько вы знаете лор, атдихайте...';
        questVariantOneTxt.innerText="";
        questVariantTwoTxt.innerText="";

        buttonSword.classList.add("hide");
        buttonToxin.classList.add("hide");
        buttonReboot.classList.add("visible");

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }

    else if(swordScore===0&&toxinScore===2.5){
        questHeadlineTxt.textContent="Туса у Антёхи";
        questTextTxt.innerText='Итак прибегнув к совету Антёхи затарили пиццы по акции , купили текилы и отправились на квартиру. По прибытию начали расползаться, нарезать пиццу разливать алкоголь, по мере продвижения посиделок, все раздобрели , покушали и начали дэнсить. Но тут в разгар веселья в дверь позвонил рейдбосс . Открыв дверь сразу словили дефолтный ушат говна , кукареканья и причитаний.';
        questVariantOneTxt.innerText="- Жми меч если хочешь уебать рейдбоса с ноги";
        questVariantTwoTxt.innerText="- Жми токсин если терпила.";

        swordScore+=1;

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }

    else if(swordScore===1.5&&toxinScore===1||swordScore===1.5&&toxinScore===2.5){
        questHeadlineTxt.textContent="Хитрый вопрос от Жеки";
        questTextTxt.innerText='Ну ка скажи нам Антёха js асинхронный? Вопрос поставил стажёра в шокич , недолго думая он спизданул: нуууу не, он - синхронный. Критикал хит ранил евгения в самое седце, стажёр был послан... :)';
        questVariantOneTxt.innerText="- Жми меч если нахуй.";
        questVariantTwoTxt.innerText="- Жми токсин если учить матчасть.";

        swordScore+=1;

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }

    else if(swordScore===2.5&&toxinScore===1||swordScore===2.5&&toxinScore===2.5){
        questHeadlineTxt.textContent="НЕА";
        questTextTxt.innerText='Плохо вы о ЖЕНЕЧКЕ думаете...кек.';
        questVariantOneTxt.innerText="";
        questVariantTwoTxt.innerText="";

        buttonSword.classList.add("hide");
        buttonToxin.classList.add("hide");
        buttonReboot.classList.add("visible");

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }

    else if(swordScore===1&&toxinScore===2.5){
        questHeadlineTxt.textContent="Туса у Антёхи";
        questTextTxt.innerText='Соре, но тут при любом раскладе Антёха терпила, поэтому туса переходит в более тихий формат разговоров. Но зато ты выбрал меч.';
        questVariantOneTxt.innerText="";
        questVariantTwoTxt.innerText="";

        swordScore+=1;

        console.log("toxinScore:" + toxinScore);
        console.log("swordScore:" + swordScore);
    }
};