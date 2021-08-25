import React from 'react'
import './NotFound.css'

function NotFound() {
    return (
 
    
        <div className="container">
        <div className="topic">Manager-SV</div>
        <div className="content">
          <input type="radio" name="slider" defaultChecked id="home" />
          <input type="radio" name="slider" id="blog" />
          <input type="radio" name="slider" id="help" />
          <input type="radio" name="slider" id="code" />
          <input type="radio" name="slider" id="about" />
          <div className="list">
            <label htmlFor="home" className="home">
              <i className="fas fa-home" />
              <span className="title">Home</span>
            </label>
            <label htmlFor="blog" className="blog">
              <span className="icon"><i className="fas fa-blog" /></span>
              <span className="title">Blog</span>
            </label>
            <label htmlFor="help" className="help">
              <span className="icon"><i className="far fa-envelope" /></span>
              <span className="title">Help</span>
            </label>
            <label htmlFor="code" className="code">
              <span className="icon"><i className="fas fa-code" /></span>
              <span className="title">Code</span>
            </label>
            <label htmlFor="about" className="about">
              <span className="icon"><i className="far fa-user" /></span>
              <span className="title">About</span>
            </label>
            <div className="slider" />
          </div>
          <div className="text-content">
            <div className="home text">
              <div className="title">Home Content</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi excepturi ducimus sequi dignissimos expedita tempore omnis quos cum, possimus, aspernatur esse nihil commodi est maiores dolorum rem iusto atque, beatae voluptas sit eligendi architecto dolorem temporibus. Non magnam ipsam, voluptas quasi nam dicta ut. Ad corrupti aliquid obcaecati alias, nemo veritatis porro nisi eius sequi dignissimos ea repellendus quibusdam minima ipsum animi quae, libero quisquam a! Laudantium iste est sapiente, ullam itaque odio iure laborum voluptatem quaerat tempore doloremque quam modi, atque minima enim saepe! Dolorem rerum minima incidunt, officia!</p>
            </div>
            <div className="blog text">
              <div className="title">Blog Content</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempora, unde reprehenderit incidunt excepturi blanditiis ullam dignissimos provident quam? Fugit, enim! Architecto ad officiis dignissimos ex quae iusto amet pariatur, ea eius aut velit, tempora magnam hic autem maiores unde corrupti tenetur delectus! Voluptatum praesentium labore consectetur ea qui illum illo distinctio, sunt, ipsam rerum optio quibusdam cum a? Aut facilis non fuga molestiae voluptatem omnis reprehenderit, dignissimos commodi repellat sapiente natus ipsam, ipsa distinctio. Ducimus repudiandae fuga aliquid, numquam.</p>
            </div>
            <div className="help text">
              <div className="title">Help Content</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores error neque, officia excepturi dolores quis dolor, architecto iusto deleniti a soluta nostrum. Fuga reiciendis beatae, dicta voluptatem, vitae eligendi maxime accusamus. Amet totam aut odio velit cumque autem neque sequi provident mollitia, nisi sunt maiores facilis debitis in officiis asperiores saepe quo soluta laudantium ad non quisquam! Repellendus culpa necessitatibus aliquam quod mollitia perspiciatis ducimus doloribus perferendis autem, omnis, impedit, veniam qui dolorem? Ipsam nihil assumenda, sit ratione blanditiis eius aliquam libero iusto, dolorum aut perferendis modi laboriosam sint dolor.</p>
            </div>
            <div className="code text">
              <div className="title">Code Content</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore magnam vitae inventore blanditiis nam tenetur voluptates doloribus error atque reprehenderit, necessitatibus minima incidunt a eius corrupti placeat, quasi similique deserunt, harum? Quia ut impedit ab earum expedita soluta repellat perferendis hic tempora inventore, accusantium porro consequuntur quisquam et assumenda distinctio dignissimos doloremque enim nemo delectus deserunt! Ullam perspiciatis quae aliquid animi quam amet deleniti, at dolorum tenetur, tempore laborum.</p>
            </div>
            <div className="about text">
              <div className="title">About Content</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt possimus quas ad, sit nam veniam illo ullam sapiente, aspernatur fugiat atque. Laboriosam libero voluptatum molestiae veniam earum quisquam, laudantium aperiam, eligendi dicta animi maxime sunt non nisi, ex, ipsa! Soluta ex, quibusdam voluptatem distinctio asperiores recusandae veritatis optio dolorem illo nesciunt quos ullam, dicta numquam ipsam cumque sed. Blanditiis omnis placeat, enim sit dicta eligendi voluptatibus laborum consectetur repudiandae tempora numquam molestiae rerum mollitia nemo. Velit perspiciatis, nesciunt, quo illo quas error debitis molestiae et sapiente neque tempore natus?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
;
export default NotFound
