import React from 'react'
import { StyledImageSide } from './ImageSide.style'
import BrandLogo from '../../Assets/logo.svg'
import Picture from '../../Assets/illustration.svg'

function ImageSide() {
  return (
    <StyledImageSide>
        <img src={BrandLogo} alt='logo'/>
        <img src={Picture} alt='illustration' />

        <h2>Start for free & Get Attractive offers Today !</h2>
    </StyledImageSide>
  )
}

export default ImageSide