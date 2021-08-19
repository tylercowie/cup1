import React from "react";
import TrolleyIcon from "../TrolleyIcon";
import CTA from "../CTA";
import CTAs from "../CTAs";
import CTAs2 from "../CTAs2";
import Tab from "../Tab";
import CTAs3 from "../CTAs3";
import CupcakeInfo from "../CupcakeInfo";
import "./X1Homepage.css";

function X1Homepage(props) {
  const {
    x1Homepage,
    shop,
    ourStory,
    whyMissCupcake,
    number,
    title,
    subtitle,
    image95,
    image1,
    image2,
    title2,
    subtitle2,
    whyMissCupcake2,
    title3,
    mini_Party_Catering_Carrot_Cupcake_,
    title4,
    subtitle3,
    image97,
    title5,
    subtitle4,
    cupcake3,
    title6,
    subtitle5,
    addToCart,
    image3,
    title7,
    subtitle6,
    image4,
    title8,
    subtitle7,
    addToCart2,
    image5,
    title9,
    subtitle8,
    addToCart3,
    image6,
    image7,
    title10,
    subtitle9,
    image8,
    title11,
    subtitle10,
    image9,
    title12,
    subtitle11,
    image10,
    title13,
    subtitle12,
    title14,
    subtitle13,
    ourStory2,
    image11,
    title15,
    copyright,
    subtitle14,
    subtitle15,
    subtitle16,
    subtitle17,
    subtitle18,
    inputType,
    inputPlaceholder,
    subtitle19,
    subtitle20,
    subtitle21,
    place,
    cTAsProps,
    cTAs2Props,
    tabProps,
    cTAs3Props,
    tab2Props,
    tab3Props,
    cupcakeInfoProps,
    cTAs32Props,
    cTAs33Props,
    cTAs34Props,
    cTAs35Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x1-homepage-1 screen" style={{ backgroundImage: `url(${x1Homepage})` }}>
        <div className="flex-row">
          <div className="words">
            <div className="shop lato-black-grape-18px">{shop}</div>
            <div className="our-story smart-layers-pointers lato-normal-grape-18px">{ourStory}</div>
            <div className="why-miss-cupcake smart-layers-pointers lato-normal-grape-18px">{whyMissCupcake}</div>
          </div>
          <div className="icon">
            <div className="overlap-group4">
              <TrolleyIcon />
              <div className="ellipse-1"></div>
              <div className="number lato-normal-grape-14px">{number}</div>
            </div>
          </div>
        </div>
        <div className="flex-row-1">
          <div className="miss-cupcake">
            <h1 className="title-2 wendyone-normal-grape-120px">{title}</h1>
            <div className="subtitle-1 lato-normal-grape-18px">{subtitle}</div>
            <CTA />
          </div>
          <img className="image-95 animate-enter1" src={image95} />
        </div>
        <div className="flex-row-2">
          <div className="flex-col">
            <img className="image-1 animate-enter2" show-on-scroll src={image1} />
            <img className="image-2 animate-enter3" show-on-scroll src={image2} />
          </div>
          <div className="simple-sweet-life">
            <div className="title-3 wendyone-normal-grape-90px">{title2}</div>
            <div className="subtitle-2 lato-normal-grape-18px">{subtitle2}</div>
            <div className="cta">
              <div className="overlap-group">
                <div className="rectangle-1"></div>
                <div className="why-miss-cupcake-1 lato-normal-corn-field-16px">{whyMissCupcake2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="title-4 wendyone-normal-grape-90px animate-enter" show-on-scroll>
          {title3}
        </div>
        <div className="flex-row-3">
          <div className="group-128">
            <img className="minipartycate-cupcakelarge-2" src={mini_Party_Catering_Carrot_Cupcake_} />
            <div className="cupcake-info">
              <div className="title-5 wendyone-normal-grape-32px">{title4}</div>
              <p className="subtitle-3 lato-normal-grape-16px">{subtitle3}</p>
              <CTAs tabProps={cTAsProps.tabProps} />
            </div>
          </div>
          <div className="group-129">
            <img className="image-97" src={image97} />
            <div className="cupcake-info-2">
              <div className="title-6 wendyone-normal-grape-32px">{title5}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle4}</p>
              <CTAs2 tabProps={cTAs2Props.tabProps} />
            </div>
          </div>
          <div className="group-31">
            <img className="cupcake-3" src={cupcake3} />
            <div className="cupcake-info-3">
              <div className="title wendyone-normal-grape-32px">{title6}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle5}</p>
              <div className="ct-as">
                <Tab number={tabProps.number} />
                <div className="cta-1">
                  <div className="overlap-group-1">
                    <div className="add-to-cart lato-normal-corn-field-16px">{addToCart}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row-4">
          <div className="group-32">
            <img className="image-3" src={image3} />
            <div className="cupcake-info-4">
              <div className="title-7 wendyone-normal-grape-32px">{title7}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle6}</p>
              <CTAs3 tabProps={cTAs3Props.tabProps} />
            </div>
          </div>
          <div className="group-3">
            <img className="image-4" src={image4} />
            <div className="cupcake-info-1">
              <div className="title-1 wendyone-normal-grape-32px">{title8}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle7}</p>
              <div className="ct-as">
                <Tab number={tab2Props.number} />
                <div className="cta-2">
                  <div className="overlap-group-2">
                    <div className="add-to-cart-1 lato-normal-corn-field-16px">{addToCart2}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-3">
            <img className="image-5" src={image5} />
            <div className="cupcake-info-1">
              <div className="title-1 wendyone-normal-grape-32px">{title9}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle8}</p>
              <div className="ct-as">
                <Tab number={tab3Props.number} />
                <div className="cta-3">
                  <div className="overlap-group-3">
                    <div className="add-to-cart-2 lato-normal-corn-field-16px">{addToCart3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row-5">
          <div className="group-35">
            <img className="image-6" src={image6} />
            <CupcakeInfo
              title={cupcakeInfoProps.title}
              subtitle={cupcakeInfoProps.subtitle}
              cTAs3Props={cupcakeInfoProps.cTAs3Props}
            />
          </div>
          <div className="group-36">
            <img className="image-7" src={image7} />
            <div className="cupcake-info-5">
              <div className="title-8 wendyone-normal-grape-32px">{title10}</div>
              <p className="subtitle-4 lato-normal-grape-16px">{subtitle9}</p>
              <CTAs3 className={cTAs32Props.className} tabProps={cTAs32Props.tabProps} />
            </div>
          </div>
          <div className="group-37">
            <img className="image-8" src={image8} />
            <div className="cupcake-info">
              <div className="title-9 wendyone-normal-grape-32px">{title11}</div>
              <p className="subtitle-5 lato-normal-grape-16px">{subtitle10}</p>
              <CTAs3 className={cTAs33Props.className} tabProps={cTAs33Props.tabProps} />
            </div>
          </div>
        </div>
        <div className="flex-row-6">
          <div className="group-38">
            <img className="image-9" src={image9} />
            <div className="cupcake-info">
              <div className="title-10 wendyone-normal-grape-32px">{title12}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle11}</p>
              <CTAs3 className={cTAs34Props.className} tabProps={cTAs34Props.tabProps} />
            </div>
          </div>
          <div className="group-39">
            <img className="image-10" src={image10} />
            <div className="cupcake-info">
              <div className="title wendyone-normal-grape-32px">{title13}</div>
              <p className="subtitle lato-normal-grape-16px">{subtitle12}</p>
              <CTAs3 tabProps={cTAs35Props.tabProps} />
            </div>
          </div>
        </div>
        <div className="once-upon-a-time">
          <div className="text">
            <div className="title-11 wendyone-normal-grape-120px">{title14}</div>
            <div className="subtitle-6 lato-normal-grape-18px">{subtitle13}</div>
            <div className="cta-4">
              <div className="overlap-group-4">
                <div className="our-story-1 lato-normal-corn-field-16px">{ourStory2}</div>
              </div>
            </div>
          </div>
          <img className="image-11" src={image11} />
        </div>
        <div className="footer">
          <div className="flex-row-7">
            <div className="title-12 wendyone-normal-oasis-32px">{title15}</div>
            <div className="copyright lato-bold-oasis-18px">{copyright}</div>
            <div className="flex-col-1">
              <div className="subtitle-7 lato-bold-oasis-18px">{subtitle14}</div>
              <div className="subtitle-8 lato-bold-oasis-18px">{subtitle15}</div>
              <div className="subtitle-9 lato-bold-oasis-18px">{subtitle16}</div>
              <div className="subtitle-10 lato-bold-oasis-18px">{subtitle17}</div>
            </div>
          </div>
          <div className="flex-col-2">
            <div className="subtitle-11 lato-bold-oasis-18px">{subtitle18}</div>
            <div className="overlap-group3 border-2px-oasis">
              <input
                className="subtitle-12 lato-bold-oasis-16px"
                name="subtitle"
                placeholder={inputPlaceholder}
                type={inputType}
              />
            </div>
            <div className="flex-row-8">
              <div className="overlap-group2">
                <div className="subtitle-13 lato-bold-oasis-18px">{subtitle19}</div>
                <div className="subtitle-14 lato-bold-oasis-18px">{subtitle20}</div>
              </div>
              <div className="subtitle-15 lato-bold-oasis-18px">{subtitle21}</div>
            </div>
          </div>
          <div className="cta-5">
            <div className="overlap-group-5">
              <div className="place lato-normal-grape-16px">{place}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default X1Homepage;
