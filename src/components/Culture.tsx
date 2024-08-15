import styled from "styled-components";
import FlashingImages from "./FlashingImages";

const Culture = () => {
  return (
    <CultureContainer>
      <CultureWrap>
        <TitleWrap>
          <DynamicImageArea>
            <img src="/images/title/culture-title-1.0ad31c9.svg" alt="" />
            <img src="/images/title/culture-title-2.9ae4cd7.svg" alt="" />
          </DynamicImageArea>
          <CultureImageArea>
            <FlashingImages altString="culture_" imagePaths={["/images/culture/culture-ill-01.8d5fce3.png", "/images/culture/culture-ill-02.f3c2bb8.png", "/images/culture/culture-ill-03.b182292.png"]} interval={500} />
            <div>
              <FlashingImages altString="culture_" imagePaths={["/images/culture/culture-title-finger-01.5b0ce8d.png", "/images/culture/culture-title-finger-02.22d4d16.png"]} interval={500} />
            </div>
          </CultureImageArea>
          <MessageArea>
            <p>
              DF에서는 동료들에게 고마운 마음을 전하고
              <br />
              일상에 원동력이 될 수 있도록
              <br />
              다양한 문화와 복지를 제공하고 있어요!
            </p>
          </MessageArea>
        </TitleWrap>
      </CultureWrap>
    </CultureContainer>
  );
};

export default Culture;

const CultureContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7d10f;
  padding: 5.88542vw 0 0;
`;

const CultureWrap = styled.div`
  width: 95.83333vw;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  width: 100%;
  div {
  }
`;

const DynamicImageArea = styled.div`
  display: flex;
  gap: 4.16667vw;
  :nth-child(1) {
    width: 14.79167vw;
  }
  :nth-child(2) {
    width: 52.08333vw;
  }
`;

const CultureImageArea = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  img {
    width: 42.60417vw;
    aspect-ratio: 966 / 274;
  }
  div {
    position: absolute;
    top: -1.25rem;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    img {
      width: 15.625vw;
      height: 26.04167vw;
    }
  }
`;

const MessageArea = styled.div`
  font-size: 1.35417vw;
  font-family: "Pretendard";
  font-weight: 700;
  line-height: 1.30769;
  margin: -4.6875vw 0 0 3.33333vw;
`;
