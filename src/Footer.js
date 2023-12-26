import './App.css';

export default function Footer(){
  return (
    <div className="footer">
      {/* <p className="footer-text">Contact Me!</p>
      <a href='' className='footer-insta'>
        <img src="insta-logo.png" alt="insta" className='insta-logo'/>
        @username
      </a> */}
      <a href='https://github.com/NickWickboldt/alexis-website' target='_blank' className='footer-git'>
        <img src='github-logo.png' alt='git' className='git-logo'/>
        © 2023 Nicholas Wickboldt. All Rights Reserved.
      </a>
    </div>
  )
}