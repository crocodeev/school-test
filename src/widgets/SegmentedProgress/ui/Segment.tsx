import React, { FunctionComponent } from 'react'
import '../../../shared/styles/styles.css'

export const Segment: FunctionComponent<{index: number, current: number, length: number}> = ({index, current, length}) => {
 
    if (index === current) {
        
        return <span className='progress_item progress_item--current'></span>
    
    } else if (index < current) {
        
        return <span className='progress_item progress_item--done'></span>

    }else {

        return <span className='progress_item'></span>

    }
}
    