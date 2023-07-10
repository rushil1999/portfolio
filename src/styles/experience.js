import black from '../assets/black.jpeg';


export const companyCardHoverStyle = {
  transition: { duration: 0.7 },
  border: 'solid',
  borderWidth: '3px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

export const companyCardExternalStyle = { width: '50%', padding: '15px' }


export const experienceCardBackgroundStyle = {
  // backgroundImage: `linear-gradient(${0}deg, ${'#402565 '}, ${'#30BE96'})`
  backgroundImage: `url(${black})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}
