import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isAddress } from '../../utils/index.js'
import PlaceHolder from '../../assets/placeholder.png'
import EthereumLogo from '../../assets/eth.png'
import SRKLogo from '../../assets/SRK.png'
import OWNLogo from '../../assets/OWN.png'
import BCPLogo from '../../assets/bitcashpay.png'
import FiGLogo from '../../assets/FiG.png'
import KCLPLogo from '../../assets/KCLP.png'
import KiwigoLogo from '../../assets/Kiwigo.png'
import TipsyLogo from '../../assets/TIPSY.png'
import GZILALogo from '../../assets/GZILA.png'
import FlashLogo from '../../assets/flash.png'
import { useListedTokensMap } from '../../contexts/Application'

const BAD_IMAGES = {}

const Inline = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
`

const Image = styled.img`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
`

const StyledEthereumLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: ${({ size }) => size};
    height: ${({ size }) => size};
  }
`

export default function TokenLogo({ address, header = false, size = '24px', ...rest }) {
  const [error, setError] = useState(false)

  useEffect(() => {
    setError(false)
  }, [address])

  if (error || BAD_IMAGES[address]) {
    return (
      <Inline>
        <Image {...rest} alt={''} src={PlaceHolder} size={size} />
      </Inline>
    )
  }

  // hard coded fixes for trust wallet api issues
  if (address?.toLowerCase() === '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb') {
    address = '0x42456d7084eacf4083f1140d3229471bba2949a8'
  }

  if (address?.toLowerCase() === '0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f') {
    address = '0xc011a72400e58ecd99ee497cf89e3775d4bd732f'
  }

  if (address?.toLowerCase() === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={EthereumLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0xc3440c10c4f36f354eb591b19fafb4906d449b75') {
    // SRKb
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={SRKLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x47b8806c2891c4a92b5c590c32cfe1eb617648ef') {
    // KCLP
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={KCLPLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x7665cb7b0d01df1c9f9b9cc66019f00abd6959ba') {
    // Ownly
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={OWNLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8') {
    // SRK
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={SRKLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0xb44a9b6905af7c801311e8f4e76932ee959c663c') {
    // BCP
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={BCPLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x53fdca9a60c911d4e58759b0ae39a2bf2efef5d4') {
    // FiG
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={FiGLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0xf380334b9a181f54bf2f32fdd3e153d259472ebb') {
    // TIPSY
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={TipsyLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x4178934c6e313a062c5addd66ab0d9b8d858347a') {
    // gzila
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={GZILALogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  if (address?.toLowerCase() === '0x5f0366c9962193fA774cdce9602195593B49f23C') {
    // flash
    return (
      <StyledEthereumLogo size={size} {...rest}>
        <img
          src={FlashLogo}
          style={{
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.075)',
            borderRadius: '24px'
          }}
          alt=""
        />
      </StyledEthereumLogo>
    )
  }

  const path = `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${isAddress(
    address
  )}/logo.png`

  return (
    <Inline>
      <Image
        {...rest}
        alt={''}
        src={path}
        size={size}
        onError={event => {
          BAD_IMAGES[address] = true
          setError(true)
          event.preventDefault()
        }}
      />
    </Inline>
  )
}
