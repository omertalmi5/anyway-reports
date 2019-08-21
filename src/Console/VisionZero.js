import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import visionZeroLogo from '../assets/images/visionZero.png';
import safeRoad1 from '../assets/images/safeRoad1.png';
import safeRoad2 from '../assets/images/safeRoad2.png';
import sidewalk from '../assets/images/sidewalk.jpg';
import sidewalk2 from '../assets/images/sidewalk2.jpg';
import sidewalk3 from '../assets/images/sidewalk3.png';
import sidewalk4 from '../assets/images/sidewalk4.png';
import sidewalk5 from '../assets/images/sidewalk5.jpg';
import bicycle from '../assets/images/bicycle.jpg';
import bicycle2 from '../assets/images/bicycle2.jpg';
import bicycle3 from '../assets/images/bicycle3.jpg';

import styles from './VisionZero.module.css';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    headingLarge: {
      fontSize: theme.typography.pxToRem(25),
      fontWeight: theme.typography.fontWeightRegular,
    },
    heading: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightRegular,
    }
  }),
);

export default function VisionZeroContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.headingLarge}>חזון אפס הרוגים בתאונות דרכים (Vision zero)</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          זהו חזון להקטנה משמעותית של מספר ההרוגים והפצועים הקשים בתאונות הדרכים. חזון אפס מבוסס על העיקרון של בטיחות מערכתית (Systematic Safety) - תכנון ערים, עיצוב רחובות וכבישים כדי למנוע הזדמנויות להתרחשות של תאונות דרכים קשות וקטלניות. בניגוד לגישה המסורתית למניעת תאונות, בטיחות מערכתית לא מנסה לגרום לכך שאנשים ינהגו או ילכו בצורה מושלמת (על ידי הסברה או חקיקה), אלא מכיר בכך שאנשים הם יצורים לא מושלמים שתמיד יעשו טעויות. המיקוד הוא בתכנון מערכתי שמונע את ההזדמנות לבצע טעות מסוכנת, או במקרה שטעות כזו נעשתה, שתאונה לא תתפתח לאירוע קטלני. לפי גישה זו האחריות על מניעת תאונה קטלנית היא קודם כל על המתכנן הציבורי, לפני שהיא אחריות של משתמשי הדרך. לפי חזון אפס, מערכת שבנויה על סמך ההנחה שאף אדם לא יטעה לעולם, אינה מערכת בטוחה. מבחינה ערכית, חזון אפס מניח כי ניידות היא זכות אדם בסיסית. אסור שאנשים ימותו בדרך לעבודה ללימודים לקניות או לחברים - ומתכנן את המערכת בהתאם להנחה זו. כמו כן חזון אפס מתאים לגישה מתפתחת של מניעת פשיעה שמנסה להקטין פשיעה או את השלכותיה עוד לפני שזו התרחשה, ופחות על ידי שימוש במערכת המשפט הפלילי וכוחות משטרה.
חזון אפס קיים מאז 1997 בהולנד ושוודיה ובשנים האחרונות הוא מאומץ על ידי מדינות וערים נוספות, לרבות על ידי ארגון ה-OECD, קנדה, בריטניה, אוסטרליה, ומספר ערים גדולות בארצות הברית.
            
          </Typography>
          <img src={visionZeroLogo} className={styles.visionZeroImage} alt="חזון אפס" />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>יצירת כביש בטוח - מיתון תנועה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            המטרה של מיתון תנועה היא לשפר את הבטיחות והנוחות של הולכי רגל ורוכבי אופניים (תחבורה רכה) על ידי האטה מכוונת של מכוניות בכבישים מקומיים בעיר (30-40 קמ"ש) . מהירות גבוהה מידי ברחובות העיר היא מצב של Lose-Lose: מצד אחד הדבר מרתיע שימוש בהליכה, אופניים, ותחבורה ציבורית- כלומר מגביר פקקים ובעיות חניה. מצד שני בעיר צפופה עיקר לא משנה אם נהג נוסע 60 קמ"ש לאורך 200 מטר של קטע רחוב אם בסוף הקטע אותו נהג תקוע בפקק או ברמזור בגלל עודף שימוש במכוניות. מיתון תנועה מכוון לתנועה מתונה וזורמת יותר במקום תנועה עם פרצי מהירות ועצירות, שחייבת לעמוד ברמזורים. 

מתכננים עירוניים משתמשים באמצעים שונים של מיתון תנועה כמו תמרורים, עיצוב הדרך בצורה מעוקלת, הצרת הדרך, "אוזניים", במפרים, כריות, כיכרות, ריצוף הולנדי, מעברי חצייה מוגבהים ועוד. בשנים האחרונות ערים רבות (לדוגמה פריס, לונדון ועוד) מקדמות גישה של אזור מיתון תנועה - "בלוק" בן כמה רחובות, שבהם יש מיתון תנועה עם "כניסות" ויציאות".      ההשפעה על נהגים היא קטנה בגלל שמדובר ב-200 המטרים האחרונים של הנסיעה. ההשפעה על בטיחות ילדים והולכי רגל בכלל היא עצומה. 
            
          </Typography>
          <img src={safeRoad1} className={styles.visionZeroImage} alt="דרך בטוחה 1" />
          <img src={safeRoad2} className={styles.visionZeroImage} alt="דרך בטוחה 2" />
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - אי תנועה מרכזי או אי הצלה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          אי תנועה מרכזי משפר את הנראות של הולך הרגל ושל מעבר החציה כולו, והוא וגם גורם לנהג להאט מעט לפני מעבר החצייה. אי תנועה משפר את הבטיחות והנוחות של חציית כביש דו סטרי בעיקר, אך גם חד סטרי, שכן הרבה יותר נוח, ולכן גם יותר בטוח, להתמקד במכוניות שמגיעות רק מכיוון אחד. בנוסף הדבר מקל על הולך הרגל לבחון את מצב התנועה ללא לחץ. 
ללא אי כזה הולך הרגל עלול להרגיש לא נעים כלפי הנהגים המחכים, ולכן לחצות בחפזון לתוך הנתיב הנגדי. התוצאה עלולה להיות קטלנית.  יתרון נוסף הוא מניעת עקיפה לא חוקית של מכוניות במעבר חציה דבר שעלול לגרום לפגיעה בהולך הרגל על המעבר.

          </Typography>          
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - הבלטת המדרכות ליד מעבר חציה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          ברחובות רבים הולך הרגל נדרש לחצות לא רק נתיבי נסיעה אלא גם נתיבי חניה. לדוגמה ברחוב חד סטרי מקובל, הולך הרגל חוצה נתיב נסיעה אחד ושני נתיבי חניה. לפי החוק למכוניות אסור לחנות על מעברי חציה, אבל עקב מחסור בחניה נהגים לא תמיד נשמעים לחוק. לעיתים עיריות מאפשרות למכוניות לחנות קרוב מידי למעברי החצייה וזה מסתיר את הולך הרגל, בעיקר ילדים. הבלטת המדרכות פירושה שהולך הרגל צריך לחצות רק נתיב אחד במקום שלושה, הרחבת המדרכה מונעת חניה לא חוקית של מכוניות על מעבר החצייה. בנוסף המדרכה הבולטת משפרת את הראות ואת הנראות של הולכי הרגל ומונעת הסתרה על ידי מכוניות- במיוחד של ילדים. עבור הנהג, המדרכות הבולטות יכולות להוות הצרה של הדרך דבר שמאלץ אותו להאט לפני מעבר החצייה. בנוסף המדרכות הרחבות יותר פירושן הרגשה נעימה יותר להולך הרגל.

          </Typography>     
          <img src={sidewalk} className={styles.visionZeroImage} alt="מעבר חצייה 1" />     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - הצרת מעבר חצייה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          אפשר להצר את הכביש בסמוך למעבר החצייה. דבר זה מקצר את זמן החצייה של הולך הרגל, ובנוסף גורם לנהג להאט לפני המעבר. מהירות של 40 קמ"ש או פחות משפרת בצורה משמעותית את הסיכוי שנהג ייתן זכות קדימה להולכי הרגל, ובמהירות נמוכה יותר לנהג יש גם יותר זמן להבחין בהולך הרגל ולפעול. הצרת מעבר החצייה יכולה להתבצע על ידי הבלטת המדרכות או על ידי אמצעים אחרים - לדוגמה קונוסים, עציצים, ועוד. חלק מאמצעים אלה משמשים כצד של "עירוניות טקטית" כדי לבחון את שינוי הרחוב בצורה זולה ומהירה.

          </Typography>     
          <img src={sidewalk2} className={styles.visionZeroImage} alt="מעבר חצייה 2" />     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - מעבר חצייה מוגבה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          מעבר החצייה הוא בגובה המדרכה והמכונית צריכות להאט ולעלות על המעבר ואז לרדת ממנו. הדבר מקל על חצייה של הולכי רגל, שמתקשים ללכת מהר - במיוחד הורים עם עגלות ילדים, הורים שמלווים פעוטות, נכים, וזקנים. הגבהת המעבר גם גורמת לשינוי תפיסתי לפיו המכונית היא "אורחת" במערכת המדרכות של הולכי הרגל, במקום שהולך הרגל הוא אורח במערכת הכבישים. יתרון נוסף הוא שהגבהת המעבר משפרת את הנראות של הולכי הרגל ומעודדת את הנהג להאט ולתת להולכי הרגל זכות קדימה. 

          דוגמא לצעדים לשיפור הבטיחות של מעבר חציה - אי תנועה מרכזי (1), הגבהת המעבר (2), מדרכה בולטת (3), מהירות מטרה של לכל היותר 40 קמ"ש בקרבת המעבר (4) סימון קו עצירה (5)
אמצעים לשיפור הבטיחות בחושך - תמרורים מהבהבים מעל ובצידי מעבר החצייה, מחזירי אור על הכביש.

          </Typography>     
          <img src={sidewalk3} className={styles.visionZeroImage} alt="מעבר חצייה 3" />     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - סימון קו עצירה לפני מעבר החצייה </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          אחת ההמלצות של ארגון קציני הבטיחות בארצות הברית (NETCO) כדי לשפר את בטיחות המעברים , היא סימון קו עצירה למכוניות במרחק של כ-3 מטרים לפני מעבר החצייה. כך שכאשר מכונית נותנת זכות קדימה להולך רגל, היא צריכה לעצור בקו זה. לדבר זה חשיבות מיוחדת במעברי חציה שחוצים 2 נתיבים או יותר - שכן נהג שמתקרב למעבר חצייה שבו יש מכונית שכבר עומדת, הוא יכול לראות את הולך הרגל ולעצור גם הוא (מעבר לכך שזה לא חוקי לעקוף מכונית שעומדת במעבר חצייה). בנוסף הדבר מקל על הולך הרגל להבחין בנתיבים האחרים של החצייה. יתרון נוסף של עיצוב כזה הוא שאם מכונית אחת פוגעת במכונית אחרת שעצרה במעבר - הסיכוי לפגיעה בהולך רגל כתוצאה מכך קטן.
          </Typography>     
          <img src={sidewalk4} className={styles.visionZeroImage} alt="מעבר חצייה 4" />     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>יצירת מעבר חצייה בטוח - סימני זיגזג לפני מעבר החצייה</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          בבריטניה ובמדינות המושפעות ממנה כמו גיברלטר וקפריסין מקובל סימון של זיגזג מספר מטרים לפני מעבר החצייה. לדבר זה מספר יתרונות - מצד אחד הוא מסמן לנהג שעוד זמן קצר הוא מגיע למעבר חציה. בנוסף הדבר יוצר אשליה אופטית של הצרה של הכביש לפני מעבר החצייה וגורם לנהגים להאט. יש שטוענים כי נהגים מסתכלים יותר זמן על הכביש עצמו ולכן מבחינים בסימן זה לפני שהם מבחינים בהולכי רגל. אמצעי זה הוא זול ומהיר ליישום, אבל ישו לו חסרונות לעומת הצרה אמיתית מעבר החצייה - והיא שעם הזמן נהגים עלולים להתרגל לסימון.

          </Typography>     
          <img src={sidewalk5} className={styles.visionZeroImage} alt="מעבר חצייה 5" />     
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography className={classes.heading}>אופניים במרחב העירוני</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          מהירות רכיבה ממוצעת על אופניים בעיר היא 25-15 קמ”ש. בירידה יכול רוכב האופניים לפתח מהירות גבוהה יותר העשויה להגיע ל-50 קמ”ש. מהירות הנסיעה תלויה בקיום תשתיות אופניים, בכמות הרמזורים בדרך, בהפרשי גבהים בדרך, במזג האוויר ובכושר של הרוכב. אופניים חשמליים הם בדרך כלל מהירים יותר יחסית לאופניים. בישראל יש מהירות מירבית של 25 קמ"ש. בשל פקקי תנועה ועצירות ברמזורים, בערים רבות בעולם, המהירות הממוצעת של רכב פרטי היא נמוכה מ-26 קמ"ש: בוורשה המהירות היא 26 קמ"ש, בברלין 24 קמ"ש ובלונדון 19 קמ"ש.[1]

          </Typography>     
          <img src={bicycle} className={styles.visionZeroImage} alt="אופניים" />
          <img src={bicycle2} className={styles.visionZeroImage} alt="אופניים 2" />       
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography className={classes.heading}>אופניים במרחב העירוני - רחוב אופניים או שדרת אופניים</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          זהו רחוב שבו משלבים תנועה של אופניים עם תנועה ממונעת בצורה בטוחה וללא הפרדה. ברחוב כזה יש זכות קדימה לאופניים, אבל גם כלי רכב אחרים כמו מכוניות יכולים לנסוע בו. שדרות אופניים הם רחובות שבהם יש מעט תנועה מנועית שנוסעת לאט, ואשר מותאמים לשימוש לתחבורת אופניים על ידי עיצוב עירוני שמשלב מיתון תנועה, הפחתת תנועה, תמרור וסימון כביש מתאים, וכן טיפול בדרכים חוצות. טיפולים אלה מאפשרים תנועה בטוחה ונוחה לאופניים בעודם מרתיעים נסיעות של כלי רכב ממונעים דרך רחובות אלה. נשמרת הגישה של כלי רכב ממונעים לדירות ונכסים שנמצאים לאורך הנתיב.
בניגוד לשבילי אופניים, שדרת האופניים בדרך כלל אינה מפקיעה את זכויות הדרך מכלי רכב ממונעים,
ואינה כרוכה באובדן מקומות חנייה לרכב הפרטי, ובכל זאת מייצרת רחוב שבו נעים ובטוח לרכוב באופניים.

          </Typography>     
          <img src={bicycle3} className={styles.visionZeroImage} alt="אופניים 3" />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
