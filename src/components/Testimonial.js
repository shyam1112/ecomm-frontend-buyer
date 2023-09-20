import React from 'react'
import './slideimages/quotes.svg'
import './Navvv.css'
export default function Testimonial() {
    return (
        <div className='containerr'>

            <div className="upfooter" >
                <div className="title">
                
                </div>
                <div className="testimonial-card">

                    <img src="https://thenounproject.com/api/private/icons/3189728/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="alan doe" className="testimonial-banner" style={{ width: "80", height: "80" }} />

                    <p className="testimonial-name">Ashok Ramoliya</p>

                    <p className="testimonial-title">CEO & Founder Invision</p>

                    {/* <img src="./slideimages/quotes.svg" alt="quotation" className="quotation-img" style={{width:"26"}} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="110.961" height="100.305" viewBox="0 0 123.961 109.305"><g transform="translate(0 -7.328)"><path d="M49.8,29.032a5.96,5.96,0,0,0,3-8l-4.9-10.3a5.978,5.978,0,0,0-7.8-2.9,68.894,68.894,0,0,0-21.6,14A52.249,52.249,0,0,0,4,44.732c-2.6,8.6-4,20.3-4,35.2v30.7a6.018,6.018,0,0,0,6,6H45.3a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H26.5c.2-10.1,2.6-18.2,7-24.3C37.1,36.133,42.5,32.133,49.8,29.032Z" fill="#ff909d" /><path d="M120.4,29.032a5.961,5.961,0,0,0,3-8l-4.9-10.2a5.979,5.979,0,0,0-7.8-2.9,72.439,72.439,0,0,0-21.5,13.9,53.37,53.37,0,0,0-14.6,23q-3.9,12.6-3.9,35.1v30.7a6.018,6.018,0,0,0,6,6H116a6.018,6.018,0,0,0,6-6v-39.3a6.017,6.017,0,0,0-6-6H97.1c.2-10.1,2.6-18.2,7-24.3C107.7,36.133,113.1,32.133,120.4,29.032Z" fill="#ff909d" /></g></svg>

                    <p className="testimonial-desc">
                        We’re in the business… of helping yours.
                    </p>

                </div>

            </div>
            <div className='imgg'>
                <div className='upimg'>

                <img src='https://scontent.fbom19-1.fna.fbcdn.net/v/t1.18169-9/13010588_1526322504343585_162749151120665333_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=a3pvCo_IB1AAX-byFkr&_nc_ht=scontent.fbom19-1.fna&oh=00_AfCeMCLy20ZSE9qCcvJMLVTJEzn67yinDr7Q4ZWxvGdU4w&oe=651EA8F0' alt='shopimage'/>
                </div>

            </div>

        </div>
    )
}
