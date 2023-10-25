import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';


const style = {
  fontWeight:"normal"
}

function Welcome() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Added state for loading indicator
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
        navigate('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleLogout = () => {
    if (!isLoggingOut) {
      setIsLoggingOut(true); 
      signOut(auth)
        .then(() => {
          navigate('/login');
        })
        .catch((error) => {
          console.error('Logout error:', error);
        })
        .finally(() => {
          setIsLoggingOut(false); // Re-enable the button when sign-out is complete
        });
    }
  };

  const Data = [
    {
        id: '1',
        src: "https://i.pinimg.com/236x/ce/d8/58/ced8583d9d531bd2b334ea2cdd0c8117.jpg",
        Title: 'ARTICLE 1',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img:"https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },

    {
        id: '1',
        src: "https://i.pinimg.com/236x/77/d9/c1/77d9c1adfabb5a6bf55dcc7ac3b24e5c.jpg",
        Title: 'ARTICLE 2',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img: "https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },
    
    {
        id: '1',
        src: "https://i.pinimg.com/236x/31/c7/d8/31c7d8d658d814e4abfe6e8cbd7589cf.jpg",
        Title: 'ARTICLE 3',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img: "https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },
];


  const Tutorials = [
    {
        id: '4',
        src: "https://i.pinimg.com/564x/da/00/9f/da009f9550a0016ad1f63523243fdba9.jpg",
        Title: 'ARTICLE 1',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img: "https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },

    {
        id: '5',
        src: "https://i.pinimg.com/236x/9a/16/58/9a1658362a7d3c81901d788109992ac6.jpg",
        Title: 'ARTICLE 2',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img: "https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },
    
    {
        id: '6',
        src: "https://i.pinimg.com/236x/e2/77/47/e27747580fd0a509ac8c5de3e145d55a.jpg",
        Title: 'ARTICLE 3',
        Desc: 'This is an image',
        example: 'Eg: Node JS',
        img: "https://images.template.net/74988/Free-Small-Star-Clipart-1.jpg",
        Author: 'Vriti',
    },
];



  return (


    
    <div className="welcome-container">


<header>
    <nav className="navbar">
        <ul>
          <li className="l1">DEV@DEAKIN</li>
           <input className = "bar" placeholder="Search" />
           <li><a href="signup">Log Out</a></li>           
           <li><a href="">Login</a></li>
        </ul>
    </nav>
    <img src="https://i.pinimg.com/564x/cb/0a/05/cb0a05c61fd4e19a4d84c4f68df01970.jpg"  height="530px" width="100%"></img>
    <h1 className='articles'>FEATURED ARTICLES</h1>
</header>

<div className="imageContainer">

      {Data.map((item) => {
      return(
        <div className="imageCard"> 
        <div className="image">
          <img src= {item.src} alt="loading.." height = "100%" width = "100%"></img>
        </div>
        <div className="imageTitle">
          {item.Title}
        </div>
        <div className="imageDesc">
          <>
          <h4>Description</h4>
          {item.Desc}
          </>
        </div>
        <div className="imageEx">
          {item.example}
        </div>
        <div className="imageStar">5
        <img src={item.img} 
                alt="Loading"
                height="10%"
                width="45%"
                />
        </div>
        <div className="imageAuthor">
          {item.Author}
        </div>
      </div>
      )    
      })}
    </div>


    <div className="imageContainer">
      {Tutorials.map((props) => {
      return(
        <div className="imageCard"> 
        <div className="image">
          <img src= {props.src} alt="loading.." height = "100%" width = "100%"></img>
        </div>
        <div className="imageTitle">
          {props.Title}
        </div>
        <div className="imageDesc">
          <>
          <h4>Description</h4>
          {props.Desc}
          </>
        </div>
        <div className="imageEx">
          {props.example}
        </div>
        <div className="imageStar">5
        <img src={props.img} 
                alt="Loading"
                height="10%"
                width="45%"
                />
        </div>
        <div className="imageAuthor">
          {props.Author}
        </div>
      </div>
      )    
      })}
      
<div className="all">
            <div className="explore">
                <h2>Explore</h2>
                <ul>
                    <li>Home</li>
                    <li>Questions</li>
                    <li>Articles</li>
                    <li>Tutorials</li>
                </ul>
            </div>

            <div className="support">
                <h2>Support</h2>
                <ul>
                    <li>FAQs</li>
                    <li>Help</li>
                    <li>Contact Us</li>
                </ul>
            </div>


            <div className="right">
                <h2>Stay Connected</h2>
                <img className= " insta" src="https://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c521.png" alt="loading"  height = "50px" width = " 50px"></img>
                <img className= " insta" src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-transparent-logo-png-0.png" alt="loading"  height = "50px" width = " 50px"></img>
                <img className= " insta" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png" alt="loading"  height = "50px" width = " 50px"></img>

            </div>
            
            <div className="center">
                <h1>DEV@Deakin 2022</h1>
            </div>

            <div className = "middle">
                <div>
                    <h3 style={style}>Privacy Policy</h3>
                </div>
                <div>
                    <h3 style={style}>Terms</h3>
                </div>
                <div>
                    <h3 style={style}>Code of Conduct</h3>
                </div>
            </div>
        </div>



    </div>


    </div>
  );
}


export default Welcome;
