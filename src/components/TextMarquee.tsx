import React from 'react'

export default function TextMarquee() {
  return (
    <div className="marquee__wrapper">
        <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
                <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
                <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
            </div>
        </div>
        <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
            <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
            <span>FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY</span>
            </div>
        </div>
    </div>
  )
}
