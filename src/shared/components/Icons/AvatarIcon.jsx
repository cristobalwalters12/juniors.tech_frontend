const SIZES = {
  xs: '1.5rem',
  sm: '3.140625rem',
  md: '3.625rem',
  lg: '4.625rem',
  xl: '4.625rem',
  xxl: '6.875rem'

}

const AvatarIcon = ({ size, className }) => {
  const calculatedSize = SIZES[size]
  return (
    <svg width={calculatedSize} height={calculatedSize} viewBox="0 0 20 20" fill="none" className={`inline-block ${className || ''}`}>
    <path opacity="0.5" d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="#8AB0E8"/>
    <path d="M14.807 17.0112C13.4398 17.9504 11.7841 18.5 10 18.5C8.2159 18.5 6.56023 17.9503 5.193 17.0111C4.58915 16.5963 4.33109 15.8062 4.68219 15.1632C5.41001 13.8302 6.90973 13 10 13C13.0903 13 14.59 13.8303 15.3178 15.1632C15.6689 15.8062 15.4108 16.5964 14.807 17.0112Z" fill="#1C274C"/>
    <path d="M9.99996 10C11.6569 10 13 8.6569 13 7C13 5.34315 11.6569 4 9.99996 4C8.34316 4 7 5.34315 7 7C7 8.6569 8.34316 10 9.99996 10Z" fill="#1C274C"/>
  </svg>
  )
}

export default AvatarIcon
