import ArrowLeft from './ArrowLeft';

const icons = {
    arrowLeft: ArrowLeft,
}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={'#f5f5f5'}
        {...props}
    />
  )
}

export default Icon;
