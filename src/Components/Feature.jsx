import React from 'react'
import FeatureBox from './FeatureBox';
import featureimage from '../assets/images/feature_1.png';
import featureimage1 from '../assets/images/feature_2.png';
import featureimage2 from '../assets/images/feature_3.png';
function Feature() {
  return (
    <>
      <div id="features">
        <div className="feature-conten">
          <h1>App Features</h1>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.</p>
        </div>
        <div className="a-container">
          <FeatureBox images={featureimage} title='Corporis voluptates sit' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing" />
          <FeatureBox images={featureimage1} title='Ullamco laboris nisi' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing" />
          <FeatureBox images={featureimage2} title='Labore consequatur' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing" />
          <FeatureBox images={featureimage2} title='Beatae veritatis' subtitle="Lorem ipsum dolor sit amet consectetur adipisicing" />
        </div>
      </div>
    </>
  )
}

export default Feature