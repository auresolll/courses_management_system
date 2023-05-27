import { useAuth0 } from "@auth0/auth0-react";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { setOpenCardDetail } from "../../app/redux/features/cardSlice";
import { RootState } from "../../app/redux/store";
import { generateUUID } from "../../helper";
import CardGallery from "../CardGallery/CardGallery.lazy";
import styles from "./CardPreview.module.scss";

interface CardPreviewProps {}
interface CardPreviewHeadProps {}
interface CardPreviewContentProps {}

const scrollBody = (isNeedHidden: boolean) => {
  const bodyContainer = document.querySelector("body");
  if (!bodyContainer) return;

  if (isNeedHidden) {
    bodyContainer.style.overflow = "hidden";
  } else {
    bodyContainer.style.overflow = "auto";
  }
};
const CardPreviewHead: FC<CardPreviewHeadProps> = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const navigate = useNavigate();
  const card = useSelector((state: RootState) => state.card);
  const dispatch = useDispatch();
  return (
    <section className={styles.CardPreview__Head}>
      <div className={styles.CardPreview__Head__Breadcrumbs}>
        <i
          className="ri-home-line"
          onClick={() => dispatch(setOpenCardDetail(false))}
        ></i>
        <i className="ri-arrow-right-s-line"></i>

        <span
          data-tooltip-id="my-tooltip"
          data-tooltip-content={`
    Information Technology (IT) courses and specializations teach cloud computing, cyber security, data management,
    networking, and more. Learn to use computers to meet day-to-day business 
    needs and launch or advance your career in the IT industry.`}
        >
          Development
        </span>
        <i className="ri-arrow-right-s-line"></i>
        <span data-tooltip-id="my-tooltip" data-tooltip-content={""}>
          Game Development
        </span>
        <Tooltip id="my-tooltip" style={{ width: "300px" }} />
      </div>

      <div className={styles.CardPreview__Head__Content}>
        <div className={styles.CardPreview__Head__Content__Information}>
          <img
            src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/c0/87a10033a311e892619b85c6fd62bb/IBM-200x48.png?auto=format%2Ccompress&dpr=1&w=&h=45"
            alt=""
          />

          <h1
            className={styles.CardPreview__Head__Content__Information__Heading}
          >
            IBM Full Stack Software Developer Professional Certificate
          </h1>

          <p className={styles.CardPreview__Head__Content__Information__Desc}>
            Kickstart your career in application development. Master Cloud
            Native and Full Stack Development using hands-on projects involving
            HTML, JavaScript, Node.js, Python, Django, Containers, Microservices
            and more. No prior experience required.
          </p>

          <div
            className={`${styles.CardPreview__Head__Content__Information__Row}
            ${styles.CardPreview__Head__Content__Information__Col}`}
          >
            <div
              className={`${styles.CardPreview__Head__Content__Information__Row}
              ${styles.CardPreview__Head__Content__Information__Col}`}
            >
              <div
                className={styles.CardPreview__Head__Content__Information__Row}
              >
                <button
                  className={
                    styles.CardPreview__Head__Content__Information__Row__Title
                  }
                >
                  Bán chạy
                </button>
                <strong
                  className={
                    styles.CardPreview__Head__Content__Information__Row__RatingsTitle
                  }
                >
                  4.8
                </strong>

                <div>
                  <i
                    className={`ri-star-s-fill ${styles.CardPreview__Head__Content__Information__Row__IconStar}`}
                  ></i>
                  <i
                    className={`ri-star-s-fill ${styles.CardPreview__Head__Content__Information__Row__IconStar}`}
                  ></i>
                  <i
                    className={`ri-star-s-fill ${styles.CardPreview__Head__Content__Information__Row__IconStar}`}
                  ></i>
                  <i
                    className={`ri-star-s-fill ${styles.CardPreview__Head__Content__Information__Row__IconStar}`}
                  ></i>
                </div>
              </div>
              <div
                className={`${styles.CardPreview__Head__Content__Information__Row}`}
              >
                <span
                  className={
                    styles.CardPreview__Head__Content__Information__Row__RatingsCalculator
                  }
                >
                  (1.512 đánh giá)
                </span>
                <span
                  className={
                    styles.CardPreview__Head__Content__Information__Row__RatingsCount
                  }
                >
                  20.516 sinh viên
                </span>
              </div>
            </div>
          </div>
          <p className={styles.CardPreview__Head__Content__Information__Row}>
            <span>Đăng bởi</span>
            <span
              className={
                styles.CardPreview__Head__Content__Information__Row__Instructor
              }
            >
              Joe F
            </span>
            <span
              className={
                styles.CardPreview__Head__Content__Information__Row__Instructor
              }
            >
              Rav Ahuja
            </span>
          </p>
        </div>

        {card.isOpenCardDetail && (
          <div
            className={`${styles.CardPreview__Head__Content__Overview} Content__Overview`}
          >
            <div className={styles.CardPreview__Head__Content__Overview__Head}>
              <h3
                className={
                  styles.CardPreview__Head__Content__Overview__Head__Title
                }
              >
                Professional Certificate - 12 course series
              </h3>
              <p
                className={
                  styles.CardPreview__Head__Content__Overview__Head__Desc
                }
              >
                Earn a career credential that demonstrates your expertise
              </p>
            </div>

            <div className={styles.CardPreview__Head__Content__Overview__Mid}>
              <div
                className={
                  styles.CardPreview__Head__Content__Overview__Mid__Col
                }
              >
                <h6>Giá ưu đãi</h6>
                <p
                  className={
                    styles.CardPreview__Head__Content__Information__Row
                  }
                >
                  <span>250.000 VND</span>
                  <del>600.000 VND</del>
                </p>
              </div>
              <div
                className={
                  styles.CardPreview__Head__Content__Overview__Mid__Col
                }
              >
                <h6>Cấp độ cho người bắt đầu</h6>
                <p>Không cần kinh nghiệm trước đó</p>
              </div>
              <div
                className={
                  styles.CardPreview__Head__Content__Overview__Mid__Col
                }
              >
                <h6>4 tháng trong 10 giờ mỗi tuần</h6>
              </div>
              <div
                className={
                  styles.CardPreview__Head__Content__Overview__Mid__Col
                }
              >
                <h6>Kế hoạch linh hoạt</h6>
                <p>Học theo tốc độ của riêng bạn</p>
              </div>
            </div>

            <button
              className={styles.CardPreview__Head__Content__Overview__Add}
            >
              THÊM GIỎ HÀNG
            </button>
            <button
              className={styles.CardPreview__Head__Content__Overview__Checkout}
              onClick={() => {
                if (!isAuthenticated) {
                  loginWithPopup();
                  return;
                }

                const NAME = card.name
                  .toLocaleLowerCase()
                  .replaceAll(/[\n\r\s\t]+/g, "-")
                  .replaceAll(":", "");
                navigate(`/${NAME}/module/1`);
              }}
            >
              THANH TOÁN
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const CardPreviewContent: FC<CardPreviewContentProps> = () => {
  const [isReadingMore, setIsReadingMore] = useState<boolean>(false);
  return (
    <>
      <section className={styles.CardPreview__DescCourses}>
        <h5 className={styles.CardPreview__WhatLearn__Title}>Mô tả khóa học</h5>
        <strong>
          <small>7,295 người xem bài viết</small>
        </strong>
        <div
          className={`${styles.CardPreview__DescCourses__Desc} ${
            isReadingMore && styles.CardPreview__DescCourses__Active__Desc
          }`}
          dangerouslySetInnerHTML={{ __html: paraTest }}
        />
        <button onClick={() => setIsReadingMore(!isReadingMore)}>
          {!isReadingMore ? "Xem thêm" : "Hiện ít hơn"}
        </button>
      </section>

      <section className={styles.CardPreview__WhatLearn}>
        <h5 className={styles.CardPreview__WhatLearn__Title}>
          Bạn sẽ học những gì?
        </h5>

        <ul className={styles.CardPreview__WhatLearn__List}>
          {[1, 2, 4, 5].map((item) => (
            <li
              className={styles.CardPreview__WhatLearn__List__Item}
              key={generateUUID()}
            >
              <i className="ri-check-line"></i>
              <span>
                Stand out from other candidates and get interviews for video
                game jobs no matter which role you are interested in.
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.CardPreview__Skills}>
        <h5 className={styles.CardPreview__WhatLearn__Title}>
          Kỹ năng bạn nhận được
        </h5>

        <ul className={styles.CardPreview__Skills__List}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item) => (
            <li
              className={styles.CardPreview__Skills__List__Item}
              key={generateUUID()}
            >
              Cloud Native
            </li>
          ))}
          <strong className={styles.CardPreview__ViewLess}>
            Xem thêm kỹ năng
          </strong>
        </ul>
      </section>

      <div className="stopScrollBlock">
        <section
          className={`${styles.CardPreview__CoursesContent} Courses__Content`}
        >
          <h5 className={styles.CardPreview__WhatLearn__Title}>
            Syllabus - Những gì bạn sẽ học trong khóa học này
          </h5>

          <ul className={styles.CardPreview__CoursesContent__List}>
            {[1, 2, 3, 4, 5].map((item) => (
              <li
                className={styles.CardPreview__CoursesContent__List__Item}
                key={generateUUID()}
              >
                <div
                  className={
                    styles.CardPreview__CoursesContent__List__Item__Block
                  }
                >
                  <span
                    className={
                      styles.CardPreview__CoursesContent__List__Item__Block__Week
                    }
                  >
                    TUẦN
                  </span>
                  <span
                    className={
                      styles.CardPreview__CoursesContent__List__Item__Block__Number
                    }
                  >
                    {item}
                  </span>
                </div>

                <div
                  className={
                    styles.CardPreview__CoursesContent__List__Item__Content
                  }
                >
                  <div
                    className={
                      styles.CardPreview__CoursesContent__List__Item__Content__HoursCompletion
                    }
                  >
                    {iconHoursCompletion}
                    <span>6 giờ để hoàn thành</span>
                  </div>

                  <div
                    className={
                      styles.CardPreview__CoursesContent__List__Item__Content__Info
                    }
                  >
                    <h3
                      className={
                        styles.CardPreview__CoursesContent__List__Item__Content__Info__Title
                      }
                    >
                      Documenting and Building REST API's using Vanilla Node.js
                    </h3>
                    <p
                      className={
                        styles.CardPreview__CoursesContent__List__Item__Content__Info__Desc
                      }
                    >
                      For newly emerged technologies, REST APIs offer a
                      flexible, lightweight process to integrate applications.
                      These API's have emerged as the most common method used
                      for connecting components of the distributed system. For a
                      backend developer building REST APIs is one of the basic
                      requirements. The skills acquired in this learning sprint
                      will enable you to build REST APIs using Vanilla JS.
                    </p>
                  </div>

                  <div
                    className={
                      styles.CardPreview__CoursesContent__List__Item__Content__HoursCompletion
                    }
                  >
                    {iconBookMark}
                    <span
                      className={
                        styles.CardPreview__CoursesContent__List__Item__Content__HoursCompletion__Info
                      }
                    >
                      16 videos (Tổng 48 phút), 2 readings, 3 quizzes
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.CardPreview__Recommend}>
          <h5 className={styles.CardPreview__Review__Title}>
            <i className="ri-sparkling-2-fill"></i>
            <span>Sinh viên cũng mua</span>
          </h5>

          <CardGallery />
        </section>

        <section className={styles.CardPreview__Instructor}>
          <h5 className={styles.CardPreview__WhatLearn__Title}>Instructor</h5>
          <div className={styles.CardPreview__Instructor__Row}>
            {[1, 2].map((item) => {
              const [isReadingMoreInstructor, setIsReadingMoreInstructor] =
                useState(false);

              return (
                <div
                  className={styles.CardPreview__Instructor__Info}
                  key={generateUUID()}
                >
                  <Link
                    to={"#"}
                    className={styles.CardPreview__Instructor__Info__Link}
                  >
                    Dr. Angela Yu
                  </Link>
                  <p className={styles.CardPreview__Instructor__Info__Desc}>
                    Developer and Lead Instructor
                  </p>

                  <div className={styles.CardPreview__Instructor__Info__Warper}>
                    <img
                      src="https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg"
                      alt=""
                      className={
                        styles.CardPreview__Instructor__Info__Warper__Picture
                      }
                    />
                    <div
                      className={
                        styles.CardPreview__Instructor__Info__Warper__Info
                      }
                    >
                      <p>
                        <i className="ri-star-s-fill"></i>
                        <span> 4.7 Điểm đánh giá</span>
                      </p>
                      <p>
                        <i className="ri-shield-star-fill"></i>
                        <span>630,523 Nhận xét</span>
                      </p>
                      <p>
                        <i className="ri-group-2-fill"></i>
                        <span>2,084,182 Sinh viên</span>
                      </p>
                      <p>
                        <i className="ri-play-circle-fill"></i>
                        <span>8 Khóa học</span>
                      </p>
                    </div>
                  </div>

                  <div
                    className={`${
                      styles.CardPreview__Instructor__Info__Introduce
                    } ${
                      isReadingMoreInstructor &&
                      styles.CardPreview__Instructor__Info__Active__Introduce
                    }`}
                    dangerouslySetInnerHTML={{ __html: paraTest }}
                  />

                  <button
                    onClick={() =>
                      setIsReadingMoreInstructor(!isReadingMoreInstructor)
                    }
                  >
                    {!isReadingMoreInstructor ? "Xem thêm" : "Hiển thị ít hơn"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.CardPreview__Recommend}>
          <h5 className={styles.CardPreview__Review__Title}>
            <i className="ri-sparkling-2-fill"></i>
            <span>Các khóa học khác của Tiến sĩ Angela Yu</span>
          </h5>

          <CardGallery />
        </section>

        <section className={styles.CardPreview__Review}>
          <h5 className={styles.CardPreview__Review__Title}>
            <i className="ri-star-fill"></i>
            <span>4.8 điểm đánh giá khóa học 1k lượt đánh giá</span>
          </h5>
          <div className={styles.CardPreview__Review__List}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className={styles.CardPreview__Review__Item}
                key={generateUUID()}
              >
                <div className={styles.CardPreview__Review__Item__Warper__User}>
                  <img
                    src="https://img-c.udemycdn.com/user/50x50/77096638_db0f_2.jpg"
                    alt=""
                    className={
                      styles.CardPreview__Review__Item__Warper__User__Picture
                    }
                  />
                  <div
                    className={
                      styles.CardPreview__Review__Item__Warper__User__Info
                    }
                  >
                    <h6
                      className={
                        styles.CardPreview__Review__Item__Warper__User__Info__Title
                      }
                    >
                      Praveen K.
                    </h6>
                    <div
                      className={
                        styles.CardPreview__Review__Item__Warper__User__Info__Warper
                      }
                    >
                      <div
                        className={
                          styles.CardPreview__Review__Item__Warper__User__Info__Warper__Star
                        }
                      >
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                        <i className="ri-star-s-fill"></i>
                      </div>
                      <p
                        className={
                          styles.CardPreview__Review__Item__Warper__User__Info__Warper__CreateDate
                        }
                      >
                        a week ago
                      </p>
                    </div>
                  </div>
                </div>

                <p className={styles.CardPreview__Review__Item__Desc}>
                  I was zero in Python and started this course. Angela is a
                  really good tutor as well as a guide. You will feel awesome
                  and confident after completing this course.
                </p>
              </div>
            ))}
          </div>
          <button>Xem thêm</button>
        </section>
      </div>
    </>
  );
};
const CardPreview: FC<CardPreviewProps> = () => {
  const card = useSelector((state: RootState) => state.card);

  useEffect(() => {
    const stopScrollBlock = document.querySelector(".stopScrollBlock");
    const blockScroll =
      document.querySelector<HTMLElement>(".Content__Overview");
    if (!blockScroll) {
      return;
    }
    if (!stopScrollBlock) {
      blockScroll.style.position = "sticky";
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.width < 1200) {
          blockScroll.style.position = "sticky";
          return;
        }
        if (entry.isIntersecting) {
          blockScroll.style.position = "sticky";
        } else {
          blockScroll.style.position = "fixed";
        }
      });
    });
    observer.observe(stopScrollBlock);
  }, [card.isOpenCardDetail]);
  useEffect(() => {
    scrollBody(card.isOpenCardDetail);
  }, [card.isOpenCardDetail]);
  return (
    <div
      className={`${styles.CardPreview} ${
        card.isOpenCardDetail && `${styles.CardPreview__Active} `
      }`}
    >
      <CardPreviewHead />
      <ul className={styles.CardPreview__Nav}>
        <li
          className={`${styles.CardPreview__Nav__Item} ${styles.CardPreview__Active__Nav__Item}`}
        >
          Thông tin
        </li>
        <li className={`${styles.CardPreview__Nav__Item} `}>Syllabus</li>
        <li className={`${styles.CardPreview__Nav__Item} `}>Mô tả</li>
        <li className={`${styles.CardPreview__Nav__Item} `}>FAQ</li>
      </ul>
      <CardPreviewContent />
    </div>
  );
};

export const iconHoursCompletion = (
  <svg
    aria-hidden="true"
    className="_ufjrdd"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby="Hourstocomplete97a5b70c-fef0-444f-ec78-d8a1f1124d72 Hourstocomplete97a5b70c-fef0-444f-ec78-d8a1f1124d72Desc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="Hourstocomplete97a5b70c-fef0-444f-ec78-d8a1f1124d72">
      Hours to complete
    </title>
    <path
      d="M24 47C11.318375 47 1 36.681625 1 24S11.318375 1 24 1s23 10.318375 23 23-10.318375 23-23 23zM2.91666667 24c0 11.6255417 9.45779163 21.0833333 21.08333333 21.0833333S45.0833333 35.6255417 45.0833333 24 35.6255417 2.91666667 24 2.91666667 2.91666667 12.3744583 2.91666667 24zm19.12500003 1.9166667V6.70833333h2.9166666V23H35.5v2.9166667H22.0416667z"
      role="presentation"
    ></path>
  </svg>
);

export const iconBookMark = (
  <svg
    aria-hidden="true"
    className="_ufjrdd"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby="Readingb3a5b32d-54c3-48cf-fcbd-2d0216e7f46a Readingb3a5b32d-54c3-48cf-fcbd-2d0216e7f46aDesc"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="Readingb3a5b32d-54c3-48cf-fcbd-2d0216e7f46a">Reading</title>
    <path
      d="M28.67 14H38v19.68h-9.34c-4 0-4.08 2.32-4.08 2.32H23.4s-.05-2.32-4.03-2.32h-9.33l-.04-.53V14h9.34c1.96 0 3.76 1.1 4.66 2.83.9-1.74 2.7-2.83 4.67-2.83zm-.3 18H36V16h-7.64c-1 0-2 .56-2.7 1.25-.73.7-.66 1.6-.66 2.7h-1.98c0-.98.05-2-.67-2.7-.72-.7-1.66-1.26-2.68-1.25h-7.64L12 32h7.67c1.84 0 2.8.1 3.35 1V19.97H25V33c.55-.9 1.5-1 3.36-1zM24 47C11.3 47 1 36.7 1 24S11.3 1 24 1s23 10.3 23 23-10.3 23-23 23zm0-1.84c11.7 0 21.16-9.47 21.16-21.16C45.16 12.3 35.7 2.84 24 2.84 12.3 2.84 2.84 12.3 2.84 24c0 11.7 9.47 21.16 21.16 21.16z"
      role="presentation"
    ></path>
  </svg>
);

const paraTest = `
<p>Welcome to the Complete Web Development Bootcamp,<strong>&nbsp;the only course you need</strong>&nbsp;to learn to code and become a full-stack web developer. With 150,000+ ratings and a 4.8 average, my Web Development course is one of the HIGHEST&nbsp;RATED courses in the history of Udemy!&nbsp;</p>

<p>At 65+ hours, this Web Development course is without a doubt the&nbsp;<strong>most comprehensive&nbsp;</strong>web development course available online. Even if you have&nbsp;<strong>zero</strong>&nbsp;programming experience, this course will take you from&nbsp;<strong>beginner to mastery</strong>. Here&#39;s why:</p>

<ul>
	<li>
	<p>The course is taught by the&nbsp;<strong>lead instructor</strong>&nbsp;at the App Brewery, London&#39;s&nbsp;<strong>leading in-person programming bootcamp</strong>.</p>
	</li>
	<li>
	<p>The course has been updated to be&nbsp;<strong>2023 ready&nbsp;</strong>and you&#39;ll be learning the latest tools and technologies used at large companies such as Apple, Google and Netflix.</p>
	</li>
	<li>
	<p>This course doesn&#39;t cut any corners, there are beautiful&nbsp;<strong>animated explanation videos</strong>&nbsp;and tens of&nbsp;<strong>real-world projects</strong>&nbsp;which you will get to build.</p>
	</li>
	<li>
	<p>The curriculum was developed over a period of&nbsp;<strong>four years</strong>, with comprehensive student testing and feedback.</p>
	</li>
	<li>
	<p>We&#39;ve taught over a&nbsp;<strong>million</strong>&nbsp;students how to code and many have gone on to&nbsp;<strong>change their lives&nbsp;</strong>by becoming professional developers or starting their own tech startup.</p>
	</li>
	<li>
	<p>You&#39;ll save yourself&nbsp;<strong>over $12,000&nbsp;</strong>by enrolling, but still get access to the same teaching materials and learn from the same instructor and curriculum as our in-person programming bootcamp.</p>
	</li>
	<li>
	<p>The course is&nbsp;<strong>constantly updated</strong>&nbsp;with new content, with new projects and modules determined by students - that&#39;s you!</p>
	</li>
</ul>

<p>&nbsp;</p>

<p>We&#39;ll take you&nbsp;<strong>step-by-step</strong>&nbsp;through engaging video tutorials and teach you everything you need to know to succeed as a web developer.</p>

<p>The course includes over&nbsp;<strong>65 hours</strong>&nbsp;of HD video tutorials and builds your programming knowledge while making real-world websites and web apps.</p>

<p>&nbsp;</p>

<p>Throughout this comprehensive course, we cover a massive amount of tools and technologies, including:</p>

<ul>
	<li>
	<p>Front-End Web Development</p>
	</li>
	<li>
	<p><strong>HTML</strong>&nbsp;5</p>
	</li>
	<li>
	<p><strong>CSS</strong>&nbsp;3</p>
	</li>
	<li>
	<p><strong>Flexbox</strong></p>
	</li>
	<li>
	<p><strong>Grid</strong></p>
	</li>
	<li>
	<p>Bootstrap 5</p>
	</li>
	<li>
	<p><strong>Javascript</strong>&nbsp;ES6</p>
	</li>
	<li>
	<p>DOM Manipulation</p>
	</li>
	<li>
	<p><strong>jQuery</strong></p>
	</li>
	<li>
	<p>Bash Command Line</p>
	</li>
	<li>
	<p>Git,&nbsp;<strong>GitHub</strong>&nbsp;and Version Control</p>
	</li>
	<li>
	<p>Backend Web Development</p>
	</li>
	<li>
	<p><strong>Node</strong>.js</p>
	</li>
	<li>
	<p>NPM</p>
	</li>
	<li>
	<p><strong>Express</strong>.js</p>
	</li>
	<li>
	<p>EJS</p>
	</li>
	<li>
	<p>REST</p>
	</li>
	<li>
	<p><strong>APIs</strong></p>
	</li>
	<li>
	<p>Databases</p>
	</li>
	<li>
	<p>SQL</p>
	</li>
	<li>
	<p><strong>MongoDB</strong></p>
	</li>
	<li>
	<p>Mongoose</p>
	</li>
	<li>
	<p>Authentication</p>
	</li>
	<li>
	<p>Firebase</p>
	</li>
	<li>
	<p><strong>React</strong>.js</p>
	</li>
	<li>
	<p>React Hooks</p>
	</li>
	<li>
	<p>Web Design</p>
	</li>
	<li>
	<p>Deployment with GitHub Pages, Heroku and MongoDB&nbsp;Atlas</p>
	</li>
	<li>
	<p>Web3 Development on the Internet Computer</p>
	</li>
	<li>
	<p>Blockchain technology</p>
	</li>
	<li>
	<p>Token contract development</p>
	</li>
	<li>
	<p>NFT minting, buying and selling logic</p>
	</li>
</ul>

<p>By the end of this course, you will be&nbsp;<strong>fluently</strong>&nbsp;programming&nbsp;and be ready to&nbsp;<strong>make any website you can dream of.</strong></p>

<p>You&#39;ll also build a&nbsp;<strong>portfolio</strong>&nbsp;of over 32+ websites that you can&nbsp;<strong>show off</strong>&nbsp;to any potential employer.</p>

<p><strong>Sign up today, and look forward to:</strong></p>

<ul>
	<li>
	<p>Animated Video Lectures</p>
	</li>
	<li>
	<p>Code Challenges and Coding Exercises</p>
	</li>
	<li>
	<p>Beautiful Real-World Projects</p>
	</li>
	<li>
	<p>Quizzes &amp; Practice Tests</p>
	</li>
	<li>
	<p>Downloadable Programming Resources and Cheatsheets</p>
	</li>
	<li>
	<p>Our best selling 12 Rules to Learn to Code eBook</p>
	</li>
	<li>
	<p>$12,000+&nbsp;worth of web development bootcamp&nbsp;course materials and course curriculum</p>
	</li>
</ul>

<p>&nbsp;</p>

<p>Don&#39;t just take my word for it, check out what existing students have to say about the course:</p>

<p>&quot;Angela is just incredible, awesome and just fantastic in this course. I&#39;ve never had such an instructor;&nbsp;<strong>detailed</strong>&nbsp;in every aspect of the course, gives precise explanations, gives you the anxiety to learn etc. She&#39;s got that ability to make fun while explaining things for better understanding. I really love this course.&quot; - Ekeu MonkamUlrich</p>

<p>&quot;Angela is very thorough without ever being boring. I&#39;ve taken MANY online courses in my life including my Bachelors and Masters degrees. She is by far the best instructor I&#39;ve ever had. This course is&nbsp;<strong>packed with thousands of dollars worth of great instruction</strong>, and paced well enough for anyone to pick coding up and run with it- Thank you!&quot; - J Carlucci</p>

<p>&quot;Love the way Angela explains things. Easy to follow and full of logic. I can say she must have spent a lot of energy creating this great course. Thank you and I recommend it to all who&#39;s interested in coding!&quot; - Yiqing Zheng</p>

<p>&quot;So far (on my third day) this course has taught me&nbsp;<strong>more than I was able to learn in multiple other programming courses</strong>. This course is clearly outlined and builds upon itself gradually in an easy to understand way.&quot; - Normal Ramsey</p>

<p>&quot;This course will take you from beginner to intermediate level for real. If you don&#39;t know how to put together the pieces of web development this is what you&#39;re looking for. Angela explains in an amazing way by&nbsp;<strong>creating projects</strong>&nbsp;all the way during this course, explaining the concepts in real practice. Thank you very much, Angela. I will always consider you my mentor. Look forward to taking more courses with you.&quot; - Moises Dionisio Cruz</p>

<p>&quot;An amazing course, perfect for absolute beginners at the start of their coding journey! Angela is an amazing tutor and can explain in the most simple and comprehensible way even complex coding notions.<strong>&nbsp;Learning web development cannot get any more fun!</strong>&quot; - Zoe Moyssoglou</p>

<p>&quot;It&#39;s a different approach to teaching Web Development. I like that you are&nbsp;<strong>given everything possible to succeed</strong>&nbsp;from the onset.&quot; - Ronick Thomas</p>

<p>The tutor is simply AMAZING, by far the best tutor I have ever had. I would give her 10 stars out of 5. She is not just punching the code and talking to herself, but she is actually explaining things. She keeps on giving really useful hints and she will give you a great load of other references. I always knew what I was doing and why I was doing it. All the extra challenges have just made me remember and understand things better. - Peter Dlugos</p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><strong>REMEMBER&hellip; I&#39;m so confident that you&#39;ll love this course that&nbsp;we&#39;re offering a FULL money-back guarantee for&nbsp;30 days! So it&#39;s a complete no-brainer, sign up today with ZERO&nbsp;risk and EVERYTHING to gain.</strong></p>

<p>So what are you waiting for?&nbsp;Click the buy now button and join the world&#39;s highest-rated web development course.</p>

<h2>Who this course is for:</h2>

<ul>
	<li>If you want to learn to code through building fun and useful projects, then take this course.</li>
	<li>If you want to start your own startup by building your own websites and web apps.</li>
	<li>If you are a seasoned programmer, then take this course to to get up to speed quickly with the latest frameworks and NodeJS</li>
	<li>If you want to take ONE COURSE and learn everything you need to know about web development, take this course</li>
</ul>

`;
export default CardPreview;
