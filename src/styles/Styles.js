import styled from 'styled-components'

export const SH3 = styled.h3`
    color: blue;
    letter-spacing: 5px;
    margin: 5px
`

export const SH4 = styled.h4`
    font-weight: 600;
    margin: 5px;
`
export const SH5 = styled.h5`
    color: grey;
    margin: 5px
`
export const F1 = styled.h3`
    font-family: Arial, Helvetica, sans-serif;
    color: blue; 
    margin: 2px;
`
export const F2 = styled.h4`
    color: rgb(128, 128, 241);
    margin: 2px;
`
export const F3 = styled.h5`
    color: grey;
    margin: 5px;
`

export const SDiv1 = styled.div`
    border: 2px solid orange;
    margin-left: 25vw; margin-bottom: 8px;
    @media (max-width: 768px) {
    margin-left: 0px;
  }
`
export const SDiv2 = styled.div`
    border: 2px solid violet;
    margin-left: 25vw; margin-bottom: 8px;
    @media (max-width: 768px) {
        margin-left: 0px;
  }
`
export const SDiv3 = styled.div`
    border: 2px solid olive;
    margin-left: 25vw; margin-bottom: 8px;
    @media (max-width: 768px) {
        margin-left: 0px;
  }
`
export const SDiv4 = styled.div`
    border: 2px solid purple;
    margin-left: 25vw; margin-bottom: 8px;
    @media (max-width: 768px) {
        margin-left: 0px;
  }
`
export const SDiv5 = styled.div`
    position: absolute;
    width: 25vw;
    text-align: center;
    margin-top: 120px;
    @media (max-width: 768px) {
    position: initial;
    margin: 0 auto;
    width: 100vw;
  }
`
export const SIMG = styled.img`
    width: 12vw;
    border-radius: 100%;
    height: 12vw;
    @media (max-width: 768px) {
        width: 50vw; height: 50vw;
      }
`

export const Cont = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px
`
export const Sprogress = styled.progress`
    width: 250px;
    margin-left: 5px;
    -webkit-appearance: none;
    ::-webkit-progress-bar {
        background-color: rgb(67, 139, 254);
        border-radius: 5px
        
     }
     
     ::-webkit-progress-value {
       border-radius: 5px 0px 0px 5px;
       background: repeating-linear-gradient(
       -55deg,
       rgb(99, 109, 164),
       rgb(99, 109, 164) 10px,
      rgb(64, 72, 146) 10px,
       rgb(64, 72, 146) 20px
     );

     ::-webkit-progress-inner-element {
        width: 700px
      }
     }
`