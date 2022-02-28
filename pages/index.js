import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Product from "../Images/hey.webp";
import BgShining from "../Images/eros.webp";
import Chaya from "../Images/chayaz.webp";
import Chemaa from "../Images/chem3n7l.webp";
import Vitamines from "../Images/vitamines.webp";
import Sea from "../Images/zabad.webp";
import Loban from "../Images/lobandakar.webp";
import Zelk from "../Images/zelk.webp";
import Argan from "../Images/argan.webp";
import Helba from "../Images/7lba.webp";
import Semsem from "../Images/zsmsms.webp";
import BgTitle from "../Images/title.webp";
import KhayrEddin from "../Images/oman2.jpg";
import Khalid from "../Images/oman1.jpeg";
import Ismaail from "../Images/ismail.jpg";
import BgReviews from "../Images/bgreviews.webp";
import Delivery from "../Images/delivery.webp";
import Cash from "../Images/cash.webp";
import Quality from "../Images/quality.webp";
import Support from "../Images/support.webp";
import BgServices from "../Images/bgservices.webp";
import Simple from "../Images/proMax-1.webp";
import ThanksImage from "../Images/thanks.webp";
import {
  FaArrowLeft,
  FaCartPlus,
  FaCheckCircle,
  FaFireAlt,
  FaMapMarkerAlt,
  FaAngleDoubleUp,
  FaPenAlt,
} from "react-icons/fa";
import { Link, animateScroll, Element } from "react-scroll";
import { GiPowerLightning } from "react-icons/gi";
import { InView } from "react-intersection-observer";
export default function Home() {
  const [nameUser, setNameUser] = useState("");
  const [addresse, setAddresse] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [errorF, setError] = useState(false);
  const [errorP, setErrroPhone] = useState(false);
  const [errorPNumb, setCheckPhoneNumb] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [xdata, setXdata] = useState([]);
  const [btn, setBtn] = useState(true);
  const [bbgAttached, setBbbgAttached] = useState(false);
  var { GoogleSpreadsheet } = require("google-spreadsheet");
  const ImageSizes = {
    width: "100%",
    height: "100%",
  };
  var ver = "#947257";
  useEffect(() => {
    if (window.innerWidth <= 800) {
      setBbbgAttached(true);
    } else {
      setBbbgAttached(false);
    }
  });
  if (errorF || errorP || errorPNumb) {
    setTimeout(() => {
      setError(false);
      setErrroPhone(false);
      setCheckPhoneNumb(false);
    }, 3000);
  }
  const returnData = (para) => {
    setNameUser(para.Name);
    setPhone(para.Phone);
    setAddresse(para.Addresse);
    setCity(para.City);
    setThanks(false);
  };
  const resetAll = () => {
    setNameUser("");
    setAddresse("");
    setPhone("");
    setCity("");
  };
  const submitingForm = (e) => {
    e.preventDefault();
    var SPREADSHEET_ID = "1I8vd-dwVmxSar9Kg9OleJm1jCFS0-ys4mQObapOsH7c";
    var SHEET_ID = "0";
    var CLIENT_EMAIL = "erossadui@eros-powers-saudi-arabia.iam.gserviceaccount.com";
    var PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfERrrmiSlxQW2\ndn/EL7tjmuOt3EI60PVmhtHLMGX5gElBJ21TthOLGTcHgzyV4uKDIndm5+cWadi0\nSOaG20K+AyTAQvpJxoKHSbkxShgeQ+XFc2LYbGwxvJn5nIUmPHPbpbScRk2+Qbwr\ny1036pLCe+GHPBn4IzzcNKNspl2I+fyD7L6VX8KRivjr2lNdziNNk1PxfIdoGght\ntd94EJ/2fp8/TUfnOwPu0waQqdxiR0S0j/50uL7+e91gUaS0JPkmufbfSQdVe5wm\nxfOZAr47a3euEqFRG9myR1We20RKkD3GCUUfK0gx/PA56Bk3oqCc93MYFSoSw5ef\nKOj2exurAgMBAAECggEAAtYapWIKdNl0ugWWggunCyY85XtZXWEfSLFViYqWyhvx\nsnOFU71mz2knF3KaOikuIgNGuJM6bKZ9UogMpd6NBYRa1TU2IoPWps23iEIQ+G38\nT+Jrb2TnickaJpHi64UFow0399cASRWbYsO6j5lJyqWY2bRGcxIPYltrh2MKce6a\nYvZp1DxbWYg/3pURztSUAU/mRW87UR1BQ14kcfKduI6/B+7V/sbBibixKXbgXBt9\nTSZpac081t3quxm+ggfTYF3dL3hhNMSxpvmdQeAF9rnXnRGhVCr/Scu0+gNRn/Ww\n2Jcx6fuB2ylu3BHPgqkJnr2nezoBeurrsa29KO3Q0QKBgQDeQ29vlbkVQ0lhNQkh\nzx41W8s4Evu8xFoutKbWazXnzoUqz8pus1UGH3l9IicSRKud4nwpyiiNXtbbH0w3\nqNA7tJF+GzqpRHXZSHPfQ08Ia8o1KbT25td9gWiup2l3CGzynM1u6Fj2nwNA3+nV\nOmTF/IZMQor4oa/IBRdsQnTdWQKBgQC3NgSmLQtoD7wubJxx2mY6YOmhKcBgAqeg\ndEVcXO5rk5vI7wlTnSXu+/Hmi0mm5LpRo6eTmdDD776YneN4DAC0d0Z+hQ99Z3zX\nOfaL+AMMFxZ5IK51I4ZrAFNrktQnaJSX0PD7J06bpZ7En0pJJMW+oodcLkk9HN5Q\nBKiL2QIMowKBgAjpo1pSIq3bmOGxAsC8UXXKTIffGwEizor464fFnM/C1Ew3MOLn\nhg1Mzc5axD5TSp52KoxyctXYa701sBS7TD5Yq0znQp7vA9rGsP7O8ChiSiV/mqYb\n86AwxEXcqLoBOH0yFHrSDl81WSgM0o+eW9QkoC4GrRPzR905dwr8TzthAoGBAIig\nTv1BsDTtLw+LzWsWTJASf4fBJAY1VJ5Stvr3DpHI5S8GG3VwRr6ewjmD++vqvItv\nOOPYnBfSLNeRPvXiNZBfNoHZZsDFMRMr1ZFx5YvZl9fCqHcQhAg9mPgq6e1tjwpc\nNamGGZf2/ZxxkatUMedFOx5iIhnh8mPH5Y1MyrtzAoGBAIOObVS7CeWeofOFfOyr\nwvJucGUYx2XJ6p10Sf4YhulcansyHcRRN9nDxAdnxlYcmg69KeeYAJGoPK47TxsZ\np7PiiL/5rHnuWjKtKShKQOwqeKI6NN4KZg4p3acYvX+uF//O9LI9Vk/Gt8Gw8KgX\niQfnSI4wzvP9NYu4RoRmQEOw\n-----END PRIVATE KEY-----\n";
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    const deltaDate = new Date();
    const exactDate = deltaDate.toLocaleDateString();
    const exactTime = deltaDate.toLocaleTimeString();
    const combineDateTime = exactDate + " " + "*****" + " " + exactTime;
    const appendSpreadsheet = async (row) => {
      try {
        await doc.useServiceAccountAuth({
          client_email: CLIENT_EMAIL,
          private_key: PRIVATE_KEY,
        });
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        const result = await sheet.addRow(row);
      } catch (e) {
        console.error("Error: ", e);
      }
    };
    if (
      phone.length <= 0 ||
      nameUser.length <= 0 ||
      addresse.length <= 0 ||
      city.length <= 0
    ) {
      return setError(true);
    } else if (isNaN(phone)) {
      return setErrroPhone(true);
    } else if (phone.length < 10) {
      setCheckPhoneNumb(true);
    } else {
      const newRow = {
        Name: nameUser,
        Phone: phone,
        City: city,
        Addresse: addresse,
        Date: combineDateTime,
      };
      fbq("track", "Lead");
      appendSpreadsheet(newRow)
        .then(() => resetAll())
        .catch((err) => console.log(err));
      setTimeout(() => {
        setThanks(true);
      }, 3000);
      setXdata([newRow]);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Eros Powers</title>
        <meta
          name="description"
          content="Eros powers الحل الأمثل لمشاكلك الجنسية"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href={Product} />
      </Head>
      {thanks ? (
        <div className={styles.__Thanks_Parent}>
          <div className={styles.__Thanks_Child}>
            <div className={styles.sub_Thanks__Child}>
              <span
                onClick={() => setThanks(false)}
                className={styles.md__Close}
              >
                الرجوع للرّئيسيّة
              </span>
              <h2>شُـــكراً</h2>
              <h2 className={styles.__make__it__Green}>
                لقد تمّت العمليّة بنجاح
              </h2>
              <div className={styles._handle__Svg}>
                <img
                  src={ThanksImage}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div className={styles.handle_users}>
                <h3>
                  المرجو التأكد من رقم الهاتف
                  <br />
                  لكي لا يكون هناك مشكل في الإتصال
                </h3>
                {xdata.map((data, i) => {
                  return (
                    <div className={styles.my__Ul} key={i}>
                      <ul>
                        <li>الهآتف : {data.Phone}</li>
                      </ul>
                      <button onClick={() => returnData(data)}>
                        <span>
                          {" "}
                          <FaPenAlt></FaPenAlt>{" "}
                        </span>{" "}
                        تعديل{" "}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <style jsx global>
        {`
          body {
            width: 100%;
            height: 100%;
            margin: 0%;
            padding: 0%;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            direction: rtl;
            font-family: "Amiri", serif;
            list-style: none;
          }
        `}
      </style>
      <section id="">
        <div className={styles.__hero}>
          <div className={styles.__hero__child}>
            <div className={styles.__hold_content__Hero}>
              <h1>EROS POWERS</h1>
              <h2>القوة و الطاقة في مُنتج واحد</h2>
              {btn ? (
                <div className={styles.__fixed__Btn}>
                  <Link
                    to="target"
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={2000}
                  >
                    <button>
                      أطــلب الآن
                      <span>
                        <FaCartPlus size="20px" />
                      </span>
                    </button>
                  </Link>
                </div>
              ) : null}
            </div>
            <div>
              <img
                src={Simple}
                style={ImageSizes}
                alt="eros powers maroc الحل لمشاكلك الجنسية"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            backgroundImage: `url(${BgTitle})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: bbgAttached ? "" : "fixed",
          }}
          className={styles.__components}
        >
          <h1>مُكوّنات ٌُEROS POWERS ؟</h1>
          <div className={styles.__components__child}>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Chaya}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زُبدة الشايا</h2>
            </div>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Chemaa}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>شمع النّحل</h2>
            </div>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Vitamines}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>فيتاميات</h2>
            </div>
          </div>
          <div className={styles.__components__child}>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Helba}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زَيت الحلبة</h2>
            </div>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Sea}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زَبد البحر</h2>
            </div>

            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Zelk}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زَيت العلق</h2>
            </div>
          </div>
          <div className={styles.__components__child}>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Argan}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زَيت أرگـــآن</h2>
            </div>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Loban}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>اللُّبــآن الذكر</h2>
            </div>
            <div className={styles.__each__Compo__sub_Child}>
              <div className={styles.__compo__image__handler}>
                <img
                  src={Semsem}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <h2>زَيت السّمسم</h2>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            background: bbgAttached ? ver : `url(${BgShining})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={styles.__power}
        >
          <h1>سر قوّة EROS POWERS ؟</h1>
          <div className={styles.__child__Power}>
            <ul>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                يزيد وزن و حجم قضيبك
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                الإحساس بأنك أكثر شبابا و عنفوانا{" "}
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                الزيادة في الرغبة الجنسية{" "}
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                الزيادة في قوتك الإغرائية
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                زيادة في سعادتك و إحساسك أثناء اللقاء الجنسي
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                تحسن وصول الدم لقضيبك
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <li>
                <span>
                  <FaCheckCircle />
                </span>
                تكبير وتطويل القضيب وعلاج سرعة القذف
                <i>
                  <FaFireAlt />
                </i>
              </li>
              <div>
                <Link to="target" smooth={true} duration={2000}>
                  <button>
                    أطــلب الآن
                    <span>
                      <FaCartPlus size="20px" />
                    </span>
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section id="really">
        <div className={styles.__questions}>
          <h1> EROS POWERS هو الحل ؟</h1>
          <div className={styles.__questions__Child}>
            <div>
              <ul>
                <li>
                  <span>
                    <GiPowerLightning />
                  </span>
                  هل تعاني في علاقتك الجنسية ؟
                </li>
                <li>
                  <span>
                    <GiPowerLightning />
                  </span>
                  تخجل من الحجم الصغير لعضوك ؟
                </li>
                <li>
                  <span>
                    <GiPowerLightning />
                  </span>
                  لطالما أردت ارضاء زوجتك أو صديقتك ؟
                </li>
                <li>
                  <span>
                    <GiPowerLightning />
                  </span>
                  أردتَ دائما الحصول على مُنتج فعّآل ، قوي وطبيعي في نفس الوقت؟
                </li>
                <h3>
                  EROS هو الحل لمشاكلك الجنسيّة
                  <span>
                    <FaArrowLeft />
                  </span>
                </h3>
              </ul>
            </div>
            <div className={styles.__qst_handle__image}>
              <img
                src={Product}
                style={ImageSizes}
                alt="eros powers maroc الحل لمشاكلك الجنسية"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="reviews">
        <div
          style={{
            backgroundImage: `url(${BgReviews})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: bbgAttached ? "" : "fixed",
          }}
          className={styles.__reviews}
        >
          <div className={styles.__reviews__Child}>
            <div className={styles.__each__review__child__sub}>
              <div className={styles.__reviews__image_handler}>
                <img
                  src={KhayrEddin}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div className={styles.__review__content}>
                <h2> يوسف الفارسي</h2>
                <p>
                  جربته لأوّل مرة الأسبوع الماضي <br />
                  وبفضل الله جل جلاله و هذا المنتوج تحسنّت حياتي الجنسية للأفضل
                </p>
              </div>
            </div>
            <div className={styles.__each__review__child__sub}>
              <div className={styles.__reviews__image_handler}>
                <img
                  src={Khalid}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div className={styles.__review__content}>
                <h2>خالد الدوسري</h2>
                <p>
                  و الله منتوج جد مؤثر
                  <br />
                  زوجتي أصبحت سعيدة جداً و متفاجئة
                  <br />
                  منذ الإستعمال الأول لإيروس
                </p>
              </div>
            </div>
            <div className={styles.__each__review__child__sub}>
              <div className={styles.__reviews__image_handler}>
                <img
                  src={Ismaail}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div className={styles.__review__content}>
                <h2> نواف بن عبد الله الخوالدي</h2>
                <p>
                  عانيت كثيرا من مشكل القذف السّريع و ذعف الإنتصاب
                  <br />
                  حتى أنني و زوجتي دخلنا في مشاكل لا تطاق
                  <br />
                  ولكن إيروق قام باللاّزم و كل الشكر له
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div
          style={{
            backgroundImage: `url(${BgServices})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: bbgAttached ? "" : "fixed",
          }}
          className={styles.__services}
        >
          <h1>الخدمات التي نوفّروها ؟</h1>
          <div className={styles.__services__Child}>
            <div className={styles.__each__services__sub_Child}>
              <div className={styles.__handle__icons__servicess}>
                <img
                  src={Delivery}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div>
                <p>سرّية العُلبة و المنتوج</p>
              </div>
            </div>
            <div className={styles.__each__services__sub_Child}>
              <div className={styles.__handle__icons__servicess}>
                <img
                  src={Cash}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div>
                <p>الدّفع عند الإستلام</p>
              </div>
            </div>
            <div className={styles.__each__services__sub_Child}>
              <div className={styles.__handle__icons__servicess}>
                <img
                  src={Support}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div>
                <p>خدمة الزّبناء 24/7</p>
              </div>
            </div>
            <div className={styles.__each__services__sub_Child}>
              <div className={styles.__handle__icons__servicess}>
                <img
                  src={Quality}
                  style={ImageSizes}
                  alt="eros powers maroc الحل لمشاكلك الجنسية"
                />
              </div>
              <div>
                <p>الجودة مضمونة %100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="form_Submited" className={styles.handle__Form}>
        <h1>آطلب الآن و آستفد من تخفيض %50 من الثمن القديم</h1>
        <div className={styles._flx_form_image}>
          <Element id="target">
            <InView>
              {({ ref, inView }) => (
                <div ref={ref}>
                  {inView ? setBtn(false) : setBtn(true)}
                  <form onSubmit={submitingForm} className={styles.form__tar}>
                    <div className={styles.__hanbdle__Errors}>
                      {errorF ? <h3> المرجو ملء جميع الخآنآت </h3> : null}
                      {errorP ? <h3>رقم الهآتف لا يتكون من الأرقآم </h3> : null}
                      {errorPNumb ? (
                        <h3>رقم الهآتف الدي تم إدخآله غير مكتمل </h3>
                      ) : null}
                    </div>
                    <div className={styles.handle__Prices}>
                      <h5>السعر القديم : 598 ريال سعودي</h5>
                      <h4>السعر الجديد : 299 ريال سعودي</h4>
                    </div>
                    <div>
                      <input
                        type="text"
                        value={nameUser}
                        onChange={(e) => setNameUser(e.target.value)}
                        placeholder="الإسم الكآمل"
                        name="name"
                        id="name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="المدينة"
                        name="city"
                        id="city"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={addresse}
                        onChange={(e) => setAddresse(e.target.value)}
                        placeholder="العنوآن"
                        name="addresse"
                        id="addresse"
                      />
                    </div>
                    <div id="target">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="رقم الهآتف"
                        name="phone"
                        id="phone"
                      />
                    </div>
                    <div className={styles.__handle__inp_SU}>
                      <button className="mybtnselector">
                        تأكيد الطّــلبيّة{" "}
                        <span>
                          <FaCartPlus />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </InView>
          </Element>
          <div>
            <img
              src={Product}
              width="100%"
              height="100%"
              alt="eros powers maroc الحل لمشاكلك الجنسية"
            />
          </div>
        </div>
      </section>
      <footer className={styles.__footer}>
        <div className={styles.__footer__Child}>
          <div>
            <h2>جميع الحقوق محفوظة © 2021</h2>
          </div>
          <div className={styles.__handle__f_span}>
            <span
              onClick={() =>
                animateScroll.scrollToTop({
                  smooth: true,
                  duration: 2500,
                })
              }
            >
              <FaAngleDoubleUp />
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
