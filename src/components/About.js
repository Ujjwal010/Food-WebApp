import './About.css';

function About() {
  return (
    <div className="about">
        <hr className="line"/>
        <div className="about_container">
    <h3 className="about_me">About Me, The Food Man</h3>
    <img src={require('./image/chef.jpg')} alt="chef" />
    <h4 className="about_title"> I am Who I am</h4>
    <h6 className="about_title2">With Passion For Real, Good Food</h6>
    <p className="about_des">Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
     <hr className="line"/>
     </div>
    </div>
  );
}

export default About;