import React, { useEffect, useState } from "react";
import "./profile.css"
import bigProfile from "../../assets/icons/bigProfile.svg"
import defaultPostImage from "../../assets/icons/defaultPostImage.svg"
import happy from "../../assets/icons/happy.svg"
import angry from "../../assets/icons/angry.svg"
import sad from "../../assets/icons/sad.svg"
import like from "../../assets/icons/like.svg"
import addReaction from "../../assets/icons/addReaction.svg"
import addComment from "../../assets/icons/addComment.svg"
import reShare from "../../assets/icons/reShare.svg"
import share from "../../assets/icons/share.svg"
import searchIcon from "../../assets/icons/searchIcon.svg"
import placeholderImg from "../../assets/icons/placeholderImg.svg"
import profile from "../../assets/icons/profile.svg"
import coverPhoto from "../../assets/icons/coverPhoto.svg"
import Notification from "../notification/notification";

function Profile(){
    const [selectedOption, setSelectedOption] = useState("posts");

    const handleSelection = (option) => {
        setSelectedOption(option);
    };
    const AnimatedText = () => {
        const text = "COMING SOON...";
        const [displayedText, setDisplayedText] = useState("");
        const [index, setIndex] = useState(0);
    
        useEffect(() => {
            const displayNextLetter = () => {
                if (index < text.length) {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => {
                        setDisplayedText("");
                        setIndex(0);
                    }, 500); // Pause before restarting
                }
            };
    
            const interval = setInterval(displayNextLetter, 500);
    
            return () => clearInterval(interval);
        }, [index, text]);
    
        return (
            <div className="splitedWords">
                <h4 className="Coming">
                    {displayedText.split("").map((letter, idx) => (
                        <span key={idx} className="letter">
                            {letter === " " ? "\u00A0" : letter}
                        </span>
                    ))}
                </h4>
            </div>
        );
    };
    
    return (
        <>
          <section className="homeSection">
            <div className="homeNav">

                <div className="userNameprovide">
                <div className="headerPart">
                    <div className="leftSideContainerHome">
                       <img src={profile} alt="home icon" className="homeIcon" />
                           <div className="banner">
                                <h3 className="username">
                                    your name
                               </h3>
                                <h5 className="totalPosts">
                                    total posts
                                </h5>
                          </div>      
                    </div>
                    <Notification/>
                  </div>
                  <div className="profileSection">
                        <div className="profilePhotoRelated">
                            <img src={coverPhoto} alt="coverPhoto" className="coverPhoto" />
                            <img src={bigProfile} alt="bigProfile" className="bigProfile" />
                        </div>
                        <div className="infoContainer">
                            <h4 className="profileNameMain">Profile Name</h4>
                            <h4 className="userRole">userRole</h4>
                            <h5 className="postInfo">Lorem ipsum, dolor sit amet 
                                consectetur adipisicing elit. Voluptate illum totam
                                 consequuntur aliquam iste autem, enim impedit nemo
                                 libero veniam doloribus recusandae dicta esse maiores
                                  obcaecati placeat soluta sunt deleniti?</h5>
                        </div>
                  </div>
                  <div className="optionsPosts">
                        <div className={`option ${selectedOption === "posts" ? "selected" : ""}`} onClick={() => handleSelection("posts")}>Posts</div>
                        <div className={`option ${selectedOption === "reactions" ? "selected" : ""}`} onClick={() => handleSelection("reactions")}>Reactions</div>
                        <div className={`option ${selectedOption === "comments" ? "selected" : ""}`} onClick={() => handleSelection("comments")}>Comments</div>
                    </div>
                  <div className="olderPosts">
                <img src={defaultPostImage} alt="defaultPostImage icon" className="defaultPost" />
                <div className="postInfo">
                    <h4 className="profileName">Profile Name</h4>
                    <h5 className="postInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis labore officia architecto minus magni id, deserunt magnam possimus illo libero quo aspernatur reiciendis, ea ipsa culpa cupiditate ratione quidem?</h5>
                    <div className="postActions">
                    <div className="reactionsContainer">
                        <button className="reactionsButton">
                                <img src={addReaction} alt="addReaction" className="reactIconMain"/>
                </button>
                <div className="reactionsMenu">
                    <span className="reaction">
                        <img src={like} alt="like" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={happy} alt="happy" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={sad} alt="sad" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={angry} alt="angry" className="reactIcon"/>
                    </span>
                </div>
            </div>
            <button className="reactionsButtonOther">
            <img src={addComment} alt="addComment" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={reShare} alt="reShare" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={share} alt="share" className="reactIconMain"/>
            </button>
        </div>
    </div>
                   </div>
                  <div className="olderPosts">
    <img src={defaultPostImage} alt="defaultPostImage icon" className="defaultPost" />
    <div className="postInfo">
        <h4 className="profileName">Profile Name</h4>
        <h5 className="postInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis labore officia architecto minus magni id, deserunt magnam possimus illo libero quo aspernatur reiciendis, ea ipsa culpa cupiditate ratione quidem?</h5>
        <div className="postActions">
            <div className="reactionsContainer">
                <button className="reactionsButton">
                        <img src={addReaction} alt="addReaction" className="reactIconMain"/>
                </button>
                <div className="reactionsMenu">
                    <span className="reaction">
                        <img src={like} alt="like" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={happy} alt="happy" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={sad} alt="sad" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={angry} alt="angry" className="reactIcon"/>
                    </span>
                </div>
            </div>
            <button className="reactionsButtonOther">
            <img src={addComment} alt="addComment" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={reShare} alt="reShare" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={share} alt="share" className="reactIconMain"/>
            </button>
        </div>
    </div>
                   </div>
                  <div className="olderPosts">
    <img src={defaultPostImage} alt="defaultPostImage icon" className="defaultPost" />
    <div className="postInfo">
        <h4 className="profileName">Profile Name</h4>
        <h5 className="postInfo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet blanditiis labore officia architecto minus magni id, deserunt magnam possimus illo libero quo aspernatur reiciendis, ea ipsa culpa cupiditate ratione quidem?</h5>
        <div className="postActions">
            <div className="reactionsContainer">
                <button className="reactionsButton">
                        <img src={addReaction} alt="addReaction" className="reactIconMain"/>
                </button>
                <div className="reactionsMenu">
                    <span className="reaction">
                        <img src={like} alt="like" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={happy} alt="happy" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={sad} alt="sad" className="reactIcon"/>
                    </span>
                    <span className="reaction">
                        <img src={angry} alt="angry" className="reactIcon"/>
                    </span>
                </div>
            </div>
            <button className="reactionsButtonOther">
            <img src={addComment} alt="addComment" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={reShare} alt="reShare" className="reactIconMain"/>
            </button>
            <button className="reactionsButtonOther">
            <img src={share} alt="share" className="reactIconMain"/>
            </button>
        </div>
    </div>
                   </div>

                </div>

                <div className="searchBar">
                    <div className="searchContainer">
                            <img src={searchIcon} alt="Search" className="searchIcon" />
                            <input type="text" className="searchPosts" placeholder="Search TalkEE " />
                        </div>

                    <div className="placeholdersImages">
                        <img src={placeholderImg} alt="placeholderImg" />
                        <img src={placeholderImg} alt="placeholderImg" />
                        <img src={placeholderImg} alt="placeholderImg" />
                        <img src={placeholderImg} alt="placeholderImg" />
                        <img src={placeholderImg} alt="placeholderImg" />
                        <img src={placeholderImg} alt="placeholderImg" />
                    </div>
                    <div className="cardComming">
                            <h4 className="mightLike">You Might Like</h4>
                            <AnimatedText />
                  </div>
                 </div>
            </div>
        </section> 
        </>
    )
}

export default Profile;