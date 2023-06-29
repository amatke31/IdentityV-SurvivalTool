import { RowContainer } from "components/RowContainer";
import { TimerButton } from "components/TimerButton";
import { OneThirdColumn } from "components/OneThirdColumn";
import styles from "components/ThirdRow.module.scss";

type Props = {
  patrollerTime: number;
  isPatrollerTimerActive: boolean;
  setIsPatrollerTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  teleportTime: number;
  isTeleportTimerActive: boolean;
  setIsTeleportTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
  blinkTime: number;
  isBlinkTimerActive: boolean;
  setIsBlinkTimerActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThirdRow = ({
  patrollerTime,
  isPatrollerTimerActive,
  setIsPatrollerTimerActive,
  teleportTime,
  isTeleportTimerActive,
  setIsTeleportTimerActive,
  blinkTime,
  isBlinkTimerActive,
  setIsBlinkTimerActive,
}: Props) => {
  return (
    <RowContainer isEdgeRow={false}>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isPatrollerTimerActive}
          setIsTimerActive={setIsPatrollerTimerActive}
          time={patrollerTime}
        >
          <p className={styles.traitTimeText}>{patrollerTime}</p>
          <svg
            className={styles.leftSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.57873 62.06206"
            fill="#292b2f"
          >
            <path d="M51.38374,20.22052c.51349,4.69868-1.89285,8.42328-3.95033,12.26111-.05769.1076-.18335.18137-.22955.29139-2.749,6.54622-8.61433,9.43339-14.28811,12.64532a33.21408,33.21408,0,0,1-12.40968,4.33189c-3.05432.3799-3.01686.58819-3.13089,3.86732-.078,2.24259-.17471,4.48506-.30779,6.72487-.0425.71524-.00938,1.74143-.96362,1.71929-.63013-.01463-.60876-.98369-.59232-1.55.05843-2.01312-.53856-3.93951-.69039-5.91238-.29926-3.88845-2.36718-6.68419-5.04526-9.2372-1.051-1.00188-1.40963-.464-1.76633.45411-.22266.57312-.28755,1.20728-.48351,1.79347-.06116.183-.32629.423-.48527.41368-.19638-.01148-.391-.24311-.56329-.40475a.82446.82446,0,0,1-.1704-.32615,5.66927,5.66927,0,0,1,.32516-4.44257c-1.64227-.79011-1.65386-2.27387-1.6552-3.81361A5.40156,5.40156,0,0,1,6.16663,35.221c.72277-.82286,1.32678-2.38051,2.36871-2.05609,1.28252.39932.53245,1.87916.31556,2.87695a2.07772,2.07772,0,0,0,.49324,2.06792c1.26949,1.23186,2.10535,2.34071.48924,4.0348-.52125.5464.61712,1.12815,1.023,1.67109a2.10469,2.10469,0,0,0,.6185.39394c.07064-.30437.30308-.71723.1859-.89566-.81491-1.24084-.66612-2.61355-.60782-3.96626.02434-.56482-.1358-1.3498.6795-1.50119.7096-.13176,1.10863.46932,1.435.98634,1.22615,1.94268,3.19464,3.79774.87647,6.25271-.29738.31493-.41022.71323.07014.84213a6.90192,6.90192,0,0,0,1.81251.14295c.37922-.0023.55812-.13176.37393-.641-1.18455-3.27487.45131-5.97559,1.89672-8.6612.44852-.83337,1.23674-.76917,1.62778.20328a3.80974,3.80974,0,0,1,.22249,1.46371,6.88965,6.88965,0,0,0,2.283,5.29943c1.20473,1.18176.96143,1.66834-.75408,2.05482a13.08808,13.08808,0,0,1-1.43591.16716A5.77267,5.77267,0,0,0,21.6,46.06377c3.88441-.70776,7.615-2.03293,10.50915-4.73019a27.24276,27.24276,0,0,0,6.06005-7.90512,16.624,16.624,0,0,0,.87148-2.4574c.42807-1.41106.32236-2.30958-1.55322-2.48174a21.80776,21.80776,0,0,1-5.32148-1.312c-3.91594-1.41321-6.11454-4.86384-8.64012-7.86935-1.03607-1.23294-2.0836-2.45181-3.13329-3.67287-3.93139-4.57319-12.04376-4.1983-16.14095-1.863a7.16334,7.16334,0,0,0-1.30838,1.28041c.64859.59978.9803-.40407,1.54583-.30721A1.63493,1.63493,0,0,1,5.8552,17.158a21.42978,21.42978,0,0,1-1.32686,2.20544c-.72555,1.25627-1.794,2.43817-.73662,4.05876a.808.808,0,0,1-.44329,1.209,1.39619,1.39619,0,0,1-1.04607-.18275A5.17666,5.17666,0,0,1,.20463,18.53242c.92-3.64428,1.9939-7.25195,6.01217-8.7628,1.0661-.40085,1.162-1.104.63052-2.054a2.34162,2.34162,0,0,1-.1274-2.1655c.35772-.72109.44739-1.805,1.48087-1.9279.973-.11571,1.03756.90867,1.4045,1.47987,1.51677,2.36106,1.52985,2.47068,4.04478,1.57787C21.598,3.85839,29.64647,4.56228,37.665,6.0631a7.4323,7.4323,0,0,0,4.9058-.69618A4.05223,4.05223,0,0,0,45.20417,1.6856a2.08164,2.08164,0,0,1,.5112-.97814A5.726,5.726,0,0,1,46.48074,0c.21032.2954.43638.58087.62658.889a2.792,2.792,0,0,1,.50881.9782,59.0558,59.0558,0,0,0,3.34169,12.81028C51.637,16.53082,51.07826,18.39466,51.38374,20.22052ZM26.76031,16.56a8.09565,8.09565,0,0,0,1.30008,4.65811c2.70084,3.53242,5.89321,5.41513,10.48228,4.39784,3.52251-.78086,5.12344-2.41767,5.04859-6.09488-.08563-4.20628-1.6163-7.66552-5.35468-9.95414-2.63583-1.61365-5.27753-1.95168-8.02028-.48917C27.50639,10.52274,26.5928,12.97757,26.76031,16.56Z" />
            <path d="M40.0401,52.506c-.67244-.13862-1.574-.05482-1.81407-.41779-1.53918-2.327-3.64035-1.30929-5.62439-1.163-1.83614.13535-3.70668,1.42468-5.50991-.11576.99015-1.66274,2.84175-2.16922,4.2793-3.22847,1.772-1.30569,3.62566-2.49783,5.43363-3.75432,1.26228-.87724,2.09979-.88815,2.82438.78305.9962,2.29768,3.27214,2.86122,5.44963,3.164a24.86866,24.86866,0,0,0,4.41486-.17033c.78454-.03408,1.51549-.12852,1.494-1.17244-.01458-.70973.29832-1.64368-.54608-1.97791a1.4925,1.4925,0,0,0-2.1189.81213c-.46781.9096-.92727,2.9275-2.4919,1.555-.95881-.84107-.14546-2.4495.656-3.28456.77258-.805,1.4197-1.69221,2.15738-2.50909,1.3771-1.525,2.01534-1.46314,3.81369.01826.66271.5459,1.46364.9258,2.10208,1.49523,1.09571.97727,2.39028,1.91453,1.91942,3.71881-.3384,1.29669-2.22158,2.42762-4.0022,2.54953-1.44677.099-3.01438-.45318-4.30977.54161-1.70435,1.30886-3.82879,1.55773-5.6962,2.4489A14.84362,14.84362,0,0,1,40.0401,52.506Z" />
            <path d="M17.17474,14.6984c1.18572.00778,4.33928,2.62285,4.68168,3.86068a1.415,1.415,0,0,1-.32427,1.37523,16.71345,16.71345,0,0,1-1.55145,1.59082c-.801.69856-.98058,2.42513-2.27256,2.12866-1.46829-.33693-1.75482-2.02148-2.04062-3.2939a16.29538,16.29538,0,0,1-.14618-4.07218A1.48806,1.48806,0,0,1,17.17474,14.6984Z" />
            <path d="M23.62791,25.4621c-.03511-.66137-.04274-.90757-.06214-1.15283-.08318-1.05167-1.409-2.41242-.3202-3.02115,1.18812-.66424,1.80935,1.15847,2.72395,1.82744a3.52137,3.52137,0,0,1,.77041.78514c.80531,1.12711,2.27464,2.08629,1.0426,3.78361-1.207,1.66275-3.56155,2.68029-5.10122,2.18913-.87595-.27944-.66542-.89635-.31435-1.434A5.64171,5.64171,0,0,0,23.62791,25.4621Z" />
            <path d="M7.2827,16.04635c.02079-.98454-.11906-2.07324,1.01679-2.55774a4.14123,4.14123,0,0,1,3.561.11349,1.06024,1.06024,0,0,1,.64246,1.213A7.44663,7.44663,0,0,1,9.24058,19.137c-.47958.31682-.92.1008-1.29316-.28421C7.1692,18.04976,7.326,17.02459,7.2827,16.04635Z" />
            <path d="M31.01973,30.52961c-.01878-2.04843,1.26317-2.97713,3.0529-2.18813a1.25588,1.25588,0,0,1,.72876,1.80116,4.20242,4.20242,0,0,1-1.11395,1.44406c-.60117.49617-.55557,1.95566-1.66846,1.53778C30.96951,32.73043,31.069,31.517,31.01973,30.52961Z" />
            <path d="M26.814,36.71217a5.95242,5.95242,0,0,1,1.09894.58938,14.39352,14.39352,0,0,0,2.90745,2.192c1.35106.70858,1.37756,1.49353-.1507,2.2214-1.10567.5266-1.67584,2.39382-3.345,1.433-.85612-.49277-1.61424-4.55-1.1396-5.54905A6.07091,6.07091,0,0,1,26.814,36.71217Z" />
            <circle cx="35.87589" cy="16.60544" r="2.5" />
          </svg>
          <svg
            className={styles.rightSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 65.13117 69.76211"
            fill="#292b2f"
          >
            <path
              d="M32.38982,8.38506c2.64778-1.4749,2.9925-1.317,4.53061,1.37966a13.51949,13.51949,0,0,1,1.41312,8.56918c-.4294,3.59882-1.66234,7.00577-2.59634,10.48313-1.1932,4.44237-.45861,5.7416,4.12407,6.97961,2.0574.55581,4.16733.92217,6.21624,1.50455,4.40207,1.25123,8.12779,3.329,10.08245,7.847.69262,1.60093.97014,2.571-.80381,3.57588Q43.9893,55.163,32.72307,61.77918c-1.45851.852-2.26824.54753-3.17879-.84095a13.16793,13.16793,0,0,1-2.27971-9.33973,46.06076,46.06076,0,0,1,2.10863-9.581c1.66344-4.5172.31847-6.59447-4.432-7.77492-2.86335-.71153-5.74188-1.40343-8.5388-2.329a13.11572,13.11572,0,0,1-7.586-6.59851c-.96651-1.79524-1.00425-2.85459.92292-3.90612C13.6331,19.28436,28.65764,10.464,32.38982,8.38506Zm15.5108,42.04077c.52379-.311,1.266-.68315.78643-1.45675a1.58243,1.58243,0,0,0-1.23272-.53185,25.41435,25.41435,0,0,1-6.77664-1.02078c-3.729-.82128-4.61252-2.06374-4.63394-6.0552A7.352,7.352,0,0,0,34.86528,36.706c-3.15088-4.1676-4.71631-8.522-1.89714-13.57734.57266-1.02691.07661-2.17126-1.31509-1.4504-2.598,1.3457-4.979.75663-7.59114.04211-2.78349-.76138-5.71313-1.5141-8.57319.16089-1.54669.90581-1.58428,1.67357-.47308,3.03512,2.45218,3.00463,5.89013,3.89185,9.37887,4.83751,7.73687,2.09716,10.95887,7.91871,8.67089,15.61229C32.36748,47.713,31.51,50.01255,30.7315,52.3357c-.83419,2.48932.91563,4.18543,2.2614,5.60858,1.23556,1.30662,2.60321-.51754,3.82887-1.11C38.44284,56.05066,45.78409,51.68255,47.90062,50.42583Z"
              transform="translate(0)"
            />
            <path
              d="M29.6631.82923c1.55552-.91038,3.13337-1.43614,4.25225.40939.97055,1.60087.18866,3.16612-.84956,4.48568-.38088.4841-16.415,9.59013-23.80478,13.84858-1.12548.64857-2.19064,1.38834-3.66123.88825-1.109-.37712-2.26793-.589-2.6282-1.89359a2.63712,2.63712,0,0,1,1.55474-3.21427C6.38282,14.30483,25.558,3.23177,29.6631.82923Z"
              transform="translate(0)"
            />
            <path
              d="M20.73426,59.27733c.86829,1.41631.92814,2.29852-.916,2.373-2.61008.10547-5.22187.2188-7.82518.4271-1.6052.12845-2.59383-.07764-1.88339-2.04053.29921-.82673-.48456-.97071-.97824-1.354a34.004,34.004,0,0,1-6.9426-8.124C-2.01564,44.37939.5589,39.39765,3.87194,34.34429A1.32541,1.32541,0,0,1,5.60608,33.86c.60521.37276.55132,1.13091.44543,1.79144A25.158,25.158,0,0,0,7.39485,48.1503a16.88086,16.88086,0,0,0,4.1076,6.46839c1.23274,1.27584,1.6213,2.0148,2.36131-.08043.46342-1.31209,1.38243-1.4377,2.19163-.60533C17.75023,55.67628,19.2725,57.58716,20.73426,59.27733Z"
              transform="translate(0)"
            />
            <path
              d="M36.14634,68.89953c-1.52313.88961-3.0198,1.49-4.30556-.26875-.87692-1.1995-.271-3.62822,1.12666-4.80993.3711-.31376,24.02042-14.08382,24.75482-14.08894,1.599-.01115,3.42409-.02967,4.12316,1.88846.6312,1.7319-.44564,2.70812-1.8381,3.50148C56.01738,57.39514,40.11167,66.58353,36.14634,68.89953Z"
              transform="translate(0)"
            />
            <path
              d="M55.99745,10.12572c-.58321,3.28524,2.40509,4.66486,4.0901,6.16491,4.31385,3.84029,4.53858,8.89047,5.02829,13.81733.18819,1.89338-1.38716,3.90935-3.04352,5.24968a1.06425,1.06425,0,0,1-1.75-.88658c-.08426-1.11777.25816-2.26405.21374-3.38973-.20526-5.20224-1.37871-10.01677-5.70546-13.4892-.75169-.60327-1.63636-1.603-2.47323-.64437-1.57453,1.80367-2.55219.572-3.57-.44727-.80278-.80393-5.559-4.65238-4.82615-6.20748.58849-1.2487,8.18318-.98928,9.97764-1.08589C54.77274,9.16222,55.585,9.18953,55.99745,10.12572Z"
              transform="translate(0)"
            />
          </svg>
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isTeleportTimerActive}
          setIsTimerActive={setIsTeleportTimerActive}
          time={teleportTime}
        >
          <p className={styles.traitTimeText}>{teleportTime}</p>
          <svg
            className={styles.leftSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 69.23182 67.45541"
            fill="#292b2f"
          >
            <path d="M7.02563,67.45541c-1.05271-1.64385-3.01094-2.04283-4.40821-3.21092a1.029,1.029,0,0,1-.38236-.5724c-.06022-.54233.43433-.51053.74484-.52768a7.3015,7.3015,0,0,1,3.61671.47851c1.12723.52183,1.674.0134,2.07094-1.22024,1.03342-3.21142.81128-6.57508,1.18875-9.83712.34826-3.00962,1.132-6.029.90338-9.11118a2.6884,2.6884,0,0,1,1.51371-2.675,49.10276,49.10276,0,0,1,6.953-4.07594c1.32067-.56554,1.64869-1.363.79069-2.55684-.28718-.39958-.62992-.761-.89972-1.17108-2.18664-3.32359-2.41124-3.27931-4.8311-.3145-4.46943,5.4759-4.7476,4.84827-9.02055.7584A26.50376,26.50376,0,0,1,.32732,27.0136c-.76087-1.38242-.07609-2.03906.83748-2.74389a.98.98,0,0,1,1.69678.57553c.23231,3.51688,3.08891,4.76613,5.35352,6.56323a1.41853,1.41853,0,0,0,2.23313-.14275c2.90893-3.16978,4.0835-7.18135,5.357-11.12911.20333-.63031-.38165-.79745-.85736-.347-1.673,1.58419-2.98579.68125-4.566-.34126C8.49839,18.22957,7.55931,16.421,6.63243,14.59489c-.94922-1.87015-.17993-3.62477,1.05-5.08154a5.32119,5.32119,0,0,1,4.94085-1.93979c1.20978.16015,1.8419,1.13856,2.42338,2.09634.76073,1.253,1.50351,2.51693,2.25985,3.77265.36849.61179.65887,1.40519,1.607,1.12253a1.99985,1.99985,0,0,0,1.6214-1.74438,41.127,41.127,0,0,1,2.58289-7.97714C25.09356-.45623,29.7573-1.376,33.8889,1.933a19.28448,19.28448,0,0,1,6.5396,9.81839,87.14122,87.14122,0,0,1,3.49313,31.645,73.28631,73.28631,0,0,1-.94141,7.99918c-.66343,3.80945-3.24122,6.81335-6.4566,9.0411-1.69261,1.17271-3.35016.39269-4.76643-.72309a17.46389,17.46389,0,0,1-5.6989-7.612c-.93659-2.51946-2.41156-4.84448-2.76683-7.59578-.17478-1.35348-1.03356-1.91452-2.39473-1.20583a5.70313,5.70313,0,0,1-.67054.3017c-4.19746,1.53514-4.00912,1.54991-4.35746,5.7646a35.63155,35.63155,0,0,1-5.23124,15.52491c-.49894.82916-1.32,1.49868-1.38776,2.56436ZM38.87647,38.97019A85.5571,85.5571,0,0,0,35.055,12.78343a14.33318,14.33318,0,0,0-3.44661-6.03338c-2.34842-2.439-4.72766-2.20841-6.80752.51159-1.01,1.32079-1.2872,2.91073-1.88916,4.38085-.59781,1.46-.14344,2.169,1.46352,2.61a51.32266,51.32266,0,0,1,6.545,2.45365,2.32819,2.32819,0,0,1,1.22869,3.112c-.38958,1.30279-1.494,1.02886-2.46039.95876a4.25427,4.25427,0,0,1-1.08224-.22291c-1.2649-.44152-1.612-.00783-1.21171,1.2088.307.93323.62921,1.86328.88821,2.81015,1.10119,4.02593,3.189,7.7642,3.69116,11.9479A8.98188,8.98188,0,0,0,35.03849,42.58a4.986,4.986,0,0,1,.90647,5.76791,1.93611,1.93611,0,0,1-2.74238,1.08495,7.32145,7.32145,0,0,1-3.48724-2.62877,19.1184,19.1184,0,0,1-2.68-4.81991c-.1332-.456-.25474-1.00319-.92236-.92834a1.37279,1.37279,0,0,0-1.29364,1.128,5.76068,5.76068,0,0,0,.09659,2.1842A23.1972,23.1972,0,0,0,29.335,53.6059a11.03049,11.03049,0,0,0,2.19925,1.943A2.92506,2.92506,0,0,0,35.548,55.1904a8.86475,8.86475,0,0,0,2.49579-4.827C38.94017,46.61112,38.68239,42.77129,38.87647,38.97019Z" />
            <path d="M65.05863,17.15751a11.04169,11.04169,0,0,0-2.33453-7.3571c-1.88688-2.50433-2.18046-2.50761-4.95786-.70866-.2506.16231-.50892.63189-.85433.16072a.74821.74821,0,0,1,.095-.981,4.33644,4.33644,0,0,1,6.68724-.72419c3.97042,3.459,5.38793,9.89436,3.61275,15.03816-.55827,1.61768-.82648,3.37376-1.88468,4.72683-2.2389,2.86273-3.53529,2.99437-6.31967.67-.43482-.363-1.20143-.89012-.74346-1.45944.61583-.76558.93967.26467,1.26739.56762.74912.69249,1.5462,1.48506,2.55766,1.01284a3.9303,3.9303,0,0,0,1.96973-3.33761c.09835-.73651-.3768-1.07666-1.08692-1.1606a7.64243,7.64243,0,0,0-3.58638.75272c-3.90623,1.47562-8.031,2.28452-11.85878,3.99572-1.45222.64922-2.14781.12929-1.89444-1.41245.43512-2.64764,1.34162-5.20254,1.49655-7.91752.05477-.95982.83878-.88713,1.67316-.77672,1.60761.21273,3.11535,1.78017,4.86592.38337,1.44862-1.15588,1.427-5.3344,1.44956-5.82639.02091-.45687-.0423-.94413.45042-1.228.09721.34652.20708.69007.28943,1.04008.33932,1.442-.92749,3.53491.83307,4.24017,1.31822.52807,2.41434-1.439,3.80919-1.90409.85337-.28453,1.76683-1.56442,2.52623-.67372.83537.97979-.01682,2.04647-.92506,2.80631a6.25323,6.25323,0,0,0-.803.763c-.53449.64028-1.84744,1.16034-1.48237,1.89361.47445.953,1.77452,1.1547,2.9382,1.13225a1.84617,1.84617,0,0,0,2.068-1.66172C65.03884,18.36142,65.03762,17.49351,65.05863,17.15751Z" />
            <path d="M67.983,11.20307c-.65992-.04878-.73461-.52715-.70372-1.02772a.80615.80615,0,0,1,.94931-.82948c.51549.04563,1.00389.347,1.00321.87253C69.2309,10.94938,68.66156,11.19989,67.983,11.20307Z" />
          </svg>
          <svg
            className={styles.rightSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 60.08282 62.73548"
            fill="#292b2f"
          >
            <path d="M35.58418.16079a4.3201,4.3201,0,0,1,.65472.11076A5.55259,5.55259,0,0,1,37.21557.627a3.934,3.934,0,0,1,2.09129,2.5213,10.26538,10.26538,0,0,1,.24807,3.34084c-.05418,1.098.198,2.23774-.38769,3.26465-.8512,1.49255-.02379,2.095,1.30291,2.20133,1.98506.15918,3.98347.19631,5.97657.20528a18.31564,18.31564,0,0,1,6.40855,1.39592,2.37021,2.37021,0,0,1,1.541,1.89572c.23684,1.14671-.943,1.33945-1.68094,1.60477-1.39454.50139-2.87187.77226-4.29036,1.21552-.7083.22134-1.393.51965-.78834,1.548a15.33985,15.33985,0,0,1,1.621,6.37106c.18505,1.78312,1.03213,2.25079,2.67345,2.262a15.02411,15.02411,0,0,1,6.71034,1.651c1.96407,1,1.89494,2.56733-.049,3.55219a18.66023,18.66023,0,0,1-3.16116,1.085,37.7155,37.7155,0,0,1-6.04664,1.21408c-2.57858.321-5.17546.45107-7.76847.59477-1.2.06649-8.98638.355-9.54982.21655.81393.2,5.77063,1.03257,6.44072,1.08917,2.7081.22873,2.776.23365,2.61682,2.79045a19.72383,19.72383,0,0,0,.92357,7.66309c1.15032,3.35666.32078,3.12635,3.91823,3.13257a9.81767,9.81767,0,0,1,2.58282.243c2.76059.7377,3.374.12257,2.45573-2.655-.923-2.79179-2.26741-5.424-3.04508-8.29366-.81516-3.008-.45528-3.6376,2.70357-3.3488,1.94206.17756,2.43,1.55446,3.09695,3.13688,1.90679,4.524,1.84461,9.3454,2.62322,14.0399a1.53709,1.53709,0,0,1-.77923,1.84678c-1.29589.66987-2.43376,1.713-4.00608,1.782a71.15315,71.15315,0,0,0-9.56532,1.81753,7.26324,7.26324,0,0,1,1.31764.59625c.60794.4308,1.0274,1.13811.39045,1.88179a.52032.52032,0,0,1-.39453.16888c-2.8616-.01524-5.72344-.06461-8.58473-.04344a3.2207,3.2207,0,0,1-2.796-1.40017c-1.58534-1.95938-3.32292-2.14245-5.03-.38608a6.09242,6.09242,0,0,1-4.98383,1.83955c-2.117-.05329-4.2383.08692-6.35694.06574-2.32945-.02327-2.53036-.16071-1.50944-2.18958.748-1.48646.0329-1.5899-1.00717-1.8761a16.4201,16.4201,0,0,1-4.87258-1.77051c-.61247-.40269-1.5057-.71384-1.34057-1.541A2.03569,2.03569,0,0,1,8.4797,53.58051c1.621-.39088,2.93052-1.46458,4.82207-1.50943,2.472-.05859,4.67462-1.02013,5.36147-3.99412.34773-1.50564,1.44233-2.8407,2.18916-4.25809a10.95526,10.95526,0,0,0,1.53258-5.644c-.02693-.58588.02562-1.33794-.83381-1.38051a1.21449,1.21449,0,0,0-1.24942,1.13118c-.23306,1.30044.02546,2.68745-1.20646,3.73629-2.82469,2.4049-5.49952,5.00764-8.72882,6.88574-3.33579,1.94-6.748,2.18431-10.11.15361a.53209.53209,0,0,1-.24026-.5826,7.935,7.935,0,0,1,.71253-1.7183c1.6843-2.6539,1.70457-2.66492,3.99312-.67473.59191.51473,1.21181,1.09715,1.93465.52693a35.81864,35.81864,0,0,0,7.57056-8.08352c.94913-1.40774.13368-2.09529-2.10268-2.55223A42.76067,42.76067,0,0,1,6.9209,34.126c-1.07864-.36736-2.4792-.72451-2.53127-2.25328-.05586-1.64046,1.41089-1.98451,2.4675-2.3532a26.47566,26.47566,0,0,1,5.01858-1.04972c3.29031-.46411,3.2955-.42293,4.09825-3.74281a6.4934,6.4934,0,0,0,.27379-1.07356c.16057-2.59376,1.9245-2.789,4.91569-2.40731a40.76492,40.76492,0,0,0,10.14893-.06769c1.25085-.15434,2.64251.18905,3.82264-.51916a7.14944,7.14944,0,0,0,.83109-.67852,3.01859,3.01859,0,0,0-.90894-.31336,120.639,120.639,0,0,1-13.43681-.758,44.95407,44.95407,0,0,1-10.3203-2.07314.8754.8754,0,0,1-.53888-.51934,2.10626,2.10626,0,0,1,1.5431-2.83034,14.13823,14.13823,0,0,1,1.71239-.59749A82.25138,82.25138,0,0,1,26.06179,11.421c2.01974-.07427,2.01946-.08189,1.66292-2.25925A18.559,18.559,0,0,1,27.3361,4.8313a3.94248,3.94248,0,0,1,1.08638-2.56A7.9321,7.9321,0,0,1,31.09278.38244,8.8334,8.8334,0,0,1,32.16.096,10.76175,10.76175,0,0,1,35.08685.104C35.25472.12756,35.42.14288,35.58418.16079ZM14.04169,13.82827a1.80848,1.80848,0,0,0-1.41032.99274c-.09682.57821.64092.89309,1.27928,1.04145a80.512,80.512,0,0,0,10.62457,1.29532,5.92749,5.92749,0,0,0,4.09556-1.46364,1.78378,1.78378,0,0,0,.50234-2.01772c-.23022-.74075-.92036-.69593-1.52031-.705C26.253,12.95083,17.23449,13.80017,14.04169,13.82827Zm28.6642-.92166c-1.359.06063-2.72688.04637-4.07417.20439a1.27341,1.27341,0,0,0-.96626,2.11282,4.07174,4.07174,0,0,0,3.8162,1.86514c3.18481-.25316,6.34065-.88071,9.49938-1.40816.28333-.04731.21854-1.12285-.08078-1.23555A18.87709,18.87709,0,0,0,42.70589,12.90661ZM46.5974,56.78033c.94072-.36538,2.39386.26031,3.60117-.69362.45285-.35781.64409-.25381.27847-1.08925-.98887-2.25949-2.90807-1.87215-4.62383-2.23762-2.377-.50633-2.56683-.37947-2.4588,1.8209C43.498,56.69,43.67569,56.82722,46.5974,56.78033ZM12.227,33.01855c.46336.03283.71138.04067.9569.06937,1.61562.18891,1.75579-.84763,1.84939-2.05535.12228-1.57787-.76145-1.90306-2.04773-1.7531-1.69257.19733-3.29039.89976-5.03714.90105a1.44738,1.44738,0,0,0-1.00988.93978c-.15163.74318.53658.95284,1.146,1.11974A13.88594,13.88594,0,0,0,12.227,33.01855ZM15.41247,56.558c2.09543.00658,5.67707.72721,1.47866-1.002-.31028-.1278-.32711-1.4524-.26219-1.7954.25593-1.35227-.17153-1.06353-1.33417-1.00673A12.84711,12.84711,0,0,0,10.256,54.45407a.52581.52581,0,0,0-.0332.92692A8.60223,8.60223,0,0,0,15.41247,56.558ZM52.73653,32.96141c.79516-.20123,2.11533-.49756,3.40478-.89222a1.04652,1.04652,0,0,0,.59105-.80329,1.07863,1.07863,0,0,0-.63342-.79117q-2.44124-.66395-4.92623-1.165a.94455.94455,0,0,0-1.08416.74C49.54051,31.67714,50.47012,32.9834,52.73653,32.96141Zm-30.68365.18272c-.25213-.23022-.60555-.71892-.7625-.66342-.3868.13678-.92373.4227-.7802.9575.07878.29355.57012.75022.72769.69787A1.02555,1.02555,0,0,0,22.05288,33.14413Zm22.56838.22626c-.29838-.35037-.47447-.71323-.76349-.86394-.596-.31076-.87272.16034-.94731.623-.06972.43242.35821.56227.69684.5451A4.563,4.563,0,0,0,44.62126,33.37039Z" />
          </svg>
        </TimerButton>
      </OneThirdColumn>
      <OneThirdColumn>
        <TimerButton
          isTimerActive={isBlinkTimerActive}
          setIsTimerActive={setIsBlinkTimerActive}
          time={blinkTime}
        >
          <p className={styles.traitTimeText}>{blinkTime}</p>
          <svg
            className={styles.centralSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 78.59479 72.06188"
            fill="#292b2f"
          >
            <path d="M0,64.16787c1.62306.33812,3.07258-.542,4.65886-.67238,4.50436-.37018,8.7367.63587,13.06407,1.6084,9.5748,2.15182,19.21428,4.01658,28.83231,5.97422.58582.11924,1.38807.09821,1.32114.78793-.03873.39907-.848.07436-1.32064.01546-11.20857-1.39708-22.41153-2.82-33.55764-4.68037C8.699,66.48357,4.33463,66.15634,0,65.65128Z" />
            <path d="M44.94062,2.38189a5.981,5.981,0,0,1,.00311-.7393c.06861-.58-.10874-1.39418.53935-1.60085.72943-.23259.936.55923,1.2314,1.08013,3.703,6.52975,7.34267,13.09675,11.13811,19.57249C64.10468,31.36164,69.7634,42.36885,76.33192,52.85707c.60458.96536,1.417,1.667,2.04992,2.55568.24112.33858.32269.73366.00276.9708-.34749.25756-.60491-.16436-.82394-.37123-2.51675-2.37693-3.7284-5.63255-5.65072-8.40825-4.16965-6.0207-7.78849-12.39038-11.82472-18.502-4.87733-7.38518-9.4865-14.97-14.24728-22.44577A7.78824,7.78824,0,0,1,44.94062,2.38189Z" />
            <path d="M58.90305,56.68688c1.30791.21221,2.6447.43231,3.983.643.21181.03334.48247.25556.62715-.06047.115-.25127-.05544-.46145-.2583-.62033-.34466-.26994-4.31846-3.05574-5.958-4.18244-.26724-.18365-.71187-.29745-.57659-.72354.13649-.4299,1.17859-.24185,1.32435-.24821,1.52223-.06649,1.54921-.11155.88867-1.46231a2.02229,2.02229,0,0,1,1.08086-3.088,4.95347,4.95347,0,0,1,3.92247-.31879c1.173.41969,2.4037.72684,3.60757,1.08814.19445.05836.38455.18149.39528.37861.0195.35866-.30235.319-.51978.32812-.58339.02451-1.169-.00076-1.752.02837-.32424.01619-.74835-.02-.80559.43535a.78251.78251,0,0,0,.62215.8694c1.24985.391,4.23345,1.24655,4.45671,1.33316.12392.04807.294.17376.30509.27906.03318.31377-1.2732.27073-1.71058.27367-.25466.00172-.53382-.003-.59481.28012-.05755.26711.184.42026.40337.5318a31.09216,31.09216,0,0,0,4.16764,1.70488,4.48944,4.48944,0,0,1,1.68711.731c-.57992.46177-4.24045-.36716-5.5082-.23028-.32337.03491-.76221.08844-.82935.47482-.05262.30283,1.27256,1.24861,1.66052,1.53954a4.75448,4.75448,0,0,1,2.2164,4.86734c-.21984,1.35528.72337,2.38469,1.4469,3.39947,1.40368,1.96871,2.88368,3.88314,4.33928,5.81463.12252.16256.271.32738.10632.49614-.17221.17648-.36585.01386-.49941-.1075-2.87135-2.60935-6.35591-4.58918-8.64082-7.776-1.38207-1.9276-3.29789-2.40737-5.28549-2.98918-.64935-.19007-.92179.03027-.68077.73826a9.091,9.091,0,0,0,1.19754,2.484,1.4369,1.4369,0,0,1-.11346,2.12584,24.32553,24.32553,0,0,1-2.38343,1.67421c-.13642.091-.37049.228-.50136-.02051a.5098.5098,0,0,1,.00863-.40444c.17249-.34788.37883-.67925.57676-1.01424a2.93252,2.93252,0,0,0-.22612-3.51916c-1.03614-1.40578-2.01276-2.85552-3.00878-4.29064-.242-.34865-.64476-.679-.3953-1.16514C57.94867,56.45831,58.46194,56.78153,58.90305,56.68688Z" />
            <path d="M9.63631,31.18307c3.31948.53861,6.71224,1.0972,10.10877,1.63189.53757.08463,1.22451.64861,1.59171-.15346.292-.63774-.14071-1.17117-.65557-1.57441C19.80649,30.402,9.721,23.33163,5.55979,20.47207c-.67826-.4661-1.80674-.75493-1.4634-1.83633.34642-1.0911,2.99128-.61382,3.36122-.63,3.8634-.16874,3.93189-.28311,2.25544-3.71132-1.73689-3.5518-.812-6.23687,2.74321-7.83737,3.212-1.446,6.35144-2.09848,9.95523-.80909,2.9771,1.06517,6.10058,1.84471,9.156,2.7617.49353.14811.976.46062,1.00323.96093.04951.91026-.76736.80955-1.3192.83274-1.48065.06222-2.967-.00191-4.44662.072-.82292.04111-1.8993-.0508-2.04459,1.10494a1.986,1.986,0,0,0,1.579,2.20652c3.17213.99245,10.74449,3.16375,11.31113,3.38356.31451.122.746.441.7743.70827.08421.79633-3.23137.6871-4.34144.69457-.64633.00435-1.35484-.00756-1.50963.71094-.14605.67793.4671,1.06662,1.02375,1.3497a78.91416,78.91416,0,0,0,10.57748,4.327c1.49028.50321,3.05643.76514,4.28184,1.85529-1.47184,1.172-10.76222-.93183-13.97978-.58444-.8207.08861-1.93449.22447-2.10488,1.2051-.13354.76858,3.22975,3.169,4.21441,3.90734,4.13465,3.10044,6.5181,6.84857,5.6252,12.35329-.55794,3.43972,1.83592,6.05236,3.67223,8.62785,3.56255,4.99658,7.31878,9.85542,11.0131,14.75752.31093.41259.68776.83089.26983,1.25921-.43706.44791-.92854.03519-1.26749-.27284-7.28749-6.62251-16.13129-11.64731-21.9304-19.7354-3.5077-4.89223-8.37-6.10989-13.41457-7.58651-1.648-.48241-2.33949.07683-1.72778,1.87369a23.073,23.073,0,0,0,3.03935,6.3043c1.42186,1.95,1.4587,3.89845-.288,5.39538a61.739,61.739,0,0,1-6.04912,4.24916c-.34625.23091-.94031.57868-1.27247-.05207a1.29387,1.29387,0,0,1,.0219-1.02646c.53334-1.07563,1.19417-2.08906,1.78859-3.13268a7.23531,7.23531,0,0,0-.52909-7.87381C12.77,42.56146,10.178,38.70833,7.532,34.89585c-.61413-.88487-1.63642-1.72326-1.0033-2.95713C7.21409,30.603,8.51678,31.42331,9.63631,31.18307Z" />
          </svg>
        </TimerButton>
      </OneThirdColumn>
    </RowContainer>
  );
};