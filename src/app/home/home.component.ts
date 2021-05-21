import { ApplicationRef, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CardComponent } from './../card/card.component';
import {  Post } from 'src/db/Classes/PostClass';
import { CommentClass } from 'src/db/Classes/CommentClass';
import {PanelModule} from 'primeng/panel';
import {getAllPosts} from 'src/db/Classes/Api';
import { post } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value: any;
  counter=0;

  sortByDates(){
    this.counter ++;
    let idx:number = this.counter % 2;
    switch(idx){
      case 0:
        return;
      case 1:
        this.posts = this.sortNewFirst();
        break;
      case 2:
        this.posts = this.sortOldFirst();
        break;
    }
  }

  // display: boolean = false;

  constructor() {
    // this.posts = getAllPosts();
    // @ts-ignore
    this.posts = []
    let post10 = new Post("חברה שלי סיפרה לי כבר פעם שנייה החודש על מקרים שקורים לה עם בן הזוג שלה, שנשמעים לי ממש לא תקינים (חיטוט בטלפון, הגבלות לבוש, קללות שלו כלפיה ועוד כל מני דברים יפים). בשיחה איתה ממש נלחצתי, כי לא רק שזה היה נשמע לי רע, היא גם ממש לא במצב של להבין שזה רע. היא אוהבת אותו ומרגישה שהוא אהבת חייה. אז אחרי שדיברנו נכנסתי לדוקטור גוגל, וראיתי שהיא עונה על כל הקריטריונים של להיות במערכת יחסים מתעללת.. התקשרתי לשתי עמותות שאמרו לי שיש המון נורות אדומות ושאין לי יותר מדי לעשות, שזה מצב רגיש וצריך להיות חכמים כי אני היחידה שיודעת. אחת מהעמותות אמרה לי שאני צריכה ליידע את ההורים שלה, אז קבעתי שיחה איתם למחר. מצד אחד, הם צריכים לדעת, כי אולי דווקא זה שהם לא יודעים גורם לזה להמשיך לקרות. אבל מצד שני, מעבר לזה שאני מבינה שהיא תשנא אותי ולא לדבר איתי יותר בחיים, אני מפחדת שהם לא יפעלו נכון את המצב (בצדק, אני גם לא יודעת איך) ושזה יגרום לה להתעצבן ולברוח ישר לזרעותיו, ולהתבודד מהם ומהשאר עוד יותר. אני מרגישה שהאחריות הזאת גדולה עליי מדי ואין לי מושג מה לעשות, כל טעות קטנה שלי יכולה להיגמר ממש ממש רע.")
    post10.PID = 10
    post10.authorID = 183;

    let post10_comments = [new CommentClass("תדברי איתה ואל תגידי לה שזה \"מערכת יחסים מתעללת\" חחח היא תכחיש במיליון אחוז וזה גם ממש מבהיל ואין שום סיכוי בעולם שהיא תשתף איתך פעולה!!תשאלי אותה איך הזוגיות ותני לה לדבר לבד אפילו לא בשיחה אחת בכמה שיחות. את צריכה שהיא תרגיש נוח לספר לך גם את הצדדים הפחות יפים של החבר ואז טפטפי לה שהוא לא בריא בשבילה אבל עדיין תתענייני בה בלי קשר לזוגיות שלא תתרחק ממך ותרצה להסתגרלאט לאט אני בטוחה שהיא תביןאין לך מה להיות דרמטית לגבי זה כי זה דברים שלוקחים זמן לעיכול כי בהתחלה ברור שהחברה לא תראה כי מבחינתה הוא מקסים חכם וכו ואז עם הזמן מגלים את זה"),new CommentClass("במערכות יחסים פוגעניות הרבה פעמים יש איזו בועה שצריך לנפץ או אסימון שצריך להפיל.גם אם היא תכעס עלייך, אפילו תנתק איתך קשר, את מצידך נותנת לה פתח לראות את כל הדברים האלה בעצמה ולהבין גם את האור השלילי ששוטף את מערכת היחסים שלה.אני חושבת שזה חשוב יותר מהכל"),new CommentClass("כל הכבוד לך. להיות מאוד זהירים. כמו שאמרו לפניי, אם אתלא בטוחה איך הורים יגיבו דווקא לא הייתי ממהרת. התנגדות נחרצת שלהם עלולה לגרום להפך מהרצוי. הייתי מנסה לנסות להזמין למפגשים חברתיים, להגיע לבקר, להיות כמה שיותר בקשר, ואיכשהו לטפטף או לשאול שאלות מכוינות כדי שהיא תרגיש שמשהו לא בסדררוב הסיכויים לדעתי שאם תבהירי לה שהמצב לא תקין, היא רק תתרחק ממך. אל תשללי אותו. תכווני אותה להבין את זה לבד"),new CommentClass("קחי אותה לשיחה, עדיף אחת-על-אחת ובמקום ניטרלי ככל האפשר כדי שהיא לא תרגיש מאוימת.תכיני אותה מראש לזה שהיא לא תאהב את מה שיש לך להגיד ותגידי בכנות שגם לך זה קשה, אבל שהיא חשובה לך ושאת לא מוכנה לעמוד מנגד.תגידי לה שלדעתך מדובר במערכת יחסים מתעללת ותנמקי את עצמך, כולל דוגמאות מהחדשות שלצערנו כולנו מכירים. תדגישי לה כל הזמן שאת עושה את זה כי את אוהבת אותה ודואגת לה.תהיי חזקה 🙏🏻"), new CommentClass("כל הכבוד לך. איזו אכפתיות! הייתי נשארת איתה בקשר חברי ומבקשת מארגוני הסיוע הנחיות איך להתנהג ומה לומר לה כדי אולי לטפטף דברים בעדינות, ובעיקר כדי להיות שם בשבילה ברגע שנופל לה האסימון והיא תצטרך מקום בטוח ולא שיפוטי ללכת אליו.טוב שאת מדברת עם ההורים שלה כי חשוב שיהיו מודעים אבל הייתי מפנה אותם גם כן לדבר עם עמותות סיוע שיעזרו להם להבין איך להתנהל במצב הזה ולא יעשו דברים שירחיקו אותם ממנה")]
    post10_comments[0].replyingTo = 10;
    post10_comments[1].replyingTo = 10;
    post10_comments[2].replyingTo = 10;
    post10_comments[3].replyingTo = 10;
    post10.comments = post10_comments
    this.curPostPID = 3;
    // @ts-ignore
    this.comments = [new CommentClass(this.lorem_impsum.slice(0, 50),0,0), new CommentClass(this.lorem_impsum.slice(0, 100))];
    (this.posts)[0].comments = this.comments;
    this.submitPostText = '';
  }
  lorem_impsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu eros a lorem efficitur rhoncus at finibus erat. Quisque consectetur nisi sed mauris elementum condimentum. Praesent sodales facilisis facilisis. Donec a urna tempor, efficitur mi porta, accumsan augue. Praesent volutpat odio metus, a condimentum mi porttitor eu. Nunc facilisis pharetra purus non scelerisque. Vivamus mattis, tellus vel pellentesque efficitur, nibh erat bibendum ipsum, in tincidunt augue lorem sit amet urna. Etiam quis ex elit. Mauris lacus sem, luctus id iaculis in, imperdiet non nunc. Suspendisse eu egestas nibh. Duis tellus lacus, lobortis at erat at, dignissim sollicitudin erat.';
  submitPostText: string;
  curPostPID: number;
  posts = Array<Post>();
  cards = Array<CardComponent>();
  comments: CommentClass[] | undefined;

  sortNewFirst(){
    return this.posts.sort((a, b) => new Date(b.date_created).getTime() - new Date(a.date_created).getTime());
  }

  ngOnInit(): void {
  }
  async addPost(){
    let np = new Post(this.submitPostText, -1,[],-1);
    await np.upload();
    this.posts.unshift(np)
  }

}
