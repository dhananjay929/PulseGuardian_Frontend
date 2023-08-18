import React from 'react'

const About = () => {
  return (
    <div className='container fluid' style={{marginTop:"100px"}}>

        <h1>" Welcome to PulseGuardian: Your Personal Heart Health Companion "</h1>     <br />
          
        <div className="about-section">
        <h2>Discover PulseGuardian</h2>
        <p>An innovative application that places the power of heart health prediction right at your fingertips. Our mission at PulseGuardian is to empower individuals with the ability to foresee potential heart health risks using state-of-the-art machine learning technology.</p>
        <p>PulseGuardian functions as your dedicated Heart Health Companion, utilizing advanced algorithms to analyze a comprehensive range of critical health factors. From age and gender to intricate cardiac metrics, our model intelligently processes this data to generate personalized predictions about your susceptibility to heart disease. This proactive approach enables you to take informed steps towards a healthier future.</p>
      </div>

      <div className="how-it-works-section">
        <h2>How PulseGuardian Works ?</h2><br />
        <ol>
          <li>
            <h4>Data Collection</h4>
            <p>Begin by providing essential health details, including age, gender, and various cardiac metrics. Our user-friendly interface makes data entry a breeze.</p>
          </li>
          <li>
            <h4>Algorithmic Magic</h4>
            <p>Behind the scenes, our cutting-edge machine learning algorithms spring into action. They scrutinize your data, recognizing patterns and relationships that might indicate potential heart health risks.</p>
          </li>
          <li>
            <h4>Personalized Predictions</h4>
            <p>PulseGuardian generates personalized predictions based on the analysis of your data. These predictions offer insights into the likelihood of heart disease, giving you an advantage in taking proactive measures.</p>
          </li>
          <li>
            <h4>Informed Decisions</h4>
            <p>Armed with these predictions, you can make well-informed decisions about your health journey. Consult healthcare professionals armed with actionable insights and embark on tailored wellness strategies.</p>
          </li>
          <li>
            <h4>Empowerment</h4>
            <p>PulseGuardian empowers you to take charge of your heart health. Whether it's adopting healthier lifestyle choices, discussing concerns with healthcare providers, or embracing timely interventions, you are in control.</p>
          </li>
        </ol>
      </div>

      <div className="more-section">
        <p>At PulseGuardian, we're more than just an app; we're a partner on your journey to a healthier heart. With accuracy, transparency, and innovation at our core, we're setting new standards in heart health assessment.</p>
        <p>Join us in reimagining heart care—where early detection and prevention redefine the future. PulseGuardian is here to guide you towards a life enriched by well-being and longevity.</p>
      </div></div>
  )
}

export default About