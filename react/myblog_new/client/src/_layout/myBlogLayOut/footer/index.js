import { FooterWrapper,FooterTamplate,FooterRight,Footertxt } from "./style";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons";

const LayOutFooter = () => {
  return (
    <>
        <FooterWrapper id="footer_wrapper">
          <FooterTamplate>
            <Footertxt>
                <p>
                   SeongYong Kim Group<br/>
                   (주)사람인, 우 : 08378, 구로구 디지털로 34길 43, 14층, 대표 : 김용환
                   사업자등록 : 113-86-00917, 직업정보제공사업 : 서울 관악 제 2005-6호, 통신판매업 : 제 2005-02339호
                   <br/>
                   <br/>
                   Copyright (c) (주)사람인. All rights reserved.
                </p>
            </Footertxt>
            <FooterRight>
              <ul> 
                  <li>
                      GO! <span>KSY KSY</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faInstagram}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faYoutube}/>
                  </li>
              </ul>
            </FooterRight>
            </FooterTamplate>
        </FooterWrapper>
    </>
  );
};

export default LayOutFooter;