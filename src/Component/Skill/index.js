import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillContainer = styled.div`
  padding: 1rem;

  span:first-child {
    color: #4863a0;
  }
`;

const SkillContent = styled.div`
  .txt_area {
    max-width: 900px;
    margin: 0 auto 20px;
    padding-bottom: 300px;

    .skill {
      background: url(${process.env.PUBLIC_URL}/image/skillHistory.png) 50% 0 no-repeat;
      height: 689px;
      position: relative;

      dl {
        width: 50%;
        position: absolute;
        top: -6px;
        text-align: left;
        dt {
          position: relative;
          top: 0;
          font-weight: bold;
          font-size: ${props => (props.resize === 300 ? '1rem' : '2.78rem')};
          padding-left: 1rem;
        }
        dd {
          top: 5rem;
          right: 5rem;
          font-size: ${props => (props.resize === 300 ? '1rem' : '1.21rem')};
          line-height: 1.64em;
          margin: 0px;
          text-align: center;
        }
      }
      .skill_l {
        text-align: right;

        dt {
          right: 0;
          padding-right: 1rem;
        }
        dd {
          top: 5rem;
          text-align: center;
        }
      }
      .skill_r {
        right: 0px;
        dt {
          left: 0;
        }
      }

      .skill-web {
        top: 166px;
        width: 50%;
      }
      .skill-framework {
        top: 334px;
      }
      .skill-database {
        top: 500px;
        width: 50%;
      }
      .skill-version {
        top: 674px;
      }
    }
  }
`;

const Skill = props => {
  const {resize} = props;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <SkillContainer id="skill">
      <SkillContent className="content3" id="sitemap1-2" resize={resize}>
        <h1>
          <span>S</span>kill
        </h1>
        <div className="txt_area">
          <div className="skill">
            <dl className="skill_r history2019" data-aos="fade-left">
              <dt>Language</dt>
              <dd>&middot; Java</dd>
            </dl>

            <dl className="skill_l skill-web" data-aos="fade-right">
              <dt>WEB</dt>
              <dd>&middot; JavaScript(ES6+) </dd>
              <dd>&middot; React</dd>
              <dd>(Hooks, Redux, Saga)</dd>
              <dd>&middot; Ajax, Axios </dd>
              <dd>&middot; jQuery </dd>
              <dd>&middot; Type Script </dd>
            </dl>

            <dl className="skill_r skill-framework" data-aos="fade-left">
              <dt>FrameWork</dt>
              <dd>&middot; Spring </dd>
              <dd>&middot; MyBatis</dd>
              <dd>&middot; React Bootstrap</dd>
              <dd>&middot; Next.js</dd>
              <dd />
            </dl>

            <dl className="skill_l skill-database" data-aos="fade-right">
              <dt>DataBase</dt>
              <dd>&middot; Oracle</dd>
              <dd>&middot; MySQL</dd>
            </dl>

            <dl className="skill_r skill-version" data-aos="fade-left">
              <dt>Version Control</dt>
              <dd>&middot; Google Drive</dd>
              <dd>&middot; Git</dd>
            </dl>
          </div>
        </div>
      </SkillContent>
    </SkillContainer>
  );
};

Skill.propTypes = {
  resize: PropTypes.number,
};

Skill.defaultProps = {
  resize: 1004,
};
export default Skill;
