import HeaderSub from "../../components/HeaderSub"
import HeaderImage from "../../images/plan_pic.jpg"
import StoryImage from "../../images/avatar5.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./About.css"

function About() {
  return (
    <>
      <HeaderSub title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit voluptas odio reiciendis ipsum culpa debitis assumenda ipsam, sint repellat.
        Non sed dicta modi laboriosam illum delectus placeat labore quis.
      </HeaderSub>
      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores, quisquam vel ipsa ullam incidunt asperiores debitis voluptatem obcaecati laborum.
              Magni rem inventore maxime ea eveniet suscipit iste quam corporis doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsum repudiandae, vel est suscipit recusandae consequuntur quidem illo, saepe facere fuga sequi amet voluptas tempore aliquam.
              Molestiae quisquam sapiente labore magni!
            </p>
            <p>
              saepe facere fuga sequi amet voluptas tempore aliquam.
              Molestiae quisquam sapiente labore magni!
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores, quisquam vel ipsa ullam incidunt asperiores debitis voluptatem obcaecati laborum.
              Magni rem inventore maxime ea eveniet suscipit iste quam corporis doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsum repudiandae, vel est suscipit recusandae consequuntur quidem illo, saepe facere fuga sequi amet voluptas tempore aliquam.
              Molestiae quisquam sapiente labore magni!
            </p>
          </div>
          <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Maiores, quisquam vel ipsa ullam incidunt asperiores debitis voluptatem obcaecati laborum.
              Magni rem inventore maxime ea eveniet suscipit iste quam corporis doloremque.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsum repudiandae, vel est suscipit recusandae consequuntur quidem illo, saepe facere fuga sequi amet voluptas tempore aliquam.
              Molestiae quisquam sapiente labore magni!
            </p>
            <p>
              saepe facere fuga sequi amet voluptas tempore aliquam.
              Molestiae quisquam sapiente labore magni!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About