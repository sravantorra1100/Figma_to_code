import React from 'react'
import logo3 from '../Assets/logo3.png';
import hamburger from '../Assets/hamburger.jpg';
import background1 from '../Assets/background1.png';
import pic8 from '../Assets/pic8.png';
import pic7 from '../Assets/pic7.png';
import vector from '../Assets/vector.png';
import vector1 from '../Assets/vector1.png';
import group5 from '../Assets/group5.png';
import group6 from '../Assets/group6.png';
import group7 from '../Assets/group7.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';
import rectangle from '../Assets/rectangle.png';
import pic1 from '../Assets/pic1.png';
import pic2 from '../Assets/pic2.png';
import pic3 from '../Assets/pic3.png';
import pic4 from '../Assets/pic4.png';
import piclong from '../Assets/piclong.png';
import pic5 from '../Assets/pic5.png';
import pic6 from '../Assets/pic6.png';
import midday from '../Assets/midday.png';
import elephants from '../Assets/elephants.png';
import amaraujala from '../Assets/amaraujala.png';
import '../Styles/Home.css';
import vector2 from '../Assets/vector2.png';
const Home = () => {
    return (
        <div className="cont">
            <div className='navbar'>
                <div className='navbarl'>
                    <img src={logo3} alt="errorLoading" height="63px" width="153px" />
                </div>
                <div className='navbarc'>
                    <p className='ftxt'>Admission</p>
                    <p className='ftxt'>Student Life</p>
                    <p className='ftxt'>Alumni Connect</p>
                    <p className='ftxt'>Parent Corner</p>
                </div>
                <div className='navbarr'>
                    <div className='hamb'></div>
                    <div className='hamb'></div>
                    <div className='hamb'></div>
                </div>
            </div>
            <div className='social'>
                <img src={facebook} alt="errorLoading" className='socialicon' />
                <img src={twitter} alt="errorLoading" className='socialicon' />
                <img src={linkedin} alt="errorLoading" className='socialicon' />
            </div>
            <div className="enquirybar">
                <p className='tx'>Admission Enquiry</p>
                <p className='txno'><img src={vector} alt="errorLoading" height="29px" width="29px" /> &nbsp;&nbsp;56785788578</p>
                <button className='btn0'>Enquiry</button>
            </div>
            <div className="divline"></div>
            <div>
                <img src={background1} alt="errorLoading" className='background1' />
            </div>
            <div className='welcomediv'>
                <p className='welcomed'><h2> Welcome</h2></p>
                <p className='loremd'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            </div>
            <div className='divlr'>
                <div className='divl'>
                    <p className='p1'>We have more than <span className='p1in'>20+ years </span>of experience our school & Kindergarten.</p>
                    <p className='p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum</p>
                    <button className='btn1'>Read more</button>
                </div>
                <div className='divr'>
                    <div className='divp1'></div>
                    <div className='divp2'></div>
                    <img src={pic7} alt="errorLoading" className='pic7' />
                    <img src={pic8} alt="errorLoading" className='pic6' />

                </div>
            </div>
            <div className='divsymbols'>
                <div className='dtxt'>
                    <div className='divline1'></div>
                    <div className='dtxt1'>Quick Facts</div>
                    <div className='divline1'></div>
                </div>
                <div className='dsymbols'>
                    <div className='dp1' ><img src={group5} alt="errorLoading" className='symb1' /></div>
                    <div className='dp2' ><img src={vector1} alt="errorLoading" className='symb2' /></div>
                    <div className='dp1' ><img src={group6} alt="errorLoading" className='symb1' /></div>
                    <div className='dp2' ><img src={group7} alt="errorLoading" className='symb2' /></div>
                </div>
                <div className='dsymbolstxt1'>
                    <p className='dst1'>Student Teacher Ratio</p>
                    <p className='dst1'>Awards & Recognitions</p>
                    <p className='dst1'>Founded in</p>
                    <p className='dst1'>Extra-curricular activities</p>
                </div>
                <div className='dsymbolstxt2'>
                    <p className='dst2'>35:1</p>
                    <p className='dst2'>2003</p>
                    <p className='dst2'>29</p>
                    <p className='dst2'>8+</p>
                </div>
            </div>

            <div className="bimg">
                <img src={rectangle} alt="errorLoading" height="579px" width="100%" />
                <div className='pic1-4'>
                    <div className='dtxt2'>
                        <div className='divline2'></div>
                        <div className='dtxt22'>Achievements</div>
                        <div className='divline2'></div>
                    </div>
                    <div className='imgs4'>
                        <div className='dimgs4'><img src={pic1} alt="errorLoading" /><p>echno Smart School of the Year awarded by Brainfeed for 2018-19</p></div>
                        <div className='dimgs4'> <img src={pic2} alt="errorLoading" /><p>echno Smart School of the Year awarded by Brainfeed for 2018-19</p></div>
                        <div className='dimgs4'>  <img src={pic3} alt="errorLoading" /><p>echno Smart School of the Year awarded by Brainfeed for 2018-19</p></div>
                        <div className='dimgs4'> <img src={pic3} alt="errorLoading" /><p>echno Smart School of the Year awarded by Brainfeed for 2018-19</p> </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='dtxt3'>
                    <div className='divline3'></div>
                    <div className='dtxt33'>Events</div>
                    <div className='divline3'></div>
                </div>
                <div className='divnois'>
                    <div className='divnoi'>
                        <div className='dip'><p className='gt1'>ANNUAL DAY</p><p className='gt2'>echno Smart School of the Year awarded by Brainfeed for 2018-19dcbc hedueb edbuduud
                            jdbedbuedunuueueduubeub</p></div>
                        <img src={piclong} alt="errorLoading" className='piclong' />
                        <img src={pic4} alt="errorLoading" className='picshort' />
                    </div>
                    <div className='divnoi1'>
                        <img src={pic5} alt="errorLoading" className='lpic' />
                        <img src={pic6} alt="errorLoading" className='rpic' />
                        <div className="dipn"><p className='bt1'>ANNUAL DAY</p>
                            <p className='bt2'>echno Smart School of the Year awarded by Brainfeed for 2018-19 dcbc hedueb edbuduud
                                jdbedbuedunuueueduubeubmjhirhfe efht59tj45o9onn5985095p5- y8hghymyo 5frftr</p></div>
                    </div>
                </div>
            </div>
            <div>
                <div className='dtxt4'>
                    <div className='divline4'></div>
                    <div className='dtxt44'>News</div>
                    <div className='divline4'></div>
                </div>
                <div className='hline'>What’s New At Ryan International School Kandivali East</div>
                <div className='hindiw'>
                    <div><img src={midday} alt="errorLoading" className='hindiwp1' /><p className='hindiwt1'>Graduation day 10</p></div>
                    <div className='sline'></div>
                    <div><img src={elephants} alt="errorLoading" className='hindiwp2' /><p className='hindiwt2'>Graduation day 10</p></div>
                    <div className='sline'></div>
                    <div><img src={amaraujala} alt="errorLoading" className='hindiwp3' /><p className='hindiwt3'>Graduation day 10</p></div>
                </div>
                <div className='btnld'><button className='btnl'>Read more</button></div>
            </div>
            <div className='demail'>
                <input type='emain' name="bemail" className='emaili' value="Enter your email" />
            </div>
            <div className='emails'><img src={vector2} alt="errorLoading" className='emailsm' /></div>

            <div className='dlast'>
                <div className='dlast1'>
                    <img src={logo3} alt="errorLoading" className='lastlogo' />
                    <p className='logotxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                </div>
                <div className='dlast2'>
                    <div className='dlast21'>
                        <p className='lasth'>USEFUL LINKS</p>
                        <li className='lastli'>Blogs</li>
                        <li className='lastli'>FAQS</li>
                        <li className='lastli'>Careers</li>
                        <li className='lastli'>Contact Us</li>
                        <li className='lastli'>Transfer Certificate</li>
                        <li className='lastli'>School Facebook</li>
                        <li className='lastli'>Public Mandatory Disclosure</li>
                    </div>
                    <div className='dlast22'>
                        <p className='lasth'>ACADEMICS</p>
                        <li className='lastli'>CBSE</li>
                        <li className='lastli'>ICSE</li>
                        <li className='lastli'>IGCSE</li>
                        <li className='lastli'>IB</li>
                    </div>
                    <div className='dlast23'>
                        <p className='lasth'>OUR BRANDS</p>
                        <li className='lastli'>Ryan International School</li>
                        <li className='lastli'>Ryan Global School</li>
                        <li className='lastli'>Ryan Shalom Montessori</li>
                        <li className='lastli'>Ryan International Academy</li>
                    </div>
                </div>
            </div>
            <div className='lastlined'>
                <p className='lastline'>CONNECT WITH US</p>
                <div className='sociallast'>
                    <img src={facebook} alt="errorLoading" />
                    <img src={twitter} alt="errorLoading" />
                    <img src={linkedin} alt="errorLoading" />
                </div>
            </div>
            <div className='forgottxt1'>echno Smart School of the Year awarded by the Brainfeed for 2018-19</div>
            <div className='forgottxt2'>echno Smart School of the Year awarded by the Brainfeed for 2018-19</div>
            <div className='forgottxt3'>echno Smart School of the Year awarded by the Brainfeed for 2018-19</div>
            <div className='forgottxt4'>echno Smart School of the Year awarded by the Brainfeed for 2018-19</div>
        </div>

    )
}

export default Home
